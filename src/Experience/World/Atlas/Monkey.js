import * as THREE from "three"

import Experience from "../../Experience"

export default class Monkey {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        this.resource = this.resources.items.monkey

        this.setModel()

        this.caster = this.experience.caster
        this.caster.register(this)
    }

    setModel() {
        this.model = this.resource.scene
        this.model.scale.set(2, 2, 2)
        this.model.position.set(-25, 2, 30)
        this.scene.add(this.model)
        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
            }
        })
    }

    cursorClick() {
        
    }
}
