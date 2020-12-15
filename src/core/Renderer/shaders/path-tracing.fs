uniform mat4 cameraMatrixWorld;
uniform mat4 cameraMatrixWorldInverse;
uniform mat4 cameraProjectionMatrix;
uniform mat4 cameraProjectionMatrixInverse;
uniform mat4 projectionMatrix;

uniform float focalDistance;
uniform float dofBlurRadius;

uniform float time;
uniform float frame;

uniform sampler2D backBuffer;
uniform sampler2D albedoBuffer;
uniform sampler2D emissionBuffer;
uniform sampler2D materialBuffer;
uniform sampler2D normalBuffer;
uniform sampler2D depthBuffer;
uniform sampler2D backNormalBuffer;
uniform sampler2D backDepthBuffer;
uniform samplerCube envMap;

uniform int MAX_BOUNCE;
uniform int MAX_STEP;
uniform float RAY_DISTANCE;

varying vec2 vUv;

#pragma glslify: random = require( './random.glsl' )

// #define MAX_BOUNCE 5
// #define MAX_STEP 70
// #define RAY_DISTANCE 0.7
#define INF 1e+10
#define EPS 1e-5

#include <common>
#include <lights_pars_begin>

struct Ray {
	vec3 origin;
	vec3 direction;
};

struct Material {
	vec3 albedo;
	vec3 emission;
	float roughness;
	float metalness;
};

struct Intersection {
	vec3 position;
	vec3 normal;
	vec3 nextPosition;
	bool hit;
	float distance;
	Material material;
};

struct Sphere {
	vec3 position;
	float radius;
	Material material;
};

struct Plane {
	vec3 position;
	vec3 normal;
	Material material;
};

vec3 random3D( vec2 p, float seed ) {

	return vec3(
		random( p + seed ),
		random( p + seed + 100.0 ),
		random( p + seed + 303.2)
	);
	
}

//http://project-asura.com/blog/archives/3124
vec3 ggx( Intersection intersection, Ray ray, vec2 noise )
{

	vec3 normal = intersection.normal;
	float roughness = intersection.material.roughness;

    float a = roughness * roughness;

    float phi = 2.0 * PI * noise.x;
    float cosTheta = sqrt( ( 1.0  - noise.y ) / ( 1.0  + ( a * a - 1.0 ) * noise.y ) );
    float sinTheta = sqrt( 1.0  - cosTheta * cosTheta );
    
    vec3 H;
    H.x = sinTheta * cos( phi );
    H.y = sinTheta * sin( phi );
    H.z = cosTheta;
    
    vec3 upVector = abs( normal.z ) < 0.999 ? vec3( 0, 0, 1 ) : vec3( 1, 0, 0 );
    vec3 tangentX = normalize( cross( upVector , normal ) );
    vec3 tangentY = cross( normal, tangentX );

    return reflect( ray.direction, tangentX * H.x + tangentY * H.y + normal * H.z );

}

float fresnel( float f0, float dVH ) {
	
	return f0 + ( 1.0 - f0 ) * pow( 1.0 - dVH, 2.0 );

}

vec3 diffuse( Intersection intersection, vec2 noise ) {

	vec3 normal = intersection.normal;
	
	float r = sqrt( noise.x );
	float theta = PI2 * noise.y;

	vec3 tDir = vec3( r * cos( theta ), r * sin( theta ), sqrt( 1.0 - noise.x ) );
	vec3 tangent = normalize( cross( normal, abs( normal.x ) > EPS ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 ) ) );
	vec3 binormal = cross( tangent, normal );
	
	return tangent * tDir.x + binormal * tDir.y + normal * tDir.z;

}

bool checkIntersect( inout vec3 startPos, inout vec3 nextPos ) {

	return false;
	
}

vec3 getScreenPos( vec3 p ) {

	vec4 clip = cameraProjectionMatrix * vec4( p, 1.0 );
	return ( clip / clip.w ).xyz;

}

