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
        arr: [],
        id: (0,uid__WEBPACK_IMPORTED_MODULE_0__.uid)(),
        getId: function(){return this.id;},
        addItem: function(item){
            item.parentId = this.id;
            this.arr.push(item);
        },
        finditem: function(id){
            let index = -1;
            for(let n in this.arr){
                if(this.arr[n].id == id){
                    index = n;
                }
            }
            return index;
        },
        removeitem: function(id){
            const index = this.finditem(id);
            if(index>=0){
                this.arr.splice(index, 1);
            }
        },
        getItem: function(id){
            const index = this.finditem(id);
            if(index>=0){
                return this.arr[index];
            }
            return null;
        },
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWtDb250YWluZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdDQUFHO0FBQ2YsMEJBQTBCLGdCQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3BDMUI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21rQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3VpZC9kaXN0L2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1aWQgfSBmcm9tIFwidWlkXCI7XG5cbmNvbnN0IG1rQ29udGFpbmVyID0gKCk9PntcbiAgICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgICAgIGFycjogW10sXG4gICAgICAgIGlkOiB1aWQoKSxcbiAgICAgICAgZ2V0SWQ6IGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaWQ7fSxcbiAgICAgICAgYWRkSXRlbTogZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICBpdGVtLnBhcmVudElkID0gdGhpcy5pZDtcbiAgICAgICAgICAgIHRoaXMuYXJyLnB1c2goaXRlbSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmRpdGVtOiBmdW5jdGlvbihpZCl7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGZvcihsZXQgbiBpbiB0aGlzLmFycil7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcnJbbl0uaWQgPT0gaWQpe1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVpdGVtOiBmdW5jdGlvbihpZCl7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZGl0ZW0oaWQpO1xuICAgICAgICAgICAgaWYoaW5kZXg+PTApe1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldEl0ZW06IGZ1bmN0aW9uKGlkKXtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kaXRlbShpZCk7XG4gICAgICAgICAgICBpZihpbmRleD49MCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmV4cG9ydCBkZWZhdWx0IG1rQ29udGFpbmVyOyIsInZhciBJRFg9MjU2LCBIRVg9W10sIFNJWkU9MjU2LCBCVUZGRVI7XG53aGlsZSAoSURYLS0pIEhFWFtJRFhdID0gKElEWCArIDI1NikudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVpZChsZW4pIHtcblx0dmFyIGk9MCwgdG1wPShsZW4gfHwgMTEpO1xuXHRpZiAoIUJVRkZFUiB8fCAoKElEWCArIHRtcCkgPiBTSVpFKjIpKSB7XG5cdFx0Zm9yIChCVUZGRVI9JycsSURYPTA7IGkgPCBTSVpFOyBpKyspIHtcblx0XHRcdEJVRkZFUiArPSBIRVhbTWF0aC5yYW5kb20oKSAqIDI1NiB8IDBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBCVUZGRVIuc3Vic3RyaW5nKElEWCwgSURYKysgKyB0bXApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9