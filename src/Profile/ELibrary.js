export default class Gallery {
    constructor(root, place, data) {
        console.log(data)

        const eLibrary = document.createElement("div")
        eLibrary.className = "view_library"
        root.appendChild(eLibrary)

        const eLibraryHeader = document.createElement("div")
        eLibraryHeader.className = "view_library_header"
        eLibraryHeader.innerHTML = data.name
        eLibrary.appendChild(eLibraryHeader)

        const eLibraryDescription = document.createElement("div")
        eLibraryDescription.className = "view_library_description"
        eLibraryDescription.innerHTML = data.description
        eLibrary.appendChild(eLibraryDescription)

        this.eLibraryBanners = []

        this.InitFocusModel(eLibrary)

        this.InitBanner(eLibrary, place, data)

        this.InitClick(place, data)
    }

    InitFocusModel(root) {
        //Draw focus library model
        this.eFocusModel = document.createElement("div")
        this.eFocusModel.className = "focus_library_model"
        root.appendChild(this.eFocusModel)

        this.eFocusContent = document.createElement("div")
        this.eFocusContent.className = "focus_library_content"
        this.eFocusModel.appendChild(this.eFocusContent)

        this.eFocusLibraryHeader = document.createElement("h1")
        this.eFocusLibraryHeader.className = "focus_library_content_header"
        this.eFocusContent.appendChild(this.eFocusLibraryHeader)

        this.eFocusLibraryAuthor = document.createElement("h6")
        this.eFocusLibraryAuthor.className = "focus_library_content_author"
        this.eFocusContent.appendChild(this.eFocusLibraryAuthor)

        this.eFocusLibraryText = document.createElement("p")
        this.eFocusLibraryText.className = "focus_library_content_text"
        this.eFocusContent.appendChild(this.eFocusLibraryText)

        this.eFocusGuideBack = document.createElement("div")
        this.eFocusGuideBack.className = "focus_guide_back"
        this.eFocusContent.appendChild(this.eFocusGuideBack)

        this.eFocusGuideNext = document.createElement("div")
        this.eFocusGuideNext.className = "focus_guide_next"
        this.eFocusContent.appendChild(this.eFocusGuideNext)
    }

    SetFocusContent(content) {
        //current focus
        this.eFocusModel.style["display"] = "block"
        this.eFocusLibraryHeader.innerHTML = content.name
        this.eFocusLibraryAuthor.innerHTML = "Author: " + content.author
        this.eFocusLibraryAuthor.style["color"] = "lightyellow"
        this.eFocusLibraryText.innerHTML = content.article.default

        //next focus
        this.eFocusGuideBack.innerHTML = ".Back."
        this.eFocusGuideNext.innerHTML = ".Next.<br><br>" + content.nameNext
    }

    InitBanner(root, place, data) {
        //Draw every part of config
        for (let index = 0; index < data.src.length; index++) {
            if (Object.hasOwnProperty.call(data.src, index)) {
                var element = data.src[index]

                const eLibraryBanner = document.createElement("div")
                eLibraryBanner.className = "view_library_banner"
                root.appendChild(eLibraryBanner)
                this.eLibraryBanners.push(eLibraryBanner)

                const eLibraryName = document.createElement("div")
                eLibraryName.className = "view_library_banner_name"
                eLibraryBanner.appendChild(eLibraryName)

                const eLibraryAuthor = document.createElement("div")
                eLibraryAuthor.className = "view_library_banner_author"
                eLibraryBanner.appendChild(eLibraryAuthor)

                const eLibraryGuideClick = document.createElement("div")
                eLibraryGuideClick.className = "view_library_banner_guide_click"
                eLibraryBanner.appendChild(eLibraryGuideClick)

                eLibraryName.innerHTML = element.name
                eLibraryAuthor.innerHTML = "Author: " + element.author
                eLibraryGuideClick.innerHTML = ".CLICK."
                eLibraryBanner.style[
                    "background-image"
                ] = `linear-gradient(to right, rgba(33, 29, 32,1), rgba(0,0,0,0) 70%), url(/static/content/${place}/${element.banner})`
            }
        }
    }

    InitClick(place, data) {
        const srcCache = data.src

        //click banner
        for (let index = 0; index < srcCache.length; index++) {
            const element = srcCache[index]
            const elementNext = srcCache[index + 1]

            //cache this as a reference for click
            const content = {
                path: element.path,
                name: element.name,
                author: element.author,
                article: require("/static/content/" +
                    place +
                    "/" +
                    element.path),
                nameNext: elementNext ? elementNext.name : "over",
            }

            this.eLibraryBanners[index].onclick = () => {
                document.body.classList.add("stop-scrolling")
                this.currentFocusIndex = index
                this.SetFocusContent(content)
            }
        }

        this.eFocusGuideBack.onclick = () => {
            document.body.classList.remove("stop-scrolling")
            this.eFocusModel.scrollTop = 0
            this.eFocusModel.style["display"] = "none"
        }

        this.eFocusGuideNext.onclick = () => {

            this.eFocusModel.scrollTop = 0
            this.currentFocusIndex = this.currentFocusIndex + 1

            const element = srcCache[this.currentFocusIndex]
            const elementNext = srcCache[this.currentFocusIndex + 1]

            if (!element) {
                this.eFocusGuideBack.onclick()
                return
            }

            const content = {
                path: element.path,
                name: element.name,
                author: element.author,
                article: require("/static/content/" +
                    place +
                    "/" +
                    element.path),
                nameNext: elementNext ? elementNext.name : "Over",
            }

            this.SetFocusContent(content)
        }
    }
}
