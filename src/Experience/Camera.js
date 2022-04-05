// All rights reserved by Yon
// Camera.js 
// Manager the camera control
// here use the OrbitControls form THREE.js and override it with zoon scale customization

import * as THREE from "three"

import { OrbitControls } from "./Override/OrbitControls"

import Experience from "./Experience"

export default class Camera {
    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()
        this.setOrbitControl()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            60,
            this.sizes.width / this.sizes.height,
            0.1,
            1000
        )
        this.instance.position.set(0, 51.9615, 30)
        this.scene.add(this.instance)
    }

    setOrbitControl() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.dampingFactor = 0.2
        this.controls.screenSpacePanning = false

        this.controls.mouseButtons = {
            RIGHT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            LEFT: THREE.MOUSE.PAN,
        }


        this.controls.maxDistance = 120
        this.controls.minDistance = 30

        this.controls.enableRotate = true
        this.controls.minAzimuthAngle = -Math.PI / 3
        this.controls.maxAzimuthAngle = Math.PI / 3
        this.controls.minPolarAngle = Math.PI/12
        this.controls.maxPolarAngle = Math.PI/4

        this.controls.zoomSpeed = 0.5

        this.controls.minPanBox = new THREE.Vector3(-95,0,-66)
        this.controls.maxPanBox = new THREE.Vector3(95,0,66)
        this.controls.limitPan = true

    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        this.controls.update()

    }
}
