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


const mkContainer = () => {
  const container = {
    children: [],
    id: (0,uid__WEBPACK_IMPORTED_MODULE_0__.uid)(),
    filter: "all",
  };
  return container;
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWtQcm9qZWN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3Q0FBRztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVmE7O0FBRXhDO0FBQ0E7QUFDQSxXQUFXLHdEQUFXO0FBQ3RCO0FBQ0EsNkJBQTZCLG1CQUFtQjtBQUNoRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkekI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21rQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21rUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy91aWQvZGlzdC9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdWlkIH0gZnJvbSBcInVpZFwiO1xuXG5jb25zdCBta0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0ge1xuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBpZDogdWlkKCksXG4gICAgZmlsdGVyOiBcImFsbFwiLFxuICB9O1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1rQ29udGFpbmVyO1xuIiwiaW1wb3J0IG1rQ29udGFpbmVyIGZyb20gXCIuL21rQ29udGFpbmVyXCI7XG5cbmNvbnN0IG1rUHJvamVjdCA9ICh0aXRsZSk9PntcbiAgICBjb25zdCBwcm9qZWN0ID0ge1xuICAgICAgICAuLi5ta0NvbnRhaW5lcigpLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZ2V0VGl0bGU6IGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGl0bGU7fSxcbiAgICAgICAgc2V0VGl0bGU6IGZ1bmN0aW9uKG5ld1RpdGxlKXtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBwcm9qZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBta1Byb2plY3Q7XG5cbiIsInZhciBJRFg9MjU2LCBIRVg9W10sIFNJWkU9MjU2LCBCVUZGRVI7XG53aGlsZSAoSURYLS0pIEhFWFtJRFhdID0gKElEWCArIDI1NikudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVpZChsZW4pIHtcblx0dmFyIGk9MCwgdG1wPShsZW4gfHwgMTEpO1xuXHRpZiAoIUJVRkZFUiB8fCAoKElEWCArIHRtcCkgPiBTSVpFKjIpKSB7XG5cdFx0Zm9yIChCVUZGRVI9JycsSURYPTA7IGkgPCBTSVpFOyBpKyspIHtcblx0XHRcdEJVRkZFUiArPSBIRVhbTWF0aC5yYW5kb20oKSAqIDI1NiB8IDBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBCVUZGRVIuc3Vic3RyaW5nKElEWCwgSURYKysgKyB0bXApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9