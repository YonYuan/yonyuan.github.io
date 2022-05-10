// All rights reserved by Yon
// sources.js 
// Manager the art resources load path and type information
// support *tex *gltfModel *cubeTex
// Manager By Resources.js

export default [
    {
        name: "environmentMapTexture",
        type: "cubeTex",
        path: [
            "static/textures/environmentMaps/0/px.jpg",
            "static/textures/environmentMaps/0/nx.jpg",
            "static/textures/environmentMaps/0/py.jpg",
            "static/textures/environmentMaps/0/ny.jpg",
            "static/textures/environmentMaps/0/pz.jpg",
            "static/textures/environmentMaps/0/nz.jpg",
        ],
    },


    {
        name: "fox",
        type: "gltfModel",
        path: "static/models/Fox/glTF/Fox.gltf",
    },
    {
        name: "monkey",
        type: "gltfModel",
        path: "static/models/Monkey/Monkey.gltf",
    },

    {
        name: "atlas",
        type:"tex",
        path: "static/textures/atlas/atlasMeta.png"
    },
    {
        name: "atlasNormal",
        type: "tex",
        path: "static/textures/atlas/normal.png",
    },
    {
        name: "atlasDisplacement",
        type: "tex",
        path: "static/textures/atlas/displacement.png",
    },
    {
        name: "atlasOcclusion",
        type: "tex",
        path: "static/textures/atlas/occlusion.png",
    },
    {
        name: "atlasRoughness",
        type: "tex",
        path: "static/textures/atlas/roughness.png",
    }
]
