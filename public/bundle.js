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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const geolocation = __webpack_require__(/*! ./modules/geolocation */ \"./js/modules/geolocation.js\")\nconst getData = __webpack_require__(/*! ./modules/dataProcessing */ \"./js/modules/dataProcessing.js\")\n\nconst btn = document.querySelector('.searchButton');\nconst search = document.querySelector('.search');\n\ngeolocation();\n\nbtn.addEventListener(\"click\", () => {\n  let cityName = encodeURI(search.value);\n  let query = {\n    q: cityName,\n  };\n  getData(query);\n});\n\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/modules/dataProcessing.js":
/*!**************************************!*\
  !*** ./js/modules/dataProcessing.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const city = document.querySelector('.city');\r\nconst country = document.querySelector('.country');\r\nconst temperature = document.querySelector('.temperature');\r\nconst condition__icon = document.querySelector('.condition__icon');\r\nconst condition__desc = document.querySelector('.condition__desc');\r\nconst pressure = document.querySelector('.pressure');\r\nconst wind = document.querySelector('.wind');\r\nconst humidity = document.querySelector('.humidity');\r\n\r\nlet units = 'metric';\r\nlet lang = 'pl';\r\n\r\nasync function getData(query) {\r\n  console.log(JSON.stringify(query));\r\n  query.units = units;\r\n  query.lang = lang;\r\n  const response = await fetch('/api/weather', {\r\n    method: \"post\",\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(query)\r\n  });\r\n  console.log(response);\r\n  const data = await response.json();\r\n  console.log(data);\r\n  if (data.weather) {\r\n    setData(data);\r\n  }\r\n}\r\n\r\nfunction setData(data) {\r\n  city.textContent = data.name;\r\n  country.textContent = data.sys.country;\r\n  temperature.textContent = data.main.temp;\r\n  condition__icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);\r\n  condition__desc.textContent = data.weather[0].description;\r\n  pressure.textContent = data.main.pressure;\r\n  wind.textContent = data.wind.speed;\r\n  humidity.textContent = data.main.humidity;\r\n}\r\n\r\nmodule.exports = getData;\r\n\n\n//# sourceURL=webpack:///./js/modules/dataProcessing.js?");

/***/ }),

/***/ "./js/modules/geolocation.js":
/*!***********************************!*\
  !*** ./js/modules/geolocation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const getData = __webpack_require__(/*! ./dataProcessing */ \"./js/modules/dataProcessing.js\");\r\n\r\nfunction getGeolocation() {\r\n    if (\"geolocation\" in navigator) {\r\n        navigator.geolocation.getCurrentPosition(success, error)\r\n    } else {\r\n        console.log(\"geolocation is turn of\");\r\n    }\r\n\r\n    function success(position) {\r\n        query = {\r\n            lat: position.coords.latitude,\r\n            lon: position.coords.longitude,\r\n        }\r\n        getData(query);\r\n    }\r\n\r\n    function error(position) {\r\n        query = {\r\n            q: 'Warszawa'\r\n        };\r\n        getData(query);\r\n    }\r\n}\r\n\r\n\r\n//api.openweathermap.org/data/2.5/weather?\r\nmodule.exports = getGeolocation;\r\n\n\n//# sourceURL=webpack:///./js/modules/geolocation.js?");

/***/ })

/******/ });