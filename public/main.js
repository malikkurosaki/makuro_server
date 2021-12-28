/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/makuro_js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/makuro_js/index.js ***!
  \*****************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/probus/Documents/projects/servers/makuro_server/node_modules/makuro_js/index.js'");

/***/ }),

/***/ "./node_modules/makuro_js/src/scaffold.js":
/*!************************************************!*\
  !*** ./node_modules/makuro_js/src/scaffold.js ***!
  \************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/probus/Documents/projects/servers/makuro_server/node_modules/makuro_js/src/scaffold.js'");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
const {App, AppBar, Text, Drawer, Column} = __webpack_require__(/*! makuro_js */ "./node_modules/makuro_js/index.js");
const Scaffold = __webpack_require__(/*! makuro_js/src/scaffold */ "./node_modules/makuro_js/src/scaffold.js");
// require('bootstrap/dist/js/bootstrap.bundle.min')
// require('../node_modules/tabulator-tables/src/scss/tabulator.scss');
// require('../node_modules/bootstrap/scss/bootstrap.scss');
// require('bootstrap/js/dist/popover')

App({
    home: Scaffold({
        appBar: AppBar({
            title: Text("Ini Adalah Judulnya")
        }),
        drawer: Drawer(),
        body: Column({
            children: [
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana")

            ]
        })
    })
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map