var language = document.getElementById("Language");
var selfIntroduce = document.getElementById("SelfIntroduce");
var defaultLanguage = 0;

language.onclick = function () {
    
    if (defaultLanguage != 0) {
        selfIntroduce.innerHTML = chinese;
        defaultLanguage =0;
    }else{
        selfIntroduce.innerHTML = english;
        defaultLanguage =1;
    }
    return false;
}

function init(){
    //init language by the loc
    defaultLanguage = 0;
    selfIntroduce.innerHTML = chinese;
}

var chinese = "<br>我的名字是Yon<br>2020年，我在江南大学获得了数字媒体技术学士学位。<br>2020-2021年，我在北京一家名为云畅游戏的公司，参与制作了鬼泣手游，我负责技术美术方面的工作。<br>2021-2022年，我在深圳一家名为腾讯的公司，参与制作一款开放世界手游，同样负责技术美术方面的工作。"

var english = "???"