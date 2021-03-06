// All rights reserved by Yon
// Renderer.js 
// Manager the THEE.JS Renderer Create

import Experience from "./Experience"
import * as THREE from "three"

export default class Renderer {
    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.eCanvas = this.experience.eCanvas
        this.camera = this.experience.camera

        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.eCanvas,
            antialias: true,
        })
        this.instance.physicallyCorrectLights = true;
        this.instance.outputEncoding = THREE.sRGBEncoding;
        this.instance.toneMapping = THREE.ReinhardToneMapping;
        this.instance.shadowMap.enabled = true;
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
        this.instance.setClearColor('#211d20')
        this.instance.setSize(this.sizes.width,this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    resize(){
        this.instance.setSize(this.sizes.width,this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    update(){
        this.instance.render(this.scene,this.camera.instance)
    }
}
