// All rights reserved by Yon
// Canvas.js 
// Manager the THREE.js Renderer

import "./style.css";

import Experience from "./Experience/Experience";

const element = document.createElement("div");
const eCanvas = document.createElement("canvas");
eCanvas.className = "webgl";
element.appendChild(eCanvas);

const experience = new Experience(eCanvas);
  
document.body.insertBefore(element, document.body.children[0]);
