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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWtQcm9qZWN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3Q0FBRztBQUNmLDBCQUEwQixnQkFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDcENjOztBQUV4QztBQUNBO0FBQ0EsV0FBVyx3REFBVztBQUN0QjtBQUNBLDZCQUE2QixtQkFBbUI7QUFDaEQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZHpCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ta0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ta1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdWlkL2Rpc3QvaW5kZXgubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVpZCB9IGZyb20gXCJ1aWRcIjtcblxuY29uc3QgbWtDb250YWluZXIgPSAoKT0+e1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHtcbiAgICAgICAgYXJyOiBbXSxcbiAgICAgICAgaWQ6IHVpZCgpLFxuICAgICAgICBnZXRJZDogZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pZDt9LFxuICAgICAgICBhZGRJdGVtOiBmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50SWQgPSB0aGlzLmlkO1xuICAgICAgICAgICAgdGhpcy5hcnIucHVzaChpdGVtKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluZGl0ZW06IGZ1bmN0aW9uKGlkKXtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICAgICAgZm9yKGxldCBuIGluIHRoaXMuYXJyKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFycltuXS5pZCA9PSBpZCl7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZWl0ZW06IGZ1bmN0aW9uKGlkKXtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kaXRlbShpZCk7XG4gICAgICAgICAgICBpZihpbmRleD49MCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SXRlbTogZnVuY3Rpb24oaWQpe1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRpdGVtKGlkKTtcbiAgICAgICAgICAgIGlmKGluZGV4Pj0wKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgbWtDb250YWluZXI7IiwiaW1wb3J0IG1rQ29udGFpbmVyIGZyb20gXCIuL21rQ29udGFpbmVyXCI7XG5cbmNvbnN0IG1rUHJvamVjdCA9ICh0aXRsZSk9PntcbiAgICBjb25zdCBwcm9qZWN0ID0ge1xuICAgICAgICAuLi5ta0NvbnRhaW5lcigpLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZ2V0VGl0bGU6IGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGl0bGU7fSxcbiAgICAgICAgc2V0VGl0bGU6IGZ1bmN0aW9uKG5ld1RpdGxlKXtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBwcm9qZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBta1Byb2plY3Q7XG5cbiIsInZhciBJRFg9MjU2LCBIRVg9W10sIFNJWkU9MjU2LCBCVUZGRVI7XG53aGlsZSAoSURYLS0pIEhFWFtJRFhdID0gKElEWCArIDI1NikudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVpZChsZW4pIHtcblx0dmFyIGk9MCwgdG1wPShsZW4gfHwgMTEpO1xuXHRpZiAoIUJVRkZFUiB8fCAoKElEWCArIHRtcCkgPiBTSVpFKjIpKSB7XG5cdFx0Zm9yIChCVUZGRVI9JycsSURYPTA7IGkgPCBTSVpFOyBpKyspIHtcblx0XHRcdEJVRkZFUiArPSBIRVhbTWF0aC5yYW5kb20oKSAqIDI1NiB8IDBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBCVUZGRVIuc3Vic3RyaW5nKElEWCwgSURYKysgKyB0bXApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9