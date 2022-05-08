export default class Gallery {
    constructor(root, place, data) {
        const eGalleryHeader = document.createElement("div")
        eGalleryHeader.className = "view_gallery_header"
        eGalleryHeader.innerHTML = data.name
        root.appendChild(eGalleryHeader)

        const eGalleryDescription = document.createElement("div")
        eGalleryDescription.className = "view_gallery_description"
        eGalleryDescription.innerHTML = data.description
        root.appendChild(eGalleryDescription)

        const eGalleryImgBlock = document.createElement("div")
        eGalleryImgBlock.className = "view_gallery_image_block"
        root.appendChild(eGalleryImgBlock)

        //focus image model
        const eFocusModel = document.createElement("div")
        root.appendChild(eFocusModel)
        eFocusModel.className = "focus_gallery_model"
        const eFocusImg = document.createElement("img")
        eFocusModel.appendChild(eFocusImg)
        eFocusImg.className = "focus_gallery_image"
        eFocusImg.alt = "Focus image."
        const eFocusDescription = document.createElement("div")
        eFocusModel.appendChild(eFocusDescription)
        eFocusDescription.className = "focus_gallery_description"
        const eFocusName = document.createElement("div")
        eFocusModel.appendChild(eFocusName)
        eFocusName.className = "focus_gallery_name"

        for (const index in data.src) {
            if (Object.hasOwnProperty.call(data.src, index)) {
                const element = data.src[index]
                const eImg = document.createElement("div")
                eImg.className = "view_gallery_image"

                const eImgName = document.createElement("div")
                eImg.appendChild(eImgName)
                eImgName.innerHTML = element.name
                eImgName.style["padding-top"] = "27vh"
                eImgName.style["padding-left"] = "2vh"
                eImgName.style["font-size"] = "16px"
                eImgName.style["letter-spacing"] = "0.2em"

                eImg.style["background-image"] = `linear-gradient(to top, rgba(33, 29, 32,1), rgba(0,0,0,0) 70%), url(/static/content/${place}/${element.path})`

                eGalleryImgBlock.appendChild(eImg)

                eImg.onclick = function () {
                    console.log(eImg.alt)
                    eFocusModel.style["display"] = "block"
                    eFocusImg.src = `/static/content/${place}/${element.path}`
                    eFocusImg.alt = eImg.alt
                    eFocusDescription.innerHTML = element.description
                    eFocusName.innerHTML = element.name

                    document.body.classList.add("stop-scrolling")
                }
            }
        }

        eFocusModel.onclick = () => {
            eFocusModel.style["display"] = "none"
            document.body.classList.remove("stop-scrolling")
        }
    }
}
