// All rights reserved by Yon
// word.js
// Manager the render world outline

import Experience from "../Experience"
import Environment from "./Environment"
import Helper from "../../Utils/Helper"

import Fox from "./Atlas/Fox"
import Monkey from "./Atlas/Monkey"
import Atlas from "./Atlas/Atlas"

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.caster = this.experience.caster

        this.resources.on("ready", () => {
            console.log("resources are ready")

            this.fox = new Fox()
            this.monkey = new Monkey()
            this.atlas = new Atlas()

            this.environment = new Environment()

            this.helper = new Helper()
        })
    }

    update() {
        if (this.fox) {
            this.fox.update()
        }
    }
}
