//http://dojotoolkit.org/documentation/tutorials/1.9/node
// Configuration Object for Dojo Loader:
// The module to "bootstrap"
var loadModule = "dist/amd_foo_module";

dojoConfig = {
    baseUrl: "src/", // Where we will put our packages
    async: 1, // We want to make sure we are using the "modern" loader
    hasCache: {
        "host-node": 1, // Ensure we "force" the loader into Node.js mode
        "dom": 0 // Ensure that none of the code assumes we have a DOM
    },

    deps: [ loadModule ] // And array of modules to load on "boot"
};

// Now load the Dojo loader
require("../dojo/dojo.js");

//now the indext.js is the result of typescript index.ts transpiled
//but, transpiled with AMD compile option
//and dojo loader knows how to load amd modules...
var typescriptAppIndex = require("./index.js");
console.log("below is typescript transpiled object loaded by dojo loader \n"+typescriptAppIndex);