int shootRay( inout Intersection intersection, inout Ray ray, int bounce ) {

	intersection.hit = false;
	intersection.distance = INF;
	intersection.position = ray.origin;

	for( int i = 0; i < MAX_STEP; i++ ) {
		
		intersection.nextPosition = intersection.position + ray.direction * RAY_DISTANCE;
		vec3 startPosClip;
		vec3 nextPosClip;
		vec2 nextPosUV;
		vec4 texDepthFront;
		vec4 texDepthBack;
		float texDepthFrontClip;
		float texDepthBackClip;

		startPosClip = getScreenPos( intersection.position );
		nextPosClip = getScreenPos( intersection.nextPosition );
		
		nextPosUV = nextPosClip.xy * 0.5 + 0.5;

		texDepthFront = texture2D( depthBuffer, nextPosUV );
		texDepthFrontClip = texDepthFront.x / texDepthFront.w;

		texDepthBack = texture2D( backDepthBuffer, nextPosUV );
		texDepthBackClip = texDepthBack.x / texDepthBack.w;

		if(
			( nextPosClip.z >= texDepthFrontClip && startPosClip.z <= texDepthBackClip ) && texDepthFrontClip != 0.0 
		) {

			intersection.hit = true;
			intersection.nextPosition = ( intersection.position + intersection.nextPosition ) / 2.0;

		}

		if( intersection.hit ) {

			Material mat;
			mat.albedo = texture2D( albedoBuffer, nextPosUV ).xyz;
			mat.emission = texture2D( emissionBuffer, nextPosUV ).xyz;
			
			vec4 rmTex = texture2D( materialBuffer, nextPosUV );
			mat.roughness = rmTex.y;
			mat.metalness = rmTex.z;
			intersection.material = mat;
			intersection.normal = normalize( texture2D( normalBuffer, nextPosUV ).xyz * 2.0 - 1.0 );
			intersection.position = ( cameraProjectionMatrixInverse * vec4( (nextPosUV * 2.0 - 1.0) * texDepthFront.w, texDepthFrontClip, texDepthFront.w ) ).xyz;
			
			break;
			
		}

		intersection.position = intersection.nextPosition;

	}

	if( intersection.hit ) {

		float seed =  frame * 0.001 + float( bounce );
		vec2 noise = vec2( random( vUv + sin( seed ) ), random( vUv - cos( seed ) ) );

		ray.origin = intersection.position;

		vec3 v = normalize( - intersection.position );
		float dvh = dot( v, intersection.normal );

		float rnd = random( vUv * 10.0 + sin( time + float( frame ) + seed ) );
		float specular = fresnel( 0.04 + intersection.material.metalness * 0.96, dvh );

		if( rnd > specular ) {
			
			ray.direction = diffuse( intersection, noise );
			
			return 0;
			
		} else {

			ray.direction = ggx( intersection, ray, noise );

			return 1;

		}

	} else {

		vec4 rayDir = vec4( ray.direction, 1.0 ) * cameraMatrixWorldInverse;
		intersection.material.emission = textureCube( envMap, rayDir.xyz, 0.0 ).xyz * 2.5;

		#if NUM_DIR_LIGHTS > 0

			for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

				DirectionalLight dirLight = directionalLights[ i ];
				intersection.material.emission += smoothstep( 0.95, 1.0, dot(dirLight.direction, ray.direction) ) * 20.0 * dirLight.color;
				
			}

		#endif

	}

	return 0;

}

vec3 radiance( inout Ray ray ) {

	Intersection intersection;

	vec3 acc = vec3( 0.0 );
	vec3 ref = vec3( 1.0 );

	for ( int i = 0; i < MAX_BOUNCE; i++ ) {

		int type = shootRay( intersection, ray, i );
		Material mat = intersection.material;

		vec3 col;

		if ( type > 0 ) {

			//ggx
			col = mix( vec3( 1.0 ), mat.albedo, mat.metalness );

		} else {
			
			//diffuse
			col = mix( vec3( 0.0 ), mat.albedo, 1.0 - mat.metalness );

		}

		acc += ref * mat.emission;
		ref *= col;

		if( !intersection.hit ) {

			break;
			
		}
		
	}

	return acc;
	
}

void main( void ) {
	
	vec4 befTex = texture2D( backBuffer, vUv ) * min( frame, 1.0 ) ;

	Ray ray;
	ray.origin = vec3( 0.0, 0.0, 0.0 );
	ray.direction = ( cameraProjectionMatrixInverse * vec4( vUv * 2.0 - 1.0, 1.0, 1.0 ) ).xyz;
	ray.direction = normalize( ray.direction );

	//random
	float r1 = random( vUv + sin( frame * 0.1 ) );
	float r2 = random( vUv - cos( frame * 0.1 ) );

	//anti-aliasing
	// ray.direction.xy += vec2( r1 * 2.0 - 1.0 , r2 * 2.0 - 1.0 ) * 0.001;

	//DOF
	float t1 = PI2 * r1;
	float t2 = sqrt( r2 );
	vec3 offset = vec3(cos(t1)*t2, sin(t1)*t2, 0.0) * (dofBlurRadius + 0.0);
	vec3 p = ray.origin + ray.direction * (focalDistance);
	ray.origin += offset;
	ray.direction = normalize( p - ray.origin );
	
	vec4 o = vec4( ( befTex.xyz + radiance( ray ) ) , 1.0 );

	gl_FragColor = o;
	
}