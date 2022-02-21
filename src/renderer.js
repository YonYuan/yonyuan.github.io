import * as THREE from "three";

import tex from './door.jpg'

function component() {
    const data = require("./renderer.json");
    const element = document.createElement("div");

    const eCanvas = document.createElement("canvas");
    element.appendChild(eCanvas);

    //#region Create Renderer ====================================
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        data.sizes.width / data.sizes.height,
        0.1,
        1000
    );
    const renderer = new THREE.WebGLRenderer({
        canvas: eCanvas,
    });
    renderer.setSize(data.sizes.width, data.sizes.height);
    //#endregion

    //#region Crete Scene ====================================
    const group = new THREE.Group();
    scene.add(group);

    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({
            color: 0x00ff00,
        })
    );
    group.add(cube);
    group.position.y = 1;

    //#Editor
    const axisHelper = new THREE.AxesHelper();
    scene.add(axisHelper);
    //#endregion

    let preFrameTime = Date.now();
    const clock = new THREE.Clock();

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
    myIcon.src = tex;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());