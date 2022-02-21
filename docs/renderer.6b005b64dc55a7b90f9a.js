"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["renderer"],{

/***/ 479:
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ 477);
/* harmony import */ var _door_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./door.jpg */ 626);




function component() {
    const data = __webpack_require__(/*! ./renderer.json */ 289);
    const element = document.createElement("div");

    const eCanvas = document.createElement("canvas");
    element.appendChild(eCanvas);

    //#region Create Renderer ====================================
    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(
        75,
        data.sizes.width / data.sizes.height,
        0.1,
        1000
    );
    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({
        canvas: eCanvas,
    });
    renderer.setSize(data.sizes.width, data.sizes.height);
    //#endregion

    //#region Crete Scene ====================================
    const group = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
    scene.add(group);

    const cube = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(
        new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(1, 1, 1),
        new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({
            color: 0x00ff00,
        })
    );
    group.add(cube);
    group.position.y = 1;

    //#Editor
    const axisHelper = new three__WEBPACK_IMPORTED_MODULE_1__.AxesHelper();
    scene.add(axisHelper);
    //#endregion

    let preFrameTime = Date.now();
    const clock = new three__WEBPACK_IMPORTED_MODULE_1__.Clock();

    //#region Tick ====================================
    const tick = () => {
        //
        const currentFrameTime = Date.now();
        const deltaTime = currentFrameTime - preFrameTime;
        preFrameTime = currentFrameTime;
        console.log(deltaTime);

        const elapsedTime = clock.getElapsedTime()
        console.log(elapsedTime);

        //
        const speed = 0.001;
        cube.rotation.x += speed * deltaTime;
        cube.rotation.y += speed * deltaTime;
        cube.rotation.z = elapsedTime;

        camera.position.z = 5;


        console.log('tick');
        requestAnimationFrame(tick);
        renderer.render(scene, camera);
    }
    tick();
    //#endregion


    const myIcon = new Image();
    myIcon.src = _door_jpg__WEBPACK_IMPORTED_MODULE_0__;

    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());

/***/ }),

/***/ 626:
/*!**********************!*\
  !*** ./src/door.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c548d2d05b1ab054651d.jpg";

/***/ }),

/***/ 289:
/*!***************************!*\
  !*** ./src/renderer.json ***!
  \***************************/
/***/ ((module) => {

module.exports = JSON.parse('{"sizes":{"width":720,"height":480}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(479)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuNmIwMDViNjRkYzU1YTdiOTBmOWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBQy9CO0FBQzRCO0FBQzVCO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQywwQkFBaUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdDQUFXO0FBQ2pDLHVCQUF1QixvREFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBbUI7QUFDNUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0NBQVc7QUFDakM7QUFDQTtBQUNBLHFCQUFxQix1Q0FBVTtBQUMvQixZQUFZLDhDQUFpQjtBQUM3QixZQUFZLG9EQUF1QjtBQUNuQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZDQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3Q0FBVztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0NBQUc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3JlbmRlcmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHRleCBmcm9tICcuL2Rvb3IuanBnJ1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoXCIuL3JlbmRlcmVyLmpzb25cIik7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjb25zdCBlQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZUNhbnZhcyk7XHJcblxyXG4gICAgLy8jcmVnaW9uIENyZWF0ZSBSZW5kZXJlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgICAgNzUsXHJcbiAgICAgICAgZGF0YS5zaXplcy53aWR0aCAvIGRhdGEuc2l6ZXMuaGVpZ2h0LFxyXG4gICAgICAgIDAuMSxcclxuICAgICAgICAxMDAwXHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgY2FudmFzOiBlQ2FudmFzLFxyXG4gICAgfSk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKGRhdGEuc2l6ZXMud2lkdGgsIGRhdGEuc2l6ZXMuaGVpZ2h0KTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vI3JlZ2lvbiBDcmV0ZSBTY2VuZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICBzY2VuZS5hZGQoZ3JvdXApO1xyXG5cclxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaChcclxuICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSksXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcclxuICAgICAgICAgICAgY29sb3I6IDB4MDBmZjAwLFxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgZ3JvdXAuYWRkKGN1YmUpO1xyXG4gICAgZ3JvdXAucG9zaXRpb24ueSA9IDE7XHJcblxyXG4gICAgLy8jRWRpdG9yXHJcbiAgICBjb25zdCBheGlzSGVscGVyID0gbmV3IFRIUkVFLkF4ZXNIZWxwZXIoKTtcclxuICAgIHNjZW5lLmFkZChheGlzSGVscGVyKTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIGxldCBwcmVGcmFtZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcclxuXHJcbiAgICAvLyNyZWdpb24gVGljayA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IHRpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zdCBjdXJyZW50RnJhbWVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSBjdXJyZW50RnJhbWVUaW1lIC0gcHJlRnJhbWVUaW1lO1xyXG4gICAgICAgIHByZUZyYW1lVGltZSA9IGN1cnJlbnRGcmFtZVRpbWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWxhcHNlZFRpbWUgPSBjbG9jay5nZXRFbGFwc2VkVGltZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2coZWxhcHNlZFRpbWUpO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gMC4wMDE7XHJcbiAgICAgICAgY3ViZS5yb3RhdGlvbi54ICs9IHNwZWVkICogZGVsdGFUaW1lO1xyXG4gICAgICAgIGN1YmUucm90YXRpb24ueSArPSBzcGVlZCAqIGRlbHRhVGltZTtcclxuICAgICAgICBjdWJlLnJvdGF0aW9uLnogPSBlbGFwc2VkVGltZTtcclxuXHJcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RpY2snKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gICAgfVxyXG4gICAgdGljaygpO1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG5cclxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbXlJY29uLnNyYyA9IHRleDtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9