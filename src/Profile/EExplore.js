import Cursor from "../Utils/Cursor"

import Gallery from "./EGallery"
import Library from "./ELibrary"

export default class EExplore {
    constructor() {
        this.cursor = new Cursor()

        this.init()

        this.cursor.on("scroll", () => {
            this.scroll()
        })

        // this.cursor.on("move", ()=>{
        //     this.move()
        // })
    }

    init() {
        this.place = this.getQueryString("place")
        this.path = `/static/content/${this.place}/`
        this.data = require(`/static/content/${this.place}/main.json`)

        this.content = document.createElement("div")
        this.content.className = "content"

        //Header
        this.EHeader(this.content)

        this.EBackground()

        this.EBlock(this.content)

        this.EFooter(this.content)

        this.EBackMap(this.content)

        document.body.appendChild(this.content)
    }

    EHeader(root) {
        const eBlock = document.createElement("div")
        eBlock.className = "split_view_block"

        const regionHeader = document.createElement("h3")
        regionHeader.className = "region_header"
        regionHeader.innerHTML = this.data.title
        eBlock.appendChild(regionHeader)

        const regionDescription = document.createElement("h6")
        regionDescription.className = "region_description"
        regionDescription.innerHTML = this.data.description
        eBlock.appendChild(regionDescription)

        const regionGuideScroll = document.createElement("div")
        regionGuideScroll.className = "region_svg_scroll"
        regionGuideScroll.innerHTML = ".scroll."
        eBlock.appendChild(regionGuideScroll)
        regionGuideScroll.style["padding-left"] = "1px"

        const regionHeaderScroll = document.createElement("div")
        const scrollSvg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        )

        scrollSvg.setAttribute("role", "img")
        scrollSvg.setAttribute("class", "region_svg_scroll")
        scrollSvg.setAttribute("width", "48px")
        scrollSvg.setAttribute("height", "512px")
        scrollSvg.setAttribute("viewBox", "0 0 24 196")
        scrollSvg.setAttribute("stroke", "gray")
        scrollSvg.setAttribute("stroke-linecap", "round")
        scrollSvg.setAttribute("stroke-linejoin", "round")
        scrollSvg.setAttribute("stroke-width", "0.5")
        scrollSvg.setAttribute("fill", "none")
        scrollSvg.classList.add("post-icon")

        const iconPath = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        )

        iconPath.setAttribute("d", "M12 0 L12 160")

        const iconPath2 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        )

        iconPath2.setAttribute(
            "d",
            "M20,154 C18.6666667,158 16,160 12,160 C8,160 5.33333333,158 4,154"
        )

        const iconPath3 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        )

        iconPath3.setAttribute("d", "M9 150 L15 150")

        scrollSvg.appendChild(iconPath)
        scrollSvg.appendChild(iconPath2)
        scrollSvg.appendChild(iconPath3)

        regionHeaderScroll.appendChild(scrollSvg)
        eBlock.appendChild(regionHeaderScroll)
        root.appendChild(eBlock)
    }

    EBackground() {
        document.body.style["background-image"] =
            "linear-gradient(rgba(35,31,34, 0) 40%, rgba(5, 3, 4, 1))," +
            "url(" +
            this.path +
            this.data.background +
            ")"
        document.body.style["background-repeat"] = "no-repeat"
        document.body.style["background-attachment"] = "fixed"
        document.body.style["background-size"] = "cover"
    }

    EBlock(root) {
        for (const index in this.data.block) {
            if (Object.hasOwnProperty.call(this.data.block, index)) {
                const data = this.data.block[index]

                const eBlock = document.createElement("div")
                eBlock.className = "split_view_block"

                switch (data.type) {
                    case "gallery":
                        const gallery = new Gallery(eBlock, this.place, data)
                        break
                    case "story":
                        const library = new Library(eBlock, this.place, data)

                        break
                }

                root.appendChild(eBlock)
            }
        }
    }

    EFooter(root) {
        this.regionFooter = document.createElement("h3")
        this.regionFooter.className = "region_footer"
        this.regionFooter.innerHTML = this.data.title
        root.appendChild(this.regionFooter)
    }

    scroll() {
        if (window.pageYOffset > 0) {
            var opac = window.pageYOffset / 720 - 0.5
            document.body.style["background-image"] =
                `linear-gradient(rgba(35,31,34, ${opac}) 40%, rgba(5, 3, 4, 1)),` +
                "url(" +
                this.path +
                this.data.background +
                ")"
        }
    }

    // move(){
    //     console.log(this.cursor.coord)

    //     const k = 5;
    //     document.body.style["background-position"] = `${this.cursor.coord.x*k -k/2}px ${this.cursor.coord.y*k-k/2}px`
    // }

    getQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
        const search = window.location.search
        let r = search.substring(1, search.length).match(reg)
        if (r != null) {
            return decodeURIComponent(r[2])
        }
        return null
    }

    EBackMap(root) {
        const iconLink = document.createElement("a")
        const iconSvg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        )
        const iconPath = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        )

        const iconPath2 = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        )

        iconSvg.setAttribute("fill", "none")
        iconSvg.setAttribute("class", "guid_svg_backmap")
        iconSvg.setAttribute("viewBox", "0 0 24 24")
        iconSvg.setAttribute("stroke", "white")
        iconSvg.classList.add("post-icon")
        iconSvg.setAttribute("stroke-linecap", "round")
        iconSvg.setAttribute("stroke-linejoin", "round")
        iconSvg.setAttribute("stroke-width", "0.5")

        iconPath.setAttribute(
            "d",
            "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        )
        iconPath2.setAttribute("d", "M12 17 l-4-4 m0 0 l4-4 m-4 4h14")

        iconSvg.appendChild(iconPath)
        iconSvg.appendChild(iconPath2)

        iconLink.appendChild(iconSvg)

        iconLink.onclick = () => {
            iconLink.href = "/"
        }

        return root.appendChild(iconLink)
    }
}
