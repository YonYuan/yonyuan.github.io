// All rights reserved by Yon
// index.js 
// Manager the HTML Doc

import "./style.css"

function component() {
    const data = require("./index.json")

    const element = document.createElement("div")
    element.className = "word"

    const u = document.createElement("u")
    const eLanguage = document.createElement("div").appendChild(u)
    eLanguage.innerHTML = data.language
    element.appendChild(eLanguage)

    const eIntroduce = document.createElement("div")
    eIntroduce.innerHTML = wordLine(data.chinese)
    element.appendChild(eIntroduce)

    var defaultLanguage = 0
    eLanguage.onclick = function () {
        if (defaultLanguage != 0) {
            eIntroduce.innerHTML = wordLine(data.chinese)
            defaultLanguage = 0
        } else {
            eIntroduce.innerHTML = wordLine(data.english)
            defaultLanguage = 1
        }
    }
    return element
}

function wordLine(language) {
    let i, chinese = "<br>"
    for (i in language.word) {
        chinese += language.word[i] + "<br>"
    }
    return chinese
}

document.body.appendChild(component())
