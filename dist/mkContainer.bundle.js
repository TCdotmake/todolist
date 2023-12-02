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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWtDb250YWluZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdDQUFHO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1YzQjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWtDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdWlkL2Rpc3QvaW5kZXgubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVpZCB9IGZyb20gXCJ1aWRcIjtcblxuY29uc3QgbWtDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICBjaGlsZHJlbjogW10sXG4gICAgaWQ6IHVpZCgpLFxuICAgIGZpbHRlcjogXCJhbGxcIixcbiAgfTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5leHBvcnQgZGVmYXVsdCBta0NvbnRhaW5lcjtcbiIsInZhciBJRFg9MjU2LCBIRVg9W10sIFNJWkU9MjU2LCBCVUZGRVI7XG53aGlsZSAoSURYLS0pIEhFWFtJRFhdID0gKElEWCArIDI1NikudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVpZChsZW4pIHtcblx0dmFyIGk9MCwgdG1wPShsZW4gfHwgMTEpO1xuXHRpZiAoIUJVRkZFUiB8fCAoKElEWCArIHRtcCkgPiBTSVpFKjIpKSB7XG5cdFx0Zm9yIChCVUZGRVI9JycsSURYPTA7IGkgPCBTSVpFOyBpKyspIHtcblx0XHRcdEJVRkZFUiArPSBIRVhbTWF0aC5yYW5kb20oKSAqIDI1NiB8IDBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBCVUZGRVIuc3Vic3RyaW5nKElEWCwgSURYKysgKyB0bXApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9