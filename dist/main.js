/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('app', ['ngMaterial', 'ngMessages', 'ngAnimate'])\r\n    .config(['$mdThemingProvider', function($mdThemingProvider) {\r\n        var primaryColorMap =\r\n        $mdThemingProvider.extendPalette('cyan', {\r\n            'contrastDefaultColor': 'light'\r\n        });\r\n        var accentColorMap =\r\n        $mdThemingProvider.extendPalette('grey', {\r\n            'contrastDefaultColor': 'light'\r\n        });\r\n        $mdThemingProvider.definePalette('primaryColor', primaryColorMap);\r\n        $mdThemingProvider.definePalette('accentColor', accentColorMap);\r\n        $mdThemingProvider.theme('default')\r\n        .primaryPalette('primaryColor', {\r\n            'default': '500',\r\n            'hue-1': 'A200',\r\n            'hue-2': '700',\r\n        })\r\n        .accentPalette('accentColor', {\r\n            'default': '700',\r\n            'hue-1': 'A200',\r\n            'hue-2': '800'\r\n        });\r\n        $mdThemingProvider.theme('dark')\r\n        .primaryPalette('primaryColor', {\r\n            'default': '500',\r\n            'hue-1': 'A200',\r\n            'hue-2': '700'\r\n        })\r\n        .accentPalette('accentColor', {\r\n            'default': '700',\r\n            'hue-1': 'A200',\r\n            'hue-2': '800'\r\n        })\r\n        .dark();\r\n}]);\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/ctrl/main-ctrl.js":
/*!*******************************!*\
  !*** ./src/ctrl/main-ctrl.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('app').controller('mainCtrl', ['$scope', function($scope) {\r\n    $scope.dataLoaded = false;\r\n\r\n    function init() {\r\n        dataLoaded();\r\n    }\r\n\r\n    init();\r\n\r\n    function dataLoaded() {\r\n        $scope.dataLoaded = true;\r\n    }\r\n}])\r\n\n\n//# sourceURL=webpack:///./src/ctrl/main-ctrl.js?");

/***/ }),

/***/ "./src/ctrl/nav-ctrl.js":
/*!******************************!*\
  !*** ./src/ctrl/nav-ctrl.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('app').controller('navCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {\r\n    $scope.dataLoaded = false;\r\n    $scope.nav = {\r\n        loading: false,\r\n        error: '',\r\n        links: [],\r\n    };\r\n\r\n    function init() {\r\n        BackBone.getNav({}, function(navItems, error) {\r\n            if (error.length) {\r\n                $scope.nav.error = error;\r\n                $mdDialog.show({\r\n                    contentElement: '#mainContainer',\r\n                    parent: angular.element(document.body),\r\n                    targetEvent: event,\r\n                    clickOutsideToClose: true\r\n                })\r\n            }\r\n            else {\r\n                $scope.nav.links = navItems;\r\n                dataLoaded();\r\n            }\r\n        })\r\n    }\r\n\r\n    init();\r\n\r\n    function dataLoaded() {\r\n        $scope.dataLoaded = true;\r\n    }\r\n}])\r\n\n\n//# sourceURL=webpack:///./src/ctrl/nav-ctrl.js?");

/***/ }),

/***/ "./src/directive/nav.js":
/*!******************************!*\
  !*** ./src/directive/nav.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('app').directive('nav', function() {\r\n    var directive = {\r\n        restrict: 'E',\r\n        templateUrl: '/src/partial/nav.html',\r\n        controller: 'navCtrl',\r\n    };\r\n    return directive;\r\n});\r\n\n\n//# sourceURL=webpack:///./src/directive/nav.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ctrl_main_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ctrl/main-ctrl */ \"./src/ctrl/main-ctrl.js\");\n/* harmony import */ var _ctrl_main_ctrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ctrl_main_ctrl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ctrl_nav_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ctrl/nav-ctrl */ \"./src/ctrl/nav-ctrl.js\");\n/* harmony import */ var _ctrl_nav_ctrl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ctrl_nav_ctrl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _directive_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive/nav */ \"./src/directive/nav.js\");\n/* harmony import */ var _directive_nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_directive_nav__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _service_backBone_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/backBone-service */ \"./src/service/backBone-service.js\");\n/* harmony import */ var _service_backBone_service__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_service_backBone_service__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/service/backBone-service.js":
/*!*****************************************!*\
  !*** ./src/service/backBone-service.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("TopSaleAdmin.factory('BackBone', ['$http', function($http) {\r\n    function _then(callback, data, error) {\r\n        if (angular.isFunction(callback))\r\n            callback(data, error);\r\n    }\r\n\r\n    var _getNav = function(options, callback) {\r\n        var data = $.param({\r\n            endpoint: 'Newsfeed/get/postID/' + options.postID\r\n        });\r\n\r\n        var config = {\r\n            headers : {\r\n                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'\r\n            }\r\n        }\r\n\r\n        $http.post('/modules/unisynAPI/request/', data, config).then(function(response) {\r\n            var API = response.data;\r\n            var error = '';\r\n            var postDetailsJSON = '';\r\n            var postDetails = {};\r\n            try {\r\n                error = API.error;\r\n                postDetailsJSON = API.response;\r\n                if ( typeof postDetailsJSON !== 'object' ) {\r\n                    postDetails = JSON.parse(postDetailsJSON);\r\n                }\r\n                else {\r\n                    postDetails = postDetailsJSON;\r\n                }\r\n            }\r\n            catch(e) {\r\n                console.error(e);\r\n                console.error(error);\r\n                console.error(API);\r\n            }\r\n            _then(callback, postDetails, error);\r\n        },function(response) {\r\n            // not logged in or no permission to access\r\n            var API = response.data;\r\n            var error = '';\r\n            if ( typeof API === 'object' ) {\r\n                error = API.error;\r\n            }\r\n            else {\r\n                error = API;\r\n            }\r\n            console.log(error);\r\n            // This is fine just logging for now but once the login is converted to angular, we should have this send them to login\r\n            _then(callback, {}, error);\r\n        });\r\n    }\r\n\r\n\r\n\r\n    return {\r\n        getNav: _getNav,\r\n    }\r\n}]);\r\n\n\n//# sourceURL=webpack:///./src/service/backBone-service.js?");

/***/ })

/******/ });