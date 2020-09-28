varying vec2 vUv;
varying vec3 vNormal;
varying float vDepth;
varying vec4 vPos;
varying vec3 vViewPosition;

void main( void ) {

	vec3 pos = position;

	vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );
	gl_Position = projectionMatrix * mvPosition;

	vUv = uv;
	vNormal = normal;
	vPos = gl_Position;
	vViewPosition = - mvPosition.xyz;

}