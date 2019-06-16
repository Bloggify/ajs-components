"use strict";

const ajsTempl = require("ajs/lib/template")
    , path = require("path")

module.exports = () => {
    ajsTempl.VM.ROOT = path.resolve(Bloggify.paths.root, "node_modules")
}
