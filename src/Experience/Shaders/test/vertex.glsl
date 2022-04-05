
uniform vec3 uFrequency;
uniform float uTime;


attribute float aRandom;

varying float vRandom;
varying vec2 vUv;

void main() {
    vUv = uv;
    vRandom = aRandom;
    mat4 mvpMatrix = projectionMatrix * viewMatrix * modelMatrix;
    vec3 waveOffset = vec3(0.,0.,sin(position.x*uFrequency.x+uTime)+sin(position.y*uFrequency.y+uTime))*uFrequency.z;
    gl_Position = mvpMatrix * vec4(position+waveOffset, 1.0);
}