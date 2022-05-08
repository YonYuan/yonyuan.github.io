// All rights reserved by Yon
// Canvas.js
// Manager the THREE.js Renderer
// Manager the event from Renderer

import Experience from "../Experience/Experience";
import Profile from "./Profile";


export default class ECanvas {
    constructor() {
        this.init()
        this.profile = new Profile()
        this.region = this.profile.region
        console.log(this.region)
    }

    init(){
        this.eCanvas = document.createElement("canvas")
        this.eCanvas.className = "webgl"
        this.experience = new Experience(this)
        document.body.insertBefore(this.eCanvas, document.body.children[0])
    }

    //call in experience
    rayClick(obj,model){
        console.log("click from: "+ model.name+ " in ecanvas")
        if(this.region.rayClick){
            this.region.rayClick(obj,model)
        }
    }
}
