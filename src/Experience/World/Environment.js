// All rights reserved by Yon
// Environment.js 
// Manager the Environment
// Include light, envirMap
// Include how envirMap effect the material, it has a loop set for every object in scene

import * as THREE from "three"

import Experience from "../Experience"

export default class Environment {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        if(this.debug.active){
            this.debugFolder = this.debug.ui.addFolder("environment")
        }

        this.setSunLight()
        this.setEnvironmentMap()
    }

    setSunLight() {
        const directionalLightIntensity = 10
        this.sunLight = new THREE.DirectionalLight(
            0xffffff,
            directionalLightIntensity
        )
        this.sunLight.position.set(-40, 40, 40)
        this.sunLight.castShadow = true
        // this.sunLight.shadow.camera.far = 15
        // this.sunLight.shadow.mapSize.width = 512
        // this.sunLight.shadow.mapSize.height = 512

        this.scene.add(this.sunLight)

        if(this.debug.active){
            this.debugFolder.add(this.sunLight,"intensity").name('sunLightIntensity').min(0).max(10).step(0.001)
            this.debugFolder.add(this.sunLight.position,"x").name('sunLightIntensity').min(-5).max(5).step(0.001)
            this.debugFolder.add(this.sunLight.position,"y").name('sunLightIntensity').min(-5).max(5).step(0.001)
            this.debugFolder.add(this.sunLight.position,"z").name('sunLightIntensity').min(-5).max(5).step(0.001)
        }

    }

    setEnvironmentMap() {
        this.environmentMap = {}
        this.environmentMap.intensity = 0.3
        this.environmentMap.texture = this.resources.items.environmentMapTexture
        this.environmentMap.texture.encoding = THREE.sRGBEncoding

        this.scene.environment = this.environmentMap.texture

        this.environmentMap.updateMaterial = () => {
            this.scene.traverse((child) => {
                if (
                    child instanceof THREE.Mesh &&
                    child.material instanceof THREE.MeshStandardMaterial
                ) {
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity =
                        this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }
        this.environmentMap.updateMaterial()

        if(this.debug.active){
            this.debugFolder.add(this.environmentMap,"intensity").name('envMapIntensity').min(0).max(4).step(0.001).onChange(this.environmentMap.updateMaterial)
        }
    }
}
