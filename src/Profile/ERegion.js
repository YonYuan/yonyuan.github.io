import Profile from "./Profile"

export default class ERegion {
    constructor() {
        this.profile = new Profile()

        this.init()
    }

    init() {
        this.eRegionalProfile = document.createElement("div")
        this.eRegionalProfile.className = "region"

        this.eRegionalTitle = document.createElement("h3")
        this.eRegionalTitle.className = "regionTitle"
        this.eRegionalTitle.innerHTML = "GrayLand"
        this.eRegionalProfile.appendChild(this.eRegionalTitle)

        this.eRegionalDescription = document.createElement("p")
        this.eRegionalDescription.className = "regionDescription"
        this.eRegionalDescription.innerHTML =
            "But the coin slipped through the slot, and she picked it up again, just like last time."
        this.eRegionalProfile.appendChild(this.eRegionalDescription)

        this.eDiscover = document.createElement("a")
        this.eDiscover.className = "discover"
        this.eDiscover.href = ""
        this.eDiscover.innerHTML = "Discover..."
        this.eRegionalProfile.appendChild(this.eDiscover)

        document.body.appendChild(this.eRegionalProfile)
    }

    rayClick(obj, model) {
        // id = model.name != content folder name
        // id is equall to current model clicked, data may not refresh when clicked
        
        this.id = model.name;
        console.log("click from: " + this.id + " in eRegion")
        try{
            this.data = require("/static/content/" + this.id + "/main.json")
        }catch(err){
            console.log("no content about " +this.id)
        }

        //refresh the eRegion
        if (this.data) {
            this.eRegionalTitle.innerHTML = this.data.title
            this.eRegionalDescription.innerHTML = this.data.description
            this.eDiscover.href = "/explore?place=" + this.data.id
            console.log(this.eDiscover.href)
        }
    }
}
