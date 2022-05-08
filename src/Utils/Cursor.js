import * as THREE from "three"

import EventEmitter from "./EventEmitter.js"

export default class Cursor extends EventEmitter {
    constructor() {
        super()

        this.coord = new THREE.Vector2()

        let drag = false

        window.addEventListener("mousemove", (event) => {
            drag = true

            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components

            this.coord.x = (event.clientX / window.innerWidth) * 2 - 1
            this.coord.y = -(event.clientY / window.innerHeight) * 2 + 1

            this.trigger("move")
        })

        window.addEventListener("mousedown", () => (drag = false))

        window.addEventListener("mouseup", () => {
            if (!drag) this.trigger("click")
        })

        window.onscroll = () => {
            if (window.pageYOffset > 0) {
                this.trigger("scroll")
            }
        }
    }
}
