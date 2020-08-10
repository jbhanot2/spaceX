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

/***/ "./src/client/components/display.js":
/*!******************************************!*\
  !*** ./src/client/components/display.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DisplayRocket = function DisplayRocket(props) {\n    return props.rocketData && props.rocketData.length ? props.rocketData.map(function (item, key) {\n        return _react2.default.createElement(\n            \"div\",\n            { className: \"filter-info-section\", key: key },\n            _react2.default.createElement(\n                \"div\",\n                null,\n                _react2.default.createElement(\"img\", { src: item.links && item.links.mission_patch_small, alt: \"\" }),\n                _react2.default.createElement(\n                    \"span\",\n                    null,\n                    item.mission_name\n                ),\n                _react2.default.createElement(\n                    \"h4\",\n                    null,\n                    \"Mission Ids: #\",\n                    key + 1\n                ),\n                item.mission_id && item.mission_id.length ? _react2.default.createElement(\n                    \"li\",\n                    { className: \"mission-info-ids\" },\n                    item.mission_id.map(function (missionData) {\n                        return missionData;\n                    })\n                ) : \"\",\n                _react2.default.createElement(\n                    \"p\",\n                    { className: \"mission-info-launch\" },\n                    _react2.default.createElement(\n                        \"b\",\n                        null,\n                        \"Launch Year:\"\n                    ),\n                    _react2.default.createElement(\n                        \"span\",\n                        null,\n                        item.launch_year\n                    )\n                ),\n                _react2.default.createElement(\n                    \"p\",\n                    { className: \"mission-info-launch\" },\n                    _react2.default.createElement(\n                        \"b\",\n                        null,\n                        \"Successful Launch:\"\n                    ),\n                    _react2.default.createElement(\n                        \"span\",\n                        null,\n                        item.launch_success ? 'true' : 'false'\n                    )\n                ),\n                _react2.default.createElement(\n                    \"p\",\n                    { className: \"mission-info-launch\" },\n                    _react2.default.createElement(\n                        \"b\",\n                        null,\n                        \"Successful Landing:\"\n                    ),\n                    _react2.default.createElement(\n                        \"span\",\n                        null,\n                        \"launch_landing\"\n                    )\n                )\n            )\n        );\n    }) : \"\";\n};\n\nexports.default = DisplayRocket;\n\n//# sourceURL=webpack:///./src/client/components/display.js?");

/***/ }),

/***/ "./src/client/components/filters.js":
/*!******************************************!*\
  !*** ./src/client/components/filters.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _constant = __webpack_require__(/*! ../utilities/constant */ \"./src/client/utilities/constant.js\");\n\nvar constant = _interopRequireWildcard(_constant);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar FiltesComponent = function FiltesComponent(props) {\n\n    var createFilter = function createFilter(filterName, filtervalue) {\n        var filter = '';\n        filter = filtervalue == 'ALL' ? '' : '&' + filterName + '=' + filtervalue;\n        props.appliedFilter(filter);\n    };\n\n    return _react2.default.createElement(\n        'div',\n        { className: 'launch-filter-section' },\n        _react2.default.createElement(\n            'span',\n            { className: 'launch-filter-title' },\n            'Filters'\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'filter-cta-section' },\n            _react2.default.createElement(\n                'span',\n                null,\n                'Launch Year'\n            ),\n            _react2.default.createElement('div', { className: 'launch-filter-divider' }),\n            _react2.default.createElement(\n                'div',\n                null,\n                constant.FILTER_ARRAY && constant.FILTER_ARRAY.length && constant.FILTER_ARRAY.map(function (item, key) {\n                    return _react2.default.createElement(\n                        'button',\n                        { key: key, onClick: createFilter.bind({}, constant.FILTER_NAME[0], item) },\n                        item\n                    );\n                })\n            )\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'filter-cta-section' },\n            _react2.default.createElement(\n                'span',\n                null,\n                'Successful Launch'\n            ),\n            _react2.default.createElement('div', { className: 'launch-filter-divider' }),\n            _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'button',\n                    { onClick: createFilter.bind({}, constant.FILTER_NAME[1], 'true') },\n                    'TRUE'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: createFilter.bind({}, constant.FILTER_NAME[1], 'false') },\n                    'FALSE'\n                )\n            )\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'filter-cta-section' },\n            _react2.default.createElement(\n                'span',\n                null,\n                'Successful Landing'\n            ),\n            _react2.default.createElement('div', { className: 'launch-filter-divider' }),\n            _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'button',\n                    { onClick: createFilter.bind({}, constant.FILTER_NAME[2], 'true') },\n                    'TRUE'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: createFilter.bind({}, constant.FILTER_NAME[2], 'true') },\n                    'FALSE'\n                )\n            )\n        )\n    );\n};\n\nexports.default = FiltesComponent;\n\n//# sourceURL=webpack:///./src/client/components/filters.js?");

/***/ }),

