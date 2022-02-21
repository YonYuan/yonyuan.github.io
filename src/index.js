function component() {
    const data = require('./index.json');

    const element = document.createElement("div");

    const u = document.createElement("u");
    const eLanguage = document.createElement("div").appendChild(u);
    eLanguage.innerHTML = data.language;
    element.appendChild(eLanguage);

    const eIntroduce = document.createElement("div");
    eIntroduce.innerHTML = data.chinese;
    element.appendChild(eIntroduce);

    var defaultLanguage = 0;
    eLanguage.onclick = function() {
        if (defaultLanguage != 0) {
            eIntroduce.innerHTML = data.chinese;
            defaultLanguage = 0;
        } else {
            eIntroduce.innerHTML = data.english;
            defaultLanguage = 1;
        }
    }
    return element;
}

document.body.appendChild(component());