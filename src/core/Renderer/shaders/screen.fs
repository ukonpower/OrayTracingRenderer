uniform float frame;
uniform sampler2D renderResult;

varying vec2 vUv;

void main( void ) {

	vec3 color = texture2D( renderResult, vUv ).xyz;
	color /= (frame + 1.0);

	gl_FragColor = vec4( color, 1.0 );

}