import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import EventEmitter from "./EventEmitter"

export default class Resources extends EventEmitter {
    constructor(sources) {
        super()
        this.sources = sources

        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()
    }

    setLoaders() {
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.textureLoader = new THREE.TextureLoader()
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
    }

    startLoading() {
        for (const source of this.sources) {
            if (source.type === "gltfModel") {
                this.loaders.gltfLoader.load(source.path, (file) => {
                    this.sourceLoaded(source, file)
                })
            }
            if (source.type === "cubeTex") {
                this.loaders.cubeTextureLoader.load(source.path, (file) => {
                    this.sourceLoaded(source, file)
                })
            }
            if (source.type === "tex") {
                this.loaders.textureLoader.load(source.path, (file) => {
                    this.sourceLoaded(source, file)
                })
            }
        }
    }

    sourceLoaded(source, file) {
        this.items[source.name] = file
        console.log(source, file)
        this.loaded++
        if (this.loaded === this.toLoad) {
            this.trigger("ready")
        }
    }
}
