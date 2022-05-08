// All rights reserved by Yon
// Atlas.js
// Manager the basic atlas renderer

import * as THREE from "three"
import { Vector2 } from "three"

import Experience from "../../Experience"

export default class Atlas {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.caster = this.experience.caster

        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder("Atlas")
        }

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
        
        this.caster.register(this)
    }

    setGeometry() {
        this.geometry = new THREE.PlaneBufferGeometry(191.6, 132.9, 256, 128)
        this.geometry.attributes.uv2 = this.geometry.attributes.uv
    }
    setTextures() {
        this.textures = {}

        this.textures.atlas = this.resources.items.atlas
        this.textures.atlas.encoding = THREE.sRGBEncoding
        this.textures.atlas.repeat.set(1, 1)
        this.textures.atlas.wrapS = THREE.RepeatWrapping
        this.textures.atlas.wrapT = THREE.RepeatWrapping

        this.textures.normal = this.resources.items.atlasNormal
        this.textures.normal.encoding = THREE.LinearEncoding
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping

        this.textures.displacement = this.resources.items.atlasDisplacement
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping

        this.textures.occlusion = this.resources.items.atlasOcclusion
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping

        this.textures.roughness = this.resources.items.atlasRoughness
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping
    }
    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.atlas,
            normalMap: this.textures.normal,
            aoMap: this.textures.occlusion,
            displacementMap: this.textures.displacement,
        })
        this.material.aoMapIntensity = 35
        this.material.displacementScale = 1.5
        this.material.normalScale = new THREE.Vector2(0.3, 0.3)
    }
    setMesh() {
        this.model = new THREE.Mesh(this.geometry, this.material)
        this.model.name = "atlas"

        this.model.rotation.x = -Math.PI * 0.5
        this.model.receiveShadow = true
        this.scene.add(this.model)
    }

    click(){
    }


    update() {}
}
