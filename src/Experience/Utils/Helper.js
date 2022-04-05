import * as THREE from "three"

import Experience from "../Experience"

export default class Helper {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.camera = this.experience.camera

        if(this.debug.active){
        
            const cameraHelper = new THREE.CameraHelper( this.camera.instance );
            this.scene.add(cameraHelper)
    
            const axesHelper = new THREE.AxesHelper(10)
            this.scene.add(axesHelper)
    
            if (this.experience.world.environment) {
                this.environment = this.experience.world.environment
    
                const directionalLightHelper = new THREE.DirectionalLightHelper(
                    this.environment.sunLight,
                    0.2
                )
                const directionalLightCameraHelper = new THREE.CameraHelper(
                    this.environment.sunLight.shadow.camera
                )
                this.scene.add(directionalLightCameraHelper)
                this.scene.add(directionalLightHelper)
            }
        }

    }
}
