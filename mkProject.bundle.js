"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["mkProject"],{

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

/***/ "./src/mkProject.js":
/*!**************************!*\
  !*** ./src/mkProject.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mkContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mkContainer */ "./src/mkContainer.js");


const mkProject = (title)=>{
    const project = {
        ...(0,_mkContainer__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        title,
        getTitle: function(){return this.title;},
        setTitle: function(newTitle){
            this.title = newTitle;
        },
    };
    return project
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mkProject);



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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/mkProject.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWtQcm9qZWN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3Q0FBRztBQUNmO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ1RjOztBQUV4QztBQUNBO0FBQ0EsV0FBVyx3REFBVztBQUN0QjtBQUNBLDZCQUE2QixtQkFBbUI7QUFDaEQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZHpCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ta0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ta1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdWlkL2Rpc3QvaW5kZXgubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVpZCB9IGZyb20gXCJ1aWRcIjtcblxuY29uc3QgbWtDb250YWluZXIgPSAoKT0+e1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBpZDogdWlkKCksXG4gICAgfVxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5leHBvcnQgZGVmYXVsdCBta0NvbnRhaW5lcjsiLCJpbXBvcnQgbWtDb250YWluZXIgZnJvbSBcIi4vbWtDb250YWluZXJcIjtcblxuY29uc3QgbWtQcm9qZWN0ID0gKHRpdGxlKT0+e1xuICAgIGNvbnN0IHByb2plY3QgPSB7XG4gICAgICAgIC4uLm1rQ29udGFpbmVyKCksXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBnZXRUaXRsZTogZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50aXRsZTt9LFxuICAgICAgICBzZXRUaXRsZTogZnVuY3Rpb24obmV3VGl0bGUpe1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHByb2plY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1rUHJvamVjdDtcblxuIiwidmFyIElEWD0yNTYsIEhFWD1bXSwgU0laRT0yNTYsIEJVRkZFUjtcbndoaWxlIChJRFgtLSkgSEVYW0lEWF0gPSAoSURYICsgMjU2KS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuXG5leHBvcnQgZnVuY3Rpb24gdWlkKGxlbikge1xuXHR2YXIgaT0wLCB0bXA9KGxlbiB8fCAxMSk7XG5cdGlmICghQlVGRkVSIHx8ICgoSURYICsgdG1wKSA+IFNJWkUqMikpIHtcblx0XHRmb3IgKEJVRkZFUj0nJyxJRFg9MDsgaSA8IFNJWkU7IGkrKykge1xuXHRcdFx0QlVGRkVSICs9IEhFWFtNYXRoLnJhbmRvbSgpICogMjU2IHwgMF07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIEJVRkZFUi5zdWJzdHJpbmcoSURYLCBJRFgrKyArIHRtcCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=