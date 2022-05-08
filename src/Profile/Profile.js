import Temp from "./ETemp"
import Region from "./ERegion"
import Canvas from "./ECanvas"

let instance = null

export default class Profile {
    constructor() {
        if (instance) {
            return instance
        }
        instance = this

        window.profile = this

        this.temp = new Temp()
        this.region = new Region()
        
        //create this finally
        this.canvas = new Canvas()

    }
}
