
export default class ETemp{
    constructor() {

        this.data = require("/static/content/temp.json")

        this.element = document.createElement("div")

        this.currentLanguage = 0

        this.initLanguage()

        this.initIntroduce()

        this.switchIntroduce()

        document.body.appendChild(this.element)
    }

    initLanguage() {
        this.eLanguage = document
            .createElement("div")
        this.eLanguage.id = "language"
        this.eLanguage.innerHTML = this.data.language

        this.element.appendChild(this.eLanguage)
    }

    initIntroduce() {
        this.eIntroduce = document.createElement("div")
        this.eIntroduce.className = "text"
        this.putIntroduce()
        this.element.appendChild(this.eIntroduce)
    }

    switchIntroduce() {
        this.eLanguage.addEventListener("click", () => {
            if (this.currentLanguage != 0) {
                this.currentLanguage = 0
            } else {
                this.currentLanguage = 1
            }
            this.putIntroduce();
        })
    }

    putIntroduce() {
        if (this.currentLanguage == 0) {
            this.sIntroduce = this.wordLine(this.data.chinese)
        } else {
            this.sIntroduce = this.wordLine(this.data.english)
        }
        this.eIntroduce.innerHTML = this.sIntroduce
    }

    wordLine(language) {
        let i,
            word = "<li>"
        for (i in language.word) {
            word += language.word[i] + "</li>"
            word += "<li>"
        }
        return word
    }
}
