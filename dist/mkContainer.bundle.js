"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["mkContainer"],{

/***/ "./src/mkContainer.js":
/*!****************************!*\
  !*** ./src/mkContainer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uid */ "./node_modules/uid/dist/index.mjs");


const mkContainer = ()=>{
    const container = {
        children: [],
        id: (0,uid__WEBPACK_IMPORTED_MODULE_0__.uid)(),
    }
    return container;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mkContainer);

/***/ }),

/***/ "./node_modules/uid/dist/index.mjs":
/*!*****************************************!*\
  !*** ./node_modules/uid/dist/index.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uid: () => (/* binding */ uid)
/* harmony export */ });
var IDX=256, HEX=[], SIZE=256, BUFFER;
while (IDX--) HEX[IDX] = (IDX + 256).toString(16).substring(1);

function uid(len) {
	var i=0, tmp=(len || 11);
	if (!BUFFER || ((IDX + tmp) > SIZE*2)) {
		for (BUFFER='',IDX=0; i < SIZE; i++) {
			BUFFER += HEX[Math.random() * 256 | 0];
		}
	}

	return BUFFER.substring(IDX, IDX++ + tmp);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/mkContainer.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWtDb250YWluZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdDQUFHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNUMUI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21rQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3VpZC9kaXN0L2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1aWQgfSBmcm9tIFwidWlkXCI7XG5cbmNvbnN0IG1rQ29udGFpbmVyID0gKCk9PntcbiAgICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgaWQ6IHVpZCgpLFxuICAgIH1cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgbWtDb250YWluZXI7IiwidmFyIElEWD0yNTYsIEhFWD1bXSwgU0laRT0yNTYsIEJVRkZFUjtcbndoaWxlIChJRFgtLSkgSEVYW0lEWF0gPSAoSURYICsgMjU2KS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuXG5leHBvcnQgZnVuY3Rpb24gdWlkKGxlbikge1xuXHR2YXIgaT0wLCB0bXA9KGxlbiB8fCAxMSk7XG5cdGlmICghQlVGRkVSIHx8ICgoSURYICsgdG1wKSA+IFNJWkUqMikpIHtcblx0XHRmb3IgKEJVRkZFUj0nJyxJRFg9MDsgaSA8IFNJWkU7IGkrKykge1xuXHRcdFx0QlVGRkVSICs9IEhFWFtNYXRoLnJhbmRvbSgpICogMjU2IHwgMF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIEJVRkZFUi5zdWJzdHJpbmcoSURYLCBJRFgrKyArIHRtcCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=