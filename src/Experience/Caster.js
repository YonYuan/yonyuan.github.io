// All rights reserved by Yon
// Caster.js 
// Manager the raycaster from three
// raycaster contain the move event and click event, call from experience
// rayMove/rayIn/rayOut/rayClick
// they will keep pass call to the currentObjt event function same name as themselves
// this class can pass event call to the canvasjs, and canvasjs will keep pass these event call to other html element

import * as THREE from "three"

import Experience from "./Experience"

export default class Caster {
    constructor() {
        this.experience = new Experience()
        this.canvas = this.experience.canvas 


        this.raycaster = new THREE.Raycaster()

        this.camera = this.experience.camera
        this.cursor = this.experience.cursor

        this.casterObjects = {}
        this.casterModels = []
        //final Intersect Struct, contain intersect information
        this.currentIntersect = null
        //final Intersect model, only contain Mesh information
        this.currentModel = null
        //final intersect class, have all class information
        this.currentObj = null

        this.raycaster.setFromCamera(this.cursor.coord, this.camera.instance)
    }

    rayMove() {
        // update the picking ray with the camera and pointer position
        this.raycaster.setFromCamera(this.cursor.coord, this.camera.instance)

        const intersects = this.raycaster.intersectObjects(this.casterModels)

        //In Out Event
        if (intersects.length) {
            if (this.currentModel != intersects[0].object) {
                if (this.currentModel) {
                    this.rayOut()
                }
                this.currentIntersect = intersects[0]
                this.currentModel = intersects[0].object
                this.currentObj = this.casterObjects[this.currentModel.name]
                this.rayIn()
            }
        } else {
            if (this.currentModel) {
                this.rayOut()
            }
            this.currentIntersect = null
            this.currentModel = null
            this.currentObj = null
        }
        
        if (this.currentObj) {
            console.log("move " + this.currentModel.name)

            if(this.currentObj.rayMove){
                this.currentObj.rayMove()
            }
        }
    }

    rayIn() {
        console.log("in " + this.currentModel.name)
        if (this.currentObj.rayIn) {
            this.currentObj.rayIn()
        }
    }

    rayOut() {
        console.log("out " + this.currentModel.name)
        if (this.currentObj.rayOut) {
            this.currentObj.rayOut()
        }
    }

    rayClick() {
        if (this.currentObj) {
            console.log("click " + this.currentModel.name)
            if (this.currentObj.rayClick) {
                this.currentObj.rayClick()
            }
            //Event pass to canvas and profile
            if(this.canvas.rayClick){
                this.canvas.rayClick(this.currentObj,this.currentModel)
            }
        }
    }

    register(obj) {
        if (obj.model) {
            obj.model.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    this.casterObjects[child.name] = obj
                    console.log(child)
                    this.casterModels.push(child)
                }
            })
        } else {
            console.log(obj.type)
        }
    }
}
