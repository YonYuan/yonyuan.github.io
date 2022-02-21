(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function component() {
    const data = __webpack_require__(/*! ./index.json */ 976);

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

/***/ }),

/***/ 976:
/*!************************!*\
  !*** ./src/index.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"language":"中文/English","chinese":"<br>我的名字是Yon<br>2020年，我在江南大学获得了数字媒体技术学士学位。<br>2020-2021年，我在北京一家名为云畅游戏的公司，参与制作了鬼泣手游，我负责技术美术方面的工作。<br>2021-2022年，我在深圳一家名为腾讯的公司，参与制作一款开放世界手游，同样负责技术美术方面的工作。<br>","english":"<br>?????"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmVhZTZjOWZjNTU2Y2IyMmM3ODAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLHVCQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxdWlyZSgnLi9pbmRleC5qc29uJyk7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgdSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1XCIpO1xyXG4gICAgY29uc3QgZUxhbmd1YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5hcHBlbmRDaGlsZCh1KTtcclxuICAgIGVMYW5ndWFnZS5pbm5lckhUTUwgPSBkYXRhLmxhbmd1YWdlO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlTGFuZ3VhZ2UpO1xyXG5cclxuICAgIGNvbnN0IGVJbnRyb2R1Y2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZUludHJvZHVjZS5pbm5lckhUTUwgPSBkYXRhLmNoaW5lc2U7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVJbnRyb2R1Y2UpO1xyXG5cclxuICAgIHZhciBkZWZhdWx0TGFuZ3VhZ2UgPSAwO1xyXG4gICAgZUxhbmd1YWdlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoZGVmYXVsdExhbmd1YWdlICE9IDApIHtcclxuICAgICAgICAgICAgZUludHJvZHVjZS5pbm5lckhUTUwgPSBkYXRhLmNoaW5lc2U7XHJcbiAgICAgICAgICAgIGRlZmF1bHRMYW5ndWFnZSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZUludHJvZHVjZS5pbm5lckhUTUwgPSBkYXRhLmVuZ2xpc2g7XHJcbiAgICAgICAgICAgIGRlZmF1bHRMYW5ndWFnZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==