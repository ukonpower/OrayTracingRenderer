uniform float renderType;
uniform vec3 albedo;
uniform vec3 emission;
uniform float roughness;
uniform float metalness;
uniform mat3 normalMatrix;

uniform sampler2D albedoMap;
uniform sampler2D roughnessMap;
uniform sampler2D metalnessMap;
uniform sampler2D normalMap;

varying vec2 vUv;
varying vec3 vNormal;
varying float vDepth;
varying vec4 vPos;
varying vec3 vViewPosition;

vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {

	// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

	vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
	vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
	vec2 st0 = dFdx( vUv.st );
	vec2 st1 = dFdy( vUv.st );

	float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

	vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
	vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
	vec3 N = normalize( surf_norm );

	mat3 tsn = mat3( S, T, N );

	mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

	return normalize( tsn * mapN );

}


void main( void ) {

	if( renderType == 0.0 ) {

		//albedo		
		#ifdef USE_ALBEDOMAP

			gl_FragColor = texture2D( albedoMap, vUv );

		#else
		
			gl_FragColor = vec4( albedo, 0.0 );
			
		#endif
		
	} else if ( renderType == 1.0 ) {

		//emission
		gl_FragColor = vec4( emission, 0.0 );
		
	} else if ( renderType == 2.0 ) {

		#ifdef USE_ROUGHNESSMAP

			gl_FragColor.y = texture2D( roughnessMap, vUv ).y * roughness;

		#else
		
			gl_FragColor.y = roughness;
			
		#endif

		#ifdef USE_METALNESSMAP

			gl_FragColor.z = texture2D( metalnessMap, vUv ).z * metalness;

		#else
		
			gl_FragColor.z = metalness;
			
		#endif
		
	} else if ( renderType == 3.0 || renderType == 5.0 ) {

		//normal

		#ifdef USE_NORMALMAP
			vec3 normal = vNormal; 
			normal = normalize( normalMatrix * normal );
			vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
			mapN.xy *= 1.0;

			normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
			gl_FragColor = vec4( normal * 0.5 + 0.5 , 0.0 );

		#else
		
			gl_FragColor = vec4( vNormal * 0.5 + 0.5, 0.0 );
			
		#endif
		
	} else if ( renderType == 4.0 || renderType == 6.0 ) {

		//depth
		// gl_FragColor = vec4( vec3( ( ( vPos.z / vPos.w ) + 1.0 ) / 2.0 ), vPos.w  );
		gl_FragColor = vec4( vec3( vPos.z ), vPos.w  );
		
	}

	
}