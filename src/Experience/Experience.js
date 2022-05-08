// All rights reserved by Yon
// Experience.js 
// Manager all classes load and dispose
// Manager tick resize event

import * as THREE from "three"

import Camera from "./Camera"
import Renderer from "./Renderer"
import Caster from "./Caster"

import World from "./World/World"

import Sizes from "../Utils/Sizes"
import Time from "../Utils/Time"
import Cursor from "../Utils/Cursor"
import Debug from "../Utils/Debug"
import Resources from "../Utils/Resources"

import sources from './sources'

let instance = null

export default class Experience {
    constructor(canvas) {
        if (instance) {
            return instance
        }

        instance = this

        window.experience = this

        this.eCanvas = canvas.eCanvas
        this.canvas = canvas

        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.cursor = new Cursor()

        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.caster = new Caster()
        this.renderer = new Renderer()

        this.world = new World()

        this.sizes.on("resize", () => {
            this.resize()
        })

        this.time.on("tick", () => {
            this.update()
        })

        this.cursor.on("move",()=>{
            this.move()
        })

        this.cursor.on("click",()=>{
            this.click()
        })
    }

    resize() {
        this.camera.resize()
        this.renderer.resize()
    }

    update() {
        this.camera.update()
        this.world.update()
        this.renderer.update()
    }

    move(){
        this.caster.rayMove()
    }

    click(){
        this.caster.rayClick()
    }

    destroy() {
        this.sizes.off('resize')
        this.time.off('tick')

        this.scene.traverse((child)=>{
            if(child instanceof THREE.Mesh){
                child.geometry.dispose()
                for(const key in child.material){
                    const value = child.material[key]
                    if(value && typeof value.dispose === 'function'){
                        value.dispose()
                    }
                }
            }
        })

        this.camera.controls.dispose()
        this.renderer.instance.dispose()
    }
}
