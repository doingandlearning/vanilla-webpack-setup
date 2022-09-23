"use strict";
(self["webpackChunkvanilla_webpack_setup"] = self["webpackChunkvanilla_webpack_setup"] || []).push([[1],{

/***/ 12:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lazyLoad": () => (/* binding */ lazyLoad)
/* harmony export */ });
var lazyLoad = function lazyLoad() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve("Hello from lazy load!");
    }, 1000);
  });
};

/***/ })

}]);