/***/ "./src/client/components/home.js":
/*!***************************************!*\
  !*** ./src/client/components/home.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _filters = __webpack_require__(/*! ./filters */ \"./src/client/components/filters.js\");\n\nvar _filters2 = _interopRequireDefault(_filters);\n\nvar _display = __webpack_require__(/*! ./display */ \"./src/client/components/display.js\");\n\nvar _display2 = _interopRequireDefault(_display);\n\nvar _constant = __webpack_require__(/*! ../utilities/constant */ \"./src/client/utilities/constant.js\");\n\nvar constant = _interopRequireWildcard(_constant);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\n__webpack_require__(/*! ./index.scss */ \"./src/client/components/index.scss\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home(props) {\n    var _useState = (0, _react.useState)(),\n        _useState2 = _slicedToArray(_useState, 2),\n        rocketData = _useState2[0],\n        setData = _useState2[1];\n\n    var _useState3 = (0, _react.useState)(true),\n        _useState4 = _slicedToArray(_useState3, 2),\n        isLoading = _useState4[0],\n        updataLoadingStatus = _useState4[1];\n\n    // Pass an empty array to run only callback on mount only.  \n\n\n    (0, _react.useEffect)(function () {\n        var url = getURL();\n        if (url) {\n            url = \"&\" + url;\n        } else {\n            url = \"\";\n        }\n        apiCall(url);\n    }, []);\n\n    var appliedFilter = function appliedFilter(urlParam) {\n        var url = decodeURL(window.location.search);\n\n        props.history.push('?' + urlParam);\n\n        // api call\n        updataLoadingStatus(true);\n        apiCall(urlParam);\n    };\n\n    var apiCall = function apiCall(param) {\n        (0, _axios2.default)(constant.SPACEX_API_CALL + param).then(function (res) {\n            setData(res.data);\n            updataLoadingStatus(false);\n        });\n    };\n\n    var decodeURL = function decodeURL(url) {\n        url = decodeURI(url);\n        if (url && typeof url === 'string') {\n            var params = url.split('?');\n            var eachParamsArr = params[1].split('&');\n            var obj = {};\n            if (eachParamsArr && eachParamsArr.length) {\n                eachParamsArr.map(function (param) {\n                    if (param) {\n                        var keyValuePair = param.split('=');\n                        var key = keyValuePair[0];\n                        var value = keyValuePair[1];\n                        obj[key] = value;\n                    }\n                });\n            }\n            return obj;\n        }\n    };\n\n    var getURL = function getURL() {\n        var queryParam = window.location.search;\n        var decodedUrl = decodeURL(queryParam);\n        if (decodedUrl) {\n            var newDecodedUrl = new Object();\n            Object.keys(decodedUrl).forEach(function (key) {\n                if (constant.FILTER_NAME.includes(key)) {\n                    newDecodedUrl[key] = decodedUrl[key];\n                }\n            });\n            var queryString = Object.keys(newDecodedUrl).map(function (key) {\n                return key + '=' + newDecodedUrl[key];\n            }).join('&');\n            return queryString;\n        } else return;\n    };\n\n    var redirectToHomepage = function redirectToHomepage() {\n        props.history.push('/');\n        appliedFilter('');\n    };\n\n    return _react2.default.createElement(\n        'div',\n        { className: 'launch-model' },\n        _react2.default.createElement(\n            'div',\n            { className: 'launch-title' },\n            _react2.default.createElement(\n                'h3',\n                { onClick: redirectToHomepage.bind() },\n                'SpaceX Launch Program'\n            )\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'launch-container-block' },\n            isLoading ? _react2.default.createElement(\n                'div',\n                { className: 'loading' },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    '...Loading'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    'Please hold on! We are fetching your data from 100 nautical mile.'\n                )\n            ) : _react2.default.createElement(\n                _react2.default.Fragment,\n                null,\n                _react2.default.createElement(_filters2.default, { appliedFilter: appliedFilter }),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'filter-info-section' },\n                    _react2.default.createElement(_display2.default, { rocketData: rocketData })\n                )\n            )\n        )\n    );\n};\n\nexports.default = _react2.default.memo(Home);\n\n//# sourceURL=webpack:///./src/client/components/home.js?");

/***/ }),

/***/ "./src/client/components/index.scss":
/*!******************************************!*\
  !*** ./src/client/components/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/components/index.scss?");

/***/ }),

/***/ "./src/client/routes.js":
/*!******************************!*\
  !*** ./src/client/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _home = __webpack_require__(/*! ../client/components/home */ \"./src/client/components/home.js\");\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default })\n    );\n};\n\n//# sourceURL=webpack:///./src/client/routes.js?");

/***/ }),

/***/ "./src/client/utilities/constant.js":
/*!******************************************!*\
  !*** ./src/client/utilities/constant.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar SPACEX_API_CALL = exports.SPACEX_API_CALL = 'https://api.spacexdata.com/v3/launches?limit=100';\nvar FILTER_ARRAY = exports.FILTER_ARRAY = ['ALL', 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];\nvar FILTER_NAME = exports.FILTER_NAME = ['launch_year', 'launch_success', 'land_success'];\n\n//# sourceURL=webpack:///./src/client/utilities/constant.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _home = __webpack_require__(/*! ../client/components/home */ \"./src/client/components/home.js\");\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _routes = __webpack_require__(/*! ../client/routes */ \"./src/client/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n    var content = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRouterDom.StaticRouter,\n        { location: req.path, context: {} },\n        _react2.default.createElement(_routes2.default, null)\n    ));\n\n    return ' <html>\\n                <head>\\n                <meta content=\"width=device-width, initial-scale=1\" name=\"viewport\" />\\n                </head>\\n                <body>\\n                    <div id=\"root\">' + content + '</div>\\n                    <script defer src=\"bundle.js\"></script>\\n                    <link rel=\"stylesheet\" href=\"main.css\" />\\n                </body>\\n        </html>';\n};\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_express2.default.static('public'));\n\napp.get('/', function (req, res) {\n    res.send((0, _renderer2.default)(req));\n});\n\napp.listen(3000, function () {\n    console.log('Listening to port 3000');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });