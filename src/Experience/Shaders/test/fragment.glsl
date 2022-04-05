precision mediump float;

uniform vec3 uColor;

uniform sampler2D uColorTex;

varying float vRandom;
varying vec2 vUv;


void main() {
    vec4 texColor = texture2D(uColorTex,vUv);
    gl_FragColor = vec4(texColor.xyz, 1.0);
}