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
            "textures/environmentMaps/0/px.jpg",
            "textures/environmentMaps/0/nx.jpg",
            "textures/environmentMaps/0/py.jpg",
            "textures/environmentMaps/0/ny.jpg",
            "textures/environmentMaps/0/pz.jpg",
            "textures/environmentMaps/0/nz.jpg",
        ],
    },


    {
        name: "foxModel",
        type: "gltfModel",
        path: "models/Fox/glTF/Fox.gltf",
    },

    {
        name: "atlas",
        type:"tex",
        path: "textures/atlas/atlasMeta.png"
    },
    {
        name: "atlasNormal",
        type: "tex",
        path: "textures/atlas/normal.png",
    },
    {
        name: "atlasDisplacement",
        type: "tex",
        path: "textures/atlas/displacement.png",
    },
    {
        name: "atlasOcclusion",
        type: "tex",
        path: "textures/atlas/occlusion.png",
    },
    {
        name: "atlasRoughness",
        type: "tex",
        path: "textures/atlas/roughness.png",
    }
]
