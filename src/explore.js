import "./css/explore.css"
import "./css/library.css"
import "./css/gallery.css"
import "./css/guide.css"

import Explore from "./Profile/EExplore"

const explore = new Explore()



// function getQueryString(name) {
//     let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
//     const search = window.location.search
//     let r = search.substring(1, search.length).match(reg)
//     if (r != null) {
//         return decodeURIComponent(r[2])
//     }
//     return null
// }

// let place = getQueryString("place")

// const eRegion = document.createElement("div")
// eRegion.className = "region"
// eRegion.innerHTML = place
// document.body.appendChild(eRegion)

// const data = require("/static/content/" + place + "/" + place + ".json")
// const article = require("/static/content/desert/desert.txt")

// const content = document.createElement("div")
// content.className = "content"
// const root = document.createElement("div")
// content.appendChild(root)

// root.className = "article"
// root.innerHTML = article.default


// document.body.appendChild(content)

// console.log(article)
