console.log('amd.js');

requirejs.config({
  "baseUrl": "./lib",
  "paths": {
    "amd": "../amd",
    "jquery": "jquery-3.2.1"
  }
});

requirejs(["amd/amd-app"]);
