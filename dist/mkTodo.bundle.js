"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["mkTodo"],{

/***/ "./src/mkTodo.js":
/*!***********************!*\
  !*** ./src/mkTodo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uid */ "./node_modules/uid/dist/index.mjs");

const mkTodo = ({ title, desc, priority, dueDate, completed }) => {
  const todo = {
    id: (0,uid__WEBPACK_IMPORTED_MODULE_0__.uid)(),
    getId: function () {
      return this.id;
    },
    title,
    setTitle: function (title) {
      this.title = title;
    },
    getTitle: function () {
      return this.title;
    },
    desc,
    setDesc: function (desc) {
      this.desc = desc;
    },
    getDesc: function () {
      return this.desc;
    },
    priority,
    setPriority: function (priority) {
      this.priority = priority;
    },
    getPriority: function () {
      return this.priority;
    },
    dueDate,
    setDueDate: function(dueDate){this.dueDate = dueDate;},
    getDueDate: function(){return this.dueDate;},
    completed,
    toggleComplete: function(){this.completed = !this.completed;},
    getCompleted: function(){return this.completed;},
  };
  return todo;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mkTodo);


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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/mkTodo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWtUb2RvLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMxQixrQkFBa0IsMkNBQTJDO0FBQzdEO0FBQ0EsUUFBUSx3Q0FBRztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQ0FBa0Msd0JBQXdCO0FBQzFELDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEN0QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWtUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3VpZC9kaXN0L2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1aWQgfSBmcm9tIFwidWlkXCI7XG5jb25zdCBta1RvZG8gPSAoeyB0aXRsZSwgZGVzYywgcHJpb3JpdHksIGR1ZURhdGUsIGNvbXBsZXRlZCB9KSA9PiB7XG4gIGNvbnN0IHRvZG8gPSB7XG4gICAgaWQ6IHVpZCgpLFxuICAgIGdldElkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9LFxuICAgIHRpdGxlLFxuICAgIHNldFRpdGxlOiBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9LFxuICAgIGdldFRpdGxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9LFxuICAgIGRlc2MsXG4gICAgc2V0RGVzYzogZnVuY3Rpb24gKGRlc2MpIHtcbiAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgfSxcbiAgICBnZXREZXNjOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZXNjO1xuICAgIH0sXG4gICAgcHJpb3JpdHksXG4gICAgc2V0UHJpb3JpdHk6IGZ1bmN0aW9uIChwcmlvcml0eSkge1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH0sXG4gICAgZ2V0UHJpb3JpdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgIH0sXG4gICAgZHVlRGF0ZSxcbiAgICBzZXREdWVEYXRlOiBmdW5jdGlvbihkdWVEYXRlKXt0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO30sXG4gICAgZ2V0RHVlRGF0ZTogZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kdWVEYXRlO30sXG4gICAgY29tcGxldGVkLFxuICAgIHRvZ2dsZUNvbXBsZXRlOiBmdW5jdGlvbigpe3RoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO30sXG4gICAgZ2V0Q29tcGxldGVkOiBmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbXBsZXRlZDt9LFxuICB9O1xuICByZXR1cm4gdG9kbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1rVG9kbztcbiIsInZhciBJRFg9MjU2LCBIRVg9W10sIFNJWkU9MjU2LCBCVUZGRVI7XG53aGlsZSAoSURYLS0pIEhFWFtJRFhdID0gKElEWCArIDI1NikudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVpZChsZW4pIHtcblx0dmFyIGk9MCwgdG1wPShsZW4gfHwgMTEpO1xuXHRpZiAoIUJVRkZFUiB8fCAoKElEWCArIHRtcCkgPiBTSVpFKjIpKSB7XG5cdFx0Zm9yIChCVUZGRVI9JycsSURYPTA7IGkgPCBTSVpFOyBpKyspIHtcblx0XHRcdEJVRkZFUiArPSBIRVhbTWF0aC5yYW5kb20oKSAqIDI1NiB8IDBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBCVUZGRVIuc3Vic3RyaW5nKElEWCwgSURYKysgKyB0bXApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9