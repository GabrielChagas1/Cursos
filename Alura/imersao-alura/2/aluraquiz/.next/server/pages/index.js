module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db.json":
/*!*****************!*\
  !*** ./db.json ***!
  \*****************/
/*! exports provided: bg, title, description, questions, external, theme, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"bg\":\"https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg?resize=1536%2C1208&ssl=1\",\"title\":\"Quiz CSS da Alura\",\"description\":\"Teste os seus conhecimentos sobre CSS e vamos ver quantos layouts você vai deixar de quebrar\",\"questions\":[{\"image\":\"https://media.giphy.com/media/xUOxf3yDKCuwpOlT3i/giphy.gif\",\"title\":\"Como fazer um seletor por id via CSS?\",\"description\":\"Essa é pra aquecer\",\"answer\":2,\"alternatives\":[\".elemento\",\"*elemento\",\"#elemento\",\"%elemento\"]},{\"image\":\"https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif\",\"title\":\"Como fazer um background gradiente com css?\",\"description\":\"Faz tempo em haha\",\"answer\":0,\"alternatives\":[\"background: linear-gradient(#e66465, #9198e5);\",\"background: gradient(#e66465, #9198e5);\"]}],\"external\":[\"\"],\"theme\":{\"colors\":{\"primary\":\"#0d47a1\",\"secondary\":\"#29b6f6\",\"mainBg\":\"#171B35\",\"contrastText\":\"#FFFFFF\",\"wrong\":\"#FF5722\",\"success\":\"#4CAF50\"},\"borderRadius\":\"4px\"}}");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: QuizContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizContainer", function() { return QuizContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _src_components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Widget */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/QuizLogo */ "./src/components/QuizLogo/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/GitHubCorner */ "./src/components/GitHubCorner/index.js");
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\Cursos\\Cursos\\Alura\\imersao-alura\\2\\aluraquiz\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // import IndexPage from '../src/components/IndexPage'
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const QuizContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__QuizContainer",
  componentId: "sc-1wbo52z-0"
})(["width:100%;max-width:350px;padding-top:45px;margin:auto 10%;@media screen and (max-width:500px){margin:auto;padding:15px;}"]);
function Home() {
  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_5__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_2__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(QuizContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_src_components_QuizLogo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, _db_json__WEBPACK_IMPORTED_MODULE_2__.title)), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, _db_json__WEBPACK_IMPORTED_MODULE_2__.description))), __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_src_components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Quizes da Galera"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "lorem ipsum dolor sit amet..."))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    projectUrl: "https://github.com/GabrielChagas1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\Cursos\\Cursos\\Alura\\imersao-alura\\2\\aluraquiz\\src\\components\\Footer\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // src/components/Footer/index.js

const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "sc-1f5euyg-0"
})(["background-color:#00000070;padding:20px;display:flex;align-items:center;border-radius:4px;img{width:58px;margin-right:23px;}a{color:white;text-decoration:none;transition:.3s;&:hover,&:focus{opacity:.5;}span{text-decoration:underline;}}"]);
function Footer(props) {
  return (// eslint-disable-next-line react/jsx-props-no-spreading
    __jsx(FooterWrapper, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }
    }), __jsx("a", {
      href: "https://www.alura.com.br/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg",
      alt: "Logo Alura",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    })), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, "Orgulhosamente criado durante", ' ', "a", ' ', __jsx("a", {
      href: "https://www.alura.com.br/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }, "Imers\xE3o React da Alura"))))
  );
}

/***/ }),

/***/ "./src/components/GitHubCorner/index.js":
/*!**********************************************!*\
  !*** ./src/components/GitHubCorner/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GitHubCorner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\Cursos\\Cursos\\Alura\\imersao-alura\\2\\aluraquiz\\src\\components\\GitHubCorner\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// src/components/GitHubCorner/index.js


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GitHubCorner__Wrapper",
  componentId: "sc-1x140l1-0"
})(["position:absolute;top:0;border:0;right:0;z-index:20;"]);
const SVGWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "GitHubCorner__SVGWrapper",
  componentId: "sc-1x140l1-1"
})(["fill:", ";color:", ";cursor:pointer;&:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){&:hover .octo-arm{animation:none}& .octo-arm{animation:octocat-wave 560ms ease-in-out}}"], ({
  theme
}) => theme.colors.secondary, ({
  theme
}) => theme.colors.contrastText); // eslint-disable-next-line react/prop-types

function GitHubCorner({
  projectUrl
}) {
  return __jsx(Wrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: projectUrl,
    target: "_blank",
    rel: "noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(SVGWrapper, {
    className: "githubCorner",
    width: "80",
    height: "80",
    viewBox: "0 0 250 250",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
    fill: "currentColor",
    style: {
      transformOrigin: '130px 106px'
    },
    className: "octo-arm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
    fill: "currentColor",
    className: "octo-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/QuizBackground/index.js":
/*!************************************************!*\
  !*** ./src/components/QuizBackground/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// src/components/QuizBackground/index.js

const QuizBackground = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuizBackground",
  componentId: "ouh9z4-0"
})(["width:100%;background-size:cover;background-position:center;background-image:url(", ");background-color:", ";flex:1;@media screen and (max-width:500px){background-image:none;&:after{content:\"\";background-size:cover;background-position:center;background-image:linear-gradient(transparent,", "),url(", ");display:block;width:100%;height:210px;position:absolute;top:0;left:0;right:0;z-index:1;}*:first-child{position:relative;z-index:10;}}"], ({
  backgroundImage
}) => backgroundImage, ({
  theme
}) => theme.colors.mainBg, ({
  theme
}) => theme.colors.mainBg, ({
  backgroundImage
}) => backgroundImage);
/* harmony default export */ __webpack_exports__["default"] = (QuizBackground);

/***/ }),

/***/ "./src/components/QuizLogo/index.js":
/*!******************************************!*\
  !*** ./src/components/QuizLogo/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Acer\\Desktop\\Cursos\\Cursos\\Alura\\imersao-alura\\2\\aluraquiz\\src\\components\\QuizLogo\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Logo({
  className
}) {
  return __jsx("svg", {
    className: className,
    width: "135",
    height: "67",
    viewBox: "0 0 135 67",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("g", {
    clipPath: "url(#clip0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("mask", {
    id: "path-1-outside-1",
    maskUnits: "userSpaceOnUse",
    x: "2",
    y: "2",
    width: "110",
    height: "50",
    fill: "black",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("rect", {
    fill: "white",
    x: "2",
    y: "2",
    width: "110",
    height: "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0345 4H36.8354C37.0766 4 37.2787 4.186 37.2787 4.408V48.628C37.2778 48.7361 37.2309 48.8396 37.148 48.9162C37.0651 48.9928 36.9529 49.0363 36.8354 49.0375H32.0345C31.9171 49.0363 31.8048 48.9928 31.7219 48.9162C31.639 48.8396 31.5921 48.7361 31.5913 48.628V4.408C31.5913 4.186 31.7917 4 32.0345 4ZM65.0296 40.3855V41.5C65.0296 41.983 64.9498 42.6505 64.7477 43.5055C64.5864 44.3215 64.1024 45.175 63.3364 45.9925C62.5705 46.81 61.4412 47.5525 59.9077 48.1465C58.3759 48.7405 56.2769 49.0375 53.575 49.0375C50.8714 49.0375 48.7741 48.7405 47.2422 48.1465C45.7104 47.5525 44.5794 46.846 43.8135 45.9925C43.0476 45.175 42.5619 44.3215 42.4006 43.468C42.2393 42.613 42.1187 41.983 42.1187 41.5V16.327C42.1187 16.1035 42.3207 15.919 42.5619 15.919H47.3628C47.604 15.919 47.8061 16.1035 47.8061 16.327V39.904C47.8061 40.684 47.9267 41.239 48.0489 41.686C48.1695 42.1315 48.4107 42.577 48.7741 42.9475C49.1375 43.357 49.703 43.69 50.4689 43.951C51.1941 44.2105 52.2028 44.359 53.4544 44.359C54.745 44.359 55.7929 44.209 56.5588 43.951C57.3247 43.69 57.8902 43.357 58.2944 42.985C58.6969 42.6145 58.9788 42.205 59.101 41.7595C59.2216 41.314 59.383 40.9435 59.383 39.8665V16.327C59.383 16.1035 59.585 15.919 59.8262 15.919H64.6271C64.8683 15.919 65.0704 16.1035 65.0704 16.327V40.387H65.0296V40.3855ZM81.3667 15.919H84.5933C84.8769 15.919 85.0773 16.1785 84.9975 16.438L83.9089 20.299C83.8682 20.485 83.6661 20.596 83.5047 20.596H81.2461C80.0353 20.596 79.0673 20.746 78.3013 21.0415C77.5762 21.3385 76.9699 21.673 76.5674 22.081C76.2092 22.4272 75.9466 22.8475 75.8015 23.3065C75.6793 23.752 75.6385 24.1615 75.6385 24.532V48.6655C75.6377 48.7736 75.5908 48.8771 75.5079 48.9537C75.425 49.0303 75.3127 49.0738 75.1953 49.075H70.3553C70.2378 49.0738 70.1256 49.0303 70.0427 48.9537C69.9598 48.8771 69.9128 48.7736 69.912 48.6655V23.4925C69.912 23.047 69.9919 22.378 70.1939 21.5245C70.3553 20.6695 70.8393 19.8535 71.6052 19C72.3711 18.1825 73.5021 17.44 75.0339 16.846C76.5267 16.216 78.6647 15.919 81.3667 15.919ZM15.4156 15.919C19.3267 15.919 22.1916 16.624 24.0477 18.034C25.8631 19.4455 26.7904 21.229 26.7904 23.344V41.5375C26.7904 42.28 26.629 43.0975 26.3471 43.951C26.0652 44.842 25.4997 45.658 24.6523 46.3645C23.8049 47.107 22.6364 47.6995 21.1844 48.22C19.7308 48.703 17.7948 48.9625 15.4563 48.9625C13.077 48.9625 11.1801 48.703 9.72815 48.22C8.27615 47.737 7.10444 47.107 6.25867 46.3645C5.41126 45.622 4.84741 44.8045 4.56385 43.9495C4.28193 43.06 4.12059 42.2425 4.12059 41.5375V38.6425C4.12059 37.0825 4.56548 35.671 5.41126 34.408C6.29941 33.1465 7.50859 32.218 9.12356 31.6975C9.93022 31.438 10.8184 31.1785 11.8662 30.844C12.875 30.5095 13.8821 30.214 14.8501 29.878C15.8181 29.581 16.6264 29.284 17.3516 29.062C18.0784 28.8025 18.5216 28.69 18.683 28.6165C18.8443 28.5415 19.0855 28.4305 19.3674 28.282C19.651 28.1335 19.9329 27.9115 20.2148 27.652C20.4984 27.3535 20.7004 27.0205 20.9009 26.686C21.103 26.314 21.1844 25.8685 21.1844 25.3855V24.235C21.1844 23.827 21.103 23.419 20.9009 22.9735C20.7396 22.5265 20.4169 22.156 19.9736 21.784C19.5304 21.4135 18.9241 21.1165 18.1973 20.893C17.4721 20.671 16.5449 20.56 15.4156 20.56C13.1976 20.56 11.7049 20.968 10.8982 21.8215C10.2024 22.5714 9.79155 23.51 9.72815 24.4945C9.72815 24.718 9.52607 24.8665 9.28489 24.8665H4.44489C4.32744 24.8657 4.21502 24.8225 4.13182 24.7462C4.04861 24.6699 4.00128 24.5666 4 24.4585V23.3815C4 22.342 4.20207 21.376 4.64533 20.4865C5.04948 19.594 5.73393 18.7765 6.70193 18.109C7.63082 17.44 8.80089 16.8835 10.2529 16.513C11.6641 16.141 13.3981 15.919 15.4156 15.919ZM21.1437 32.218C21.1067 32.4085 21.0265 32.5896 20.9083 32.7496C20.7901 32.9096 20.6365 33.0449 20.4576 33.1465C20.0942 33.3685 19.7732 33.4795 19.4489 33.592C18.7644 33.814 18.0376 34.0375 17.2717 34.297C16.5058 34.5565 15.779 34.8175 15.0929 35.002C14.2862 35.263 13.5203 35.485 12.8342 35.7445C12.2847 35.9657 11.7695 36.2532 11.3024 36.5995C10.8982 36.9325 10.5348 37.342 10.2105 37.861C9.88948 38.3815 9.72815 39.013 9.72815 39.7915C9.72815 41.3515 10.1307 42.502 10.9373 43.282C11.744 44.0245 13.2367 44.4325 15.4156 44.4325C17.6335 44.4325 19.167 44.0245 19.9736 43.2445C20.7803 42.4285 21.1844 41.314 21.1844 39.829V32.218H21.1437ZM98.5511 15.919C102.462 15.919 105.327 16.624 107.183 18.034C108.999 19.4455 109.926 21.229 109.926 23.344V41.5375C109.926 42.28 109.765 43.0975 109.483 43.951C109.199 44.842 108.635 45.658 107.788 46.3645C106.94 47.107 105.77 47.6995 104.318 48.22C102.868 48.703 100.93 48.9625 98.5919 48.9625C96.2126 48.9625 94.3157 48.703 92.8637 48.22C91.4117 47.737 90.24 47.107 89.3942 46.3645C88.5468 45.622 87.983 44.8045 87.6994 43.9495C87.4175 43.06 87.2562 42.2425 87.2562 41.5375V38.6425C87.2562 37.0825 87.6994 35.671 88.5468 34.408C89.435 33.1465 90.6442 32.218 92.2575 31.6975C93.0642 31.438 93.9523 31.1785 95.0018 30.844C96.0089 30.5095 97.0176 30.214 97.9856 29.878C98.9536 29.581 99.7619 29.284 100.487 29.062C101.212 28.8025 101.657 28.69 101.819 28.6165C101.98 28.5415 102.221 28.4305 102.503 28.282C102.787 28.1335 103.068 27.9115 103.35 27.652C103.634 27.3535 103.834 27.0205 104.036 26.686C104.239 26.314 104.318 25.8685 104.318 25.3855V24.235C104.318 23.827 104.237 23.419 104.036 22.9735C103.875 22.5265 103.552 22.156 103.108 21.784C102.666 21.4135 102.06 21.1165 101.335 20.893C100.608 20.671 99.6805 20.56 98.5511 20.56C96.3316 20.56 94.8405 20.968 94.0338 21.8215C93.3379 22.5714 92.9271 23.51 92.8637 24.4945C92.8637 24.718 92.6616 24.8665 92.4188 24.8665H87.5788C87.4617 24.8653 87.3496 24.822 87.2668 24.7457C87.1839 24.6694 87.1368 24.5663 87.1356 24.4585V23.3815C87.1356 22.342 87.3376 21.376 87.7809 20.4865C88.1834 19.594 88.8695 18.7765 89.8375 18.109C90.7664 17.44 91.9348 16.8835 93.3868 16.513C94.8405 16.141 96.5336 15.919 98.5511 15.919ZM104.279 32.218C104.242 32.4085 104.162 32.5896 104.044 32.7496C103.926 32.9096 103.772 33.0449 103.593 33.1465C103.23 33.3685 102.909 33.4795 102.584 33.592C101.9 33.814 101.173 34.0375 100.406 34.297C99.6397 34.5565 98.9145 34.8175 98.2284 35.002C97.4218 35.263 96.6542 35.485 95.9698 35.7445C95.4196 35.9656 94.9039 36.2531 94.4363 36.5995C94.0338 36.9325 93.6704 37.342 93.3477 37.861C93.025 38.3815 92.8637 39.013 92.8637 39.7915C92.8637 41.3515 93.2662 42.502 94.0729 43.282C94.8796 44.0245 96.3723 44.4325 98.5511 44.4325C100.769 44.4325 102.303 44.0245 103.109 43.2445C103.916 42.4285 104.318 41.314 104.318 39.829V32.218H104.279Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  })), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0345 4H36.8354C37.0766 4 37.2787 4.186 37.2787 4.408V48.628C37.2778 48.7361 37.2309 48.8396 37.148 48.9162C37.0651 48.9928 36.9529 49.0363 36.8354 49.0375H32.0345C31.9171 49.0363 31.8048 48.9928 31.7219 48.9162C31.639 48.8396 31.5921 48.7361 31.5913 48.628V4.408C31.5913 4.186 31.7917 4 32.0345 4ZM65.0296 40.3855V41.5C65.0296 41.983 64.9498 42.6505 64.7477 43.5055C64.5864 44.3215 64.1024 45.175 63.3364 45.9925C62.5705 46.81 61.4412 47.5525 59.9077 48.1465C58.3759 48.7405 56.2769 49.0375 53.575 49.0375C50.8714 49.0375 48.7741 48.7405 47.2422 48.1465C45.7104 47.5525 44.5794 46.846 43.8135 45.9925C43.0476 45.175 42.5619 44.3215 42.4006 43.468C42.2393 42.613 42.1187 41.983 42.1187 41.5V16.327C42.1187 16.1035 42.3207 15.919 42.5619 15.919H47.3628C47.604 15.919 47.8061 16.1035 47.8061 16.327V39.904C47.8061 40.684 47.9267 41.239 48.0489 41.686C48.1695 42.1315 48.4107 42.577 48.7741 42.9475C49.1375 43.357 49.703 43.69 50.4689 43.951C51.1941 44.2105 52.2028 44.359 53.4544 44.359C54.745 44.359 55.7929 44.209 56.5588 43.951C57.3247 43.69 57.8902 43.357 58.2944 42.985C58.6969 42.6145 58.9788 42.205 59.101 41.7595C59.2216 41.314 59.383 40.9435 59.383 39.8665V16.327C59.383 16.1035 59.585 15.919 59.8262 15.919H64.6271C64.8683 15.919 65.0704 16.1035 65.0704 16.327V40.387H65.0296V40.3855ZM81.3667 15.919H84.5933C84.8769 15.919 85.0773 16.1785 84.9975 16.438L83.9089 20.299C83.8682 20.485 83.6661 20.596 83.5047 20.596H81.2461C80.0353 20.596 79.0673 20.746 78.3013 21.0415C77.5762 21.3385 76.9699 21.673 76.5674 22.081C76.2092 22.4272 75.9466 22.8475 75.8015 23.3065C75.6793 23.752 75.6385 24.1615 75.6385 24.532V48.6655C75.6377 48.7736 75.5908 48.8771 75.5079 48.9537C75.425 49.0303 75.3127 49.0738 75.1953 49.075H70.3553C70.2378 49.0738 70.1256 49.0303 70.0427 48.9537C69.9598 48.8771 69.9128 48.7736 69.912 48.6655V23.4925C69.912 23.047 69.9919 22.378 70.1939 21.5245C70.3553 20.6695 70.8393 19.8535 71.6052 19C72.3711 18.1825 73.5021 17.44 75.0339 16.846C76.5267 16.216 78.6647 15.919 81.3667 15.919ZM15.4156 15.919C19.3267 15.919 22.1916 16.624 24.0477 18.034C25.8631 19.4455 26.7904 21.229 26.7904 23.344V41.5375C26.7904 42.28 26.629 43.0975 26.3471 43.951C26.0652 44.842 25.4997 45.658 24.6523 46.3645C23.8049 47.107 22.6364 47.6995 21.1844 48.22C19.7308 48.703 17.7948 48.9625 15.4563 48.9625C13.077 48.9625 11.1801 48.703 9.72815 48.22C8.27615 47.737 7.10444 47.107 6.25867 46.3645C5.41126 45.622 4.84741 44.8045 4.56385 43.9495C4.28193 43.06 4.12059 42.2425 4.12059 41.5375V38.6425C4.12059 37.0825 4.56548 35.671 5.41126 34.408C6.29941 33.1465 7.50859 32.218 9.12356 31.6975C9.93022 31.438 10.8184 31.1785 11.8662 30.844C12.875 30.5095 13.8821 30.214 14.8501 29.878C15.8181 29.581 16.6264 29.284 17.3516 29.062C18.0784 28.8025 18.5216 28.69 18.683 28.6165C18.8443 28.5415 19.0855 28.4305 19.3674 28.282C19.651 28.1335 19.9329 27.9115 20.2148 27.652C20.4984 27.3535 20.7004 27.0205 20.9009 26.686C21.103 26.314 21.1844 25.8685 21.1844 25.3855V24.235C21.1844 23.827 21.103 23.419 20.9009 22.9735C20.7396 22.5265 20.4169 22.156 19.9736 21.784C19.5304 21.4135 18.9241 21.1165 18.1973 20.893C17.4721 20.671 16.5449 20.56 15.4156 20.56C13.1976 20.56 11.7049 20.968 10.8982 21.8215C10.2024 22.5714 9.79155 23.51 9.72815 24.4945C9.72815 24.718 9.52607 24.8665 9.28489 24.8665H4.44489C4.32744 24.8657 4.21502 24.8225 4.13182 24.7462C4.04861 24.6699 4.00128 24.5666 4 24.4585V23.3815C4 22.342 4.20207 21.376 4.64533 20.4865C5.04948 19.594 5.73393 18.7765 6.70193 18.109C7.63082 17.44 8.80089 16.8835 10.2529 16.513C11.6641 16.141 13.3981 15.919 15.4156 15.919ZM21.1437 32.218C21.1067 32.4085 21.0265 32.5896 20.9083 32.7496C20.7901 32.9096 20.6365 33.0449 20.4576 33.1465C20.0942 33.3685 19.7732 33.4795 19.4489 33.592C18.7644 33.814 18.0376 34.0375 17.2717 34.297C16.5058 34.5565 15.779 34.8175 15.0929 35.002C14.2862 35.263 13.5203 35.485 12.8342 35.7445C12.2847 35.9657 11.7695 36.2532 11.3024 36.5995C10.8982 36.9325 10.5348 37.342 10.2105 37.861C9.88948 38.3815 9.72815 39.013 9.72815 39.7915C9.72815 41.3515 10.1307 42.502 10.9373 43.282C11.744 44.0245 13.2367 44.4325 15.4156 44.4325C17.6335 44.4325 19.167 44.0245 19.9736 43.2445C20.7803 42.4285 21.1844 41.314 21.1844 39.829V32.218H21.1437ZM98.5511 15.919C102.462 15.919 105.327 16.624 107.183 18.034C108.999 19.4455 109.926 21.229 109.926 23.344V41.5375C109.926 42.28 109.765 43.0975 109.483 43.951C109.199 44.842 108.635 45.658 107.788 46.3645C106.94 47.107 105.77 47.6995 104.318 48.22C102.868 48.703 100.93 48.9625 98.5919 48.9625C96.2126 48.9625 94.3157 48.703 92.8637 48.22C91.4117 47.737 90.24 47.107 89.3942 46.3645C88.5468 45.622 87.983 44.8045 87.6994 43.9495C87.4175 43.06 87.2562 42.2425 87.2562 41.5375V38.6425C87.2562 37.0825 87.6994 35.671 88.5468 34.408C89.435 33.1465 90.6442 32.218 92.2575 31.6975C93.0642 31.438 93.9523 31.1785 95.0018 30.844C96.0089 30.5095 97.0176 30.214 97.9856 29.878C98.9536 29.581 99.7619 29.284 100.487 29.062C101.212 28.8025 101.657 28.69 101.819 28.6165C101.98 28.5415 102.221 28.4305 102.503 28.282C102.787 28.1335 103.068 27.9115 103.35 27.652C103.634 27.3535 103.834 27.0205 104.036 26.686C104.239 26.314 104.318 25.8685 104.318 25.3855V24.235C104.318 23.827 104.237 23.419 104.036 22.9735C103.875 22.5265 103.552 22.156 103.108 21.784C102.666 21.4135 102.06 21.1165 101.335 20.893C100.608 20.671 99.6805 20.56 98.5511 20.56C96.3316 20.56 94.8405 20.968 94.0338 21.8215C93.3379 22.5714 92.9271 23.51 92.8637 24.4945C92.8637 24.718 92.6616 24.8665 92.4188 24.8665H87.5788C87.4617 24.8653 87.3496 24.822 87.2668 24.7457C87.1839 24.6694 87.1368 24.5663 87.1356 24.4585V23.3815C87.1356 22.342 87.3376 21.376 87.7809 20.4865C88.1834 19.594 88.8695 18.7765 89.8375 18.109C90.7664 17.44 91.9348 16.8835 93.3868 16.513C94.8405 16.141 96.5336 15.919 98.5511 15.919ZM104.279 32.218C104.242 32.4085 104.162 32.5896 104.044 32.7496C103.926 32.9096 103.772 33.0449 103.593 33.1465C103.23 33.3685 102.909 33.4795 102.584 33.592C101.9 33.814 101.173 34.0375 100.406 34.297C99.6397 34.5565 98.9145 34.8175 98.2284 35.002C97.4218 35.263 96.6542 35.485 95.9698 35.7445C95.4196 35.9656 94.9039 36.2531 94.4363 36.5995C94.0338 36.9325 93.6704 37.342 93.3477 37.861C93.025 38.3815 92.8637 39.013 92.8637 39.7915C92.8637 41.3515 93.2662 42.502 94.0729 43.282C94.8796 44.0245 96.3723 44.4325 98.5511 44.4325C100.769 44.4325 102.303 44.0245 103.109 43.2445C103.916 42.4285 104.318 41.314 104.318 39.829V32.218H104.279Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.0345 4H36.8354C37.0766 4 37.2787 4.186 37.2787 4.408V48.628C37.2778 48.7361 37.2309 48.8396 37.148 48.9162C37.0651 48.9928 36.9529 49.0363 36.8354 49.0375H32.0345C31.9171 49.0363 31.8048 48.9928 31.7219 48.9162C31.639 48.8396 31.5921 48.7361 31.5913 48.628V4.408C31.5913 4.186 31.7917 4 32.0345 4ZM65.0296 40.3855V41.5C65.0296 41.983 64.9498 42.6505 64.7477 43.5055C64.5864 44.3215 64.1024 45.175 63.3364 45.9925C62.5705 46.81 61.4412 47.5525 59.9077 48.1465C58.3759 48.7405 56.2769 49.0375 53.575 49.0375C50.8714 49.0375 48.7741 48.7405 47.2422 48.1465C45.7104 47.5525 44.5794 46.846 43.8135 45.9925C43.0476 45.175 42.5619 44.3215 42.4006 43.468C42.2393 42.613 42.1187 41.983 42.1187 41.5V16.327C42.1187 16.1035 42.3207 15.919 42.5619 15.919H47.3628C47.604 15.919 47.8061 16.1035 47.8061 16.327V39.904C47.8061 40.684 47.9267 41.239 48.0489 41.686C48.1695 42.1315 48.4107 42.577 48.7741 42.9475C49.1375 43.357 49.703 43.69 50.4689 43.951C51.1941 44.2105 52.2028 44.359 53.4544 44.359C54.745 44.359 55.7929 44.209 56.5588 43.951C57.3247 43.69 57.8902 43.357 58.2944 42.985C58.6969 42.6145 58.9788 42.205 59.101 41.7595C59.2216 41.314 59.383 40.9435 59.383 39.8665V16.327C59.383 16.1035 59.585 15.919 59.8262 15.919H64.6271C64.8683 15.919 65.0704 16.1035 65.0704 16.327V40.387H65.0296V40.3855ZM81.3667 15.919H84.5933C84.8769 15.919 85.0773 16.1785 84.9975 16.438L83.9089 20.299C83.8682 20.485 83.6661 20.596 83.5047 20.596H81.2461C80.0353 20.596 79.0673 20.746 78.3013 21.0415C77.5762 21.3385 76.9699 21.673 76.5674 22.081C76.2092 22.4272 75.9466 22.8475 75.8015 23.3065C75.6793 23.752 75.6385 24.1615 75.6385 24.532V48.6655C75.6377 48.7736 75.5908 48.8771 75.5079 48.9537C75.425 49.0303 75.3127 49.0738 75.1953 49.075H70.3553C70.2378 49.0738 70.1256 49.0303 70.0427 48.9537C69.9598 48.8771 69.9128 48.7736 69.912 48.6655V23.4925C69.912 23.047 69.9919 22.378 70.1939 21.5245C70.3553 20.6695 70.8393 19.8535 71.6052 19C72.3711 18.1825 73.5021 17.44 75.0339 16.846C76.5267 16.216 78.6647 15.919 81.3667 15.919ZM15.4156 15.919C19.3267 15.919 22.1916 16.624 24.0477 18.034C25.8631 19.4455 26.7904 21.229 26.7904 23.344V41.5375C26.7904 42.28 26.629 43.0975 26.3471 43.951C26.0652 44.842 25.4997 45.658 24.6523 46.3645C23.8049 47.107 22.6364 47.6995 21.1844 48.22C19.7308 48.703 17.7948 48.9625 15.4563 48.9625C13.077 48.9625 11.1801 48.703 9.72815 48.22C8.27615 47.737 7.10444 47.107 6.25867 46.3645C5.41126 45.622 4.84741 44.8045 4.56385 43.9495C4.28193 43.06 4.12059 42.2425 4.12059 41.5375V38.6425C4.12059 37.0825 4.56548 35.671 5.41126 34.408C6.29941 33.1465 7.50859 32.218 9.12356 31.6975C9.93022 31.438 10.8184 31.1785 11.8662 30.844C12.875 30.5095 13.8821 30.214 14.8501 29.878C15.8181 29.581 16.6264 29.284 17.3516 29.062C18.0784 28.8025 18.5216 28.69 18.683 28.6165C18.8443 28.5415 19.0855 28.4305 19.3674 28.282C19.651 28.1335 19.9329 27.9115 20.2148 27.652C20.4984 27.3535 20.7004 27.0205 20.9009 26.686C21.103 26.314 21.1844 25.8685 21.1844 25.3855V24.235C21.1844 23.827 21.103 23.419 20.9009 22.9735C20.7396 22.5265 20.4169 22.156 19.9736 21.784C19.5304 21.4135 18.9241 21.1165 18.1973 20.893C17.4721 20.671 16.5449 20.56 15.4156 20.56C13.1976 20.56 11.7049 20.968 10.8982 21.8215C10.2024 22.5714 9.79155 23.51 9.72815 24.4945C9.72815 24.718 9.52607 24.8665 9.28489 24.8665H4.44489C4.32744 24.8657 4.21502 24.8225 4.13182 24.7462C4.04861 24.6699 4.00128 24.5666 4 24.4585V23.3815C4 22.342 4.20207 21.376 4.64533 20.4865C5.04948 19.594 5.73393 18.7765 6.70193 18.109C7.63082 17.44 8.80089 16.8835 10.2529 16.513C11.6641 16.141 13.3981 15.919 15.4156 15.919ZM21.1437 32.218C21.1067 32.4085 21.0265 32.5896 20.9083 32.7496C20.7901 32.9096 20.6365 33.0449 20.4576 33.1465C20.0942 33.3685 19.7732 33.4795 19.4489 33.592C18.7644 33.814 18.0376 34.0375 17.2717 34.297C16.5058 34.5565 15.779 34.8175 15.0929 35.002C14.2862 35.263 13.5203 35.485 12.8342 35.7445C12.2847 35.9657 11.7695 36.2532 11.3024 36.5995C10.8982 36.9325 10.5348 37.342 10.2105 37.861C9.88948 38.3815 9.72815 39.013 9.72815 39.7915C9.72815 41.3515 10.1307 42.502 10.9373 43.282C11.744 44.0245 13.2367 44.4325 15.4156 44.4325C17.6335 44.4325 19.167 44.0245 19.9736 43.2445C20.7803 42.4285 21.1844 41.314 21.1844 39.829V32.218H21.1437ZM98.5511 15.919C102.462 15.919 105.327 16.624 107.183 18.034C108.999 19.4455 109.926 21.229 109.926 23.344V41.5375C109.926 42.28 109.765 43.0975 109.483 43.951C109.199 44.842 108.635 45.658 107.788 46.3645C106.94 47.107 105.77 47.6995 104.318 48.22C102.868 48.703 100.93 48.9625 98.5919 48.9625C96.2126 48.9625 94.3157 48.703 92.8637 48.22C91.4117 47.737 90.24 47.107 89.3942 46.3645C88.5468 45.622 87.983 44.8045 87.6994 43.9495C87.4175 43.06 87.2562 42.2425 87.2562 41.5375V38.6425C87.2562 37.0825 87.6994 35.671 88.5468 34.408C89.435 33.1465 90.6442 32.218 92.2575 31.6975C93.0642 31.438 93.9523 31.1785 95.0018 30.844C96.0089 30.5095 97.0176 30.214 97.9856 29.878C98.9536 29.581 99.7619 29.284 100.487 29.062C101.212 28.8025 101.657 28.69 101.819 28.6165C101.98 28.5415 102.221 28.4305 102.503 28.282C102.787 28.1335 103.068 27.9115 103.35 27.652C103.634 27.3535 103.834 27.0205 104.036 26.686C104.239 26.314 104.318 25.8685 104.318 25.3855V24.235C104.318 23.827 104.237 23.419 104.036 22.9735C103.875 22.5265 103.552 22.156 103.108 21.784C102.666 21.4135 102.06 21.1165 101.335 20.893C100.608 20.671 99.6805 20.56 98.5511 20.56C96.3316 20.56 94.8405 20.968 94.0338 21.8215C93.3379 22.5714 92.9271 23.51 92.8637 24.4945C92.8637 24.718 92.6616 24.8665 92.4188 24.8665H87.5788C87.4617 24.8653 87.3496 24.822 87.2668 24.7457C87.1839 24.6694 87.1368 24.5663 87.1356 24.4585V23.3815C87.1356 22.342 87.3376 21.376 87.7809 20.4865C88.1834 19.594 88.8695 18.7765 89.8375 18.109C90.7664 17.44 91.9348 16.8835 93.3868 16.513C94.8405 16.141 96.5336 15.919 98.5511 15.919ZM104.279 32.218C104.242 32.4085 104.162 32.5896 104.044 32.7496C103.926 32.9096 103.772 33.0449 103.593 33.1465C103.23 33.3685 102.909 33.4795 102.584 33.592C101.9 33.814 101.173 34.0375 100.406 34.297C99.6397 34.5565 98.9145 34.8175 98.2284 35.002C97.4218 35.263 96.6542 35.485 95.9698 35.7445C95.4196 35.9656 94.9039 36.2531 94.4363 36.5995C94.0338 36.9325 93.6704 37.342 93.3477 37.861C93.025 38.3815 92.8637 39.013 92.8637 39.7915C92.8637 41.3515 93.2662 42.502 94.0729 43.282C94.8796 44.0245 96.3723 44.4325 98.5511 44.4325C100.769 44.4325 102.303 44.0245 103.109 43.2445C103.916 42.4285 104.318 41.314 104.318 39.829V32.218H104.279Z",
    stroke: "#252B51",
    strokeWidth: "4",
    mask: "url(#path-1-outside-1)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M86.8469 62.368C84.8917 63.0142 83.211 62.938 81.805 62.1393C80.3989 61.3406 79.3095 59.9506 78.5365 57.9694C77.8934 56.3209 77.6895 54.6809 77.9248 53.0493C78.1601 51.4178 78.8115 49.9732 79.879 48.7154C80.9406 47.4425 82.334 46.521 84.0592 45.9507C85.7351 45.3968 87.2807 45.4835 88.696 46.2109C90.1219 46.9177 91.2419 48.3146 92.0561 50.4017C92.4928 51.5209 92.7099 52.6955 92.7075 53.9256C92.7051 55.1558 92.4778 56.3322 92.0254 57.4549C93.894 58.2032 94.8579 58.6529 94.9169 58.8042C95.0703 59.1974 95.0598 59.5509 94.8854 59.8646C94.7333 60.1881 94.4273 60.4258 93.9672 60.5779C93.6222 60.692 92.5301 60.4127 90.6909 59.74C89.6892 60.976 88.4079 61.852 86.8469 62.368ZM86.3954 60.2122C87.102 59.9787 87.7105 59.4702 88.221 58.6868C87.4993 58.3107 86.7651 57.8789 86.0184 57.3915C85.2882 56.8987 84.8877 56.5616 84.8169 56.3801C84.6576 55.9717 84.6306 55.6648 84.7359 55.4592C84.8518 55.2331 85.1068 55.0549 85.5012 54.9246C85.5505 54.9083 85.9935 55.0692 86.8303 55.4073C87.1653 55.5527 87.9239 55.8568 89.1062 56.3197C89.2619 55.4828 89.2926 54.6105 89.1981 53.7026C89.1142 52.7742 88.8952 51.8563 88.5411 50.9489C88.1281 49.8902 87.5871 49.1215 86.9179 48.6426C86.2653 48.1583 85.4789 48.0682 84.5587 48.3723C83.5072 48.7199 82.7122 49.3924 82.1739 50.3899C81.6356 51.3874 81.3576 52.5293 81.3401 53.8157C81.3167 55.0869 81.5292 56.2972 81.9776 57.4466C82.249 58.1423 82.6365 58.7314 83.14 59.2137C83.6541 59.6756 84.206 59.9968 84.7959 60.1775C85.3858 60.3581 85.9189 60.3697 86.3954 60.2122Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M105.647 55.5391C105.682 55.8179 105.602 56.0407 105.407 56.2075C105.219 56.3894 104.935 56.5428 104.557 56.6677C103.424 57.0424 102.765 56.9954 102.583 56.5265L102.394 55.6156C102.058 56.0853 101.64 56.5821 101.139 57.1061C100.639 57.63 100.183 57.9599 99.7723 58.0957C97.3405 58.8995 95.8385 58.5678 95.2662 57.1008C94.2926 54.6054 94.0498 51.6294 94.5377 48.1729C94.5992 47.7599 94.7072 47.4424 94.8618 47.2206C95.0328 46.9933 95.3894 46.7901 95.9316 46.6108C96.5067 46.4208 96.9634 46.3552 97.3018 46.4141C97.6506 46.4524 97.8634 46.5699 97.9401 46.7665C97.9578 46.8119 97.9205 46.9779 97.8283 47.2645C97.7243 47.5208 97.6449 47.769 97.5901 48.0091C96.972 50.894 97.1025 53.4632 97.9816 55.7167C98.0583 55.9133 98.2083 56.0601 98.4316 56.157C98.655 56.2539 98.8323 56.2807 98.9638 56.2372C99.3253 56.1177 99.8712 55.758 100.602 55.158C101.349 54.5525 101.887 54.0074 102.218 53.5226L101.994 51.5222C101.73 49.1337 101.574 47.6655 101.527 47.1175C101.472 46.4528 101.51 45.8853 101.642 45.4149C101.784 44.9239 102.168 44.5752 102.792 44.3688C103.663 44.081 104.193 44.179 104.382 44.663C104.411 44.7386 104.425 44.8451 104.423 44.9824C104.431 45.0991 104.442 45.198 104.455 45.279L104.903 49.28C105.253 52.4595 105.501 54.5459 105.647 55.5391Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M105.645 40.4037C105.462 39.9349 105.456 39.4674 105.627 39.0012C105.814 38.5296 106.195 38.1988 106.77 38.0087C107.378 37.8078 107.971 37.8079 108.551 38.0091C109.146 38.2049 109.53 38.5221 109.701 38.9607C109.872 39.3992 109.79 39.8534 109.453 40.323C109.117 40.7927 108.645 41.128 108.037 41.329C107.446 41.5245 106.941 41.5377 106.522 41.3687C106.115 41.1791 105.822 40.8574 105.645 40.4037ZM107.968 53.133C107.862 52.8607 107.531 49.8968 106.975 44.2411L106.5 43.4506C106.435 43.2842 106.492 43.1204 106.67 42.959C106.848 42.7977 107.241 42.6166 107.849 42.4156C108.326 42.2581 108.718 42.265 109.026 42.4364C109.35 42.6024 109.577 42.8517 109.707 43.1844C109.743 43.2752 109.773 43.4016 109.8 43.5637L110.792 52.4556L111.268 53.2461C111.332 53.4124 111.276 53.5763 111.098 53.7376C110.919 53.899 110.526 54.0801 109.918 54.2811C109.376 54.4603 108.967 54.4334 108.69 54.2003C108.408 53.9522 108.167 53.5964 107.968 53.133Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M122.195 49.9925C118.16 51.8214 115.862 52.8715 115.3 53.1426C114.715 53.404 114.415 53.5375 114.399 53.5429C114.103 53.6407 113.825 53.6898 113.566 53.6902C113.29 53.696 113.112 53.6439 113.032 53.5337C112.969 53.469 112.85 53.3546 112.675 53.1906C112.5 53.0265 112.386 52.8765 112.333 52.7404C112.279 52.6042 112.279 52.4848 112.332 52.382C112.379 52.2641 112.533 52.1363 112.794 51.9986C113.04 51.8664 113.211 51.7839 113.31 51.7514C113.804 50.7345 114.443 49.3536 115.228 47.6088C116.327 45.1966 117.18 43.4122 117.786 42.2557L113.049 44.3079C112.54 44.4762 112.194 44.326 112.011 43.8571C111.864 43.4791 111.864 43.0521 112.012 42.5762C112.053 42.4432 112.655 42.1077 113.818 41.5697C114.98 41.0317 116.256 40.4735 117.644 39.8951C119.043 39.2962 119.939 38.9316 120.334 38.8013C120.958 38.5949 121.4 38.8244 121.66 39.4899C121.736 39.6865 121.736 39.9 121.659 40.1303C121.576 40.3456 121.445 40.5339 121.267 40.6952L120.893 41.3055C120.32 42.4511 119.633 43.899 118.832 45.6493L116.786 49.9623C119.264 48.8017 120.864 48.1019 121.587 47.863C122.212 47.6566 122.654 47.8861 122.913 48.5516C123.014 48.8087 122.982 49.0838 122.818 49.377C122.665 49.6497 122.457 49.8548 122.195 49.9925Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M127.144 43.2346C127.205 43.6755 127.15 44.0096 126.979 44.2369C126.824 44.4587 126.476 44.6593 125.933 44.8385C125.013 45.1426 124.438 44.9998 124.208 44.41C124.061 44.0319 123.926 43.4019 123.805 42.52C123.694 41.6176 123.567 40.4131 123.424 38.9065C123.23 36.8876 123.039 35.2092 122.851 33.8713C122.726 33.0759 123.165 32.5126 124.167 32.1813C124.66 32.0184 125.071 31.9767 125.399 32.0561C125.726 32.1356 125.913 32.3299 125.96 32.6389L127.144 43.2346ZM126.495 49.0581C126.067 49.1993 125.642 49.1779 125.217 48.9937C124.787 48.7944 124.495 48.4982 124.342 48.1049C124.189 47.7117 124.244 47.2836 124.509 46.8205C124.767 46.3423 125.184 46.0082 125.759 45.8181C126.269 45.6498 126.74 45.622 127.174 45.7348C127.601 45.8325 127.904 46.1082 128.081 46.5619C128.263 47.0307 128.185 47.5178 127.844 48.0232C127.519 48.5231 127.07 48.8681 126.495 49.0581Z",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M86.918 48.6425C86.2653 48.1582 85.4789 48.0681 84.5588 48.3723C83.5072 48.7199 82.7123 49.3924 82.1739 50.3899C81.6356 51.3874 81.3577 52.5293 81.3401 53.8156C81.3167 55.0869 81.5292 56.2972 81.9776 57.4466C82.249 58.1423 82.6365 58.7313 83.14 59.2137C83.6541 59.6755 84.2061 59.9968 84.7959 60.1774C85.3858 60.3581 85.919 60.3696 86.3955 60.2121C86.5752 60.1528 86.7485 60.0756 86.9155 59.9806C87.4052 59.7022 87.8404 59.2709 88.2211 58.6867C87.8894 58.5139 87.5552 58.3294 87.2183 58.1331C86.822 57.9021 86.422 57.6549 86.0185 57.3915C85.2883 56.8987 84.8878 56.5615 84.817 56.38C84.6576 55.9717 84.6306 55.6647 84.736 55.4592C84.8518 55.2331 85.1069 55.0549 85.5012 54.9245C85.5505 54.9082 85.9935 55.0691 86.8303 55.4072C86.9456 55.4572 87.1111 55.5261 87.3267 55.6137C87.7377 55.7808 88.3308 56.0161 89.1062 56.3197C89.2156 55.7319 89.2633 55.1267 89.2492 54.504C89.2433 54.24 89.2263 53.9728 89.1981 53.7026C89.1142 52.7742 88.8952 51.8563 88.5412 50.9488C88.1282 49.8902 87.5871 49.1214 86.918 48.6425ZM76.0706 52.8227C76.348 50.8995 77.1239 49.167 78.4002 47.6611C79.691 46.1156 81.3851 45.0052 83.427 44.3303C85.551 43.6282 87.6618 43.7115 89.5957 44.7013C90.9023 45.3523 91.9307 46.3716 92.736 47.6463C92.8284 47.1947 92.9905 46.717 93.2874 46.2909L93.3053 46.2653L93.3242 46.2402C93.8433 45.5503 94.6764 45.1963 95.2995 44.9904C95.9611 44.7717 96.7751 44.5871 97.5859 44.7119C98.1981 44.7906 99.2006 45.087 99.6492 46.0635C99.6756 45.6926 99.7337 45.3314 99.8309 44.9848L99.8348 44.9709C100.169 43.8195 101.091 43.1018 102.16 42.7484C102.715 42.5649 103.452 42.3979 104.211 42.5385C104.387 42.5711 104.554 42.6182 104.712 42.6785C104.751 42.5709 104.797 42.4684 104.85 42.3714C104.406 41.9859 104.088 41.5076 103.885 40.9855C103.561 40.1566 103.547 39.2904 103.854 38.4516L103.862 38.4311L103.87 38.4108C104.271 37.3978 105.111 36.7276 106.138 36.3882C107.139 36.0572 108.186 36.046 109.195 36.3927C110.169 36.7161 111.057 37.3426 111.461 38.3787C111.817 39.2888 111.663 40.1703 111.24 40.9195C111.335 40.86 111.432 40.804 111.525 40.7521C111.889 40.549 112.382 40.3067 112.978 40.0313C114.164 39.4824 115.46 38.9154 116.864 38.3302C118.234 37.7438 119.211 37.3428 119.701 37.1808C120.176 37.024 120.759 36.9409 121.359 37.0696C121.237 35.9352 121.116 34.9468 120.998 34.1027C120.882 33.3446 121.024 32.5452 121.567 31.8491C122.081 31.1881 122.819 30.7975 123.535 30.5609C124.204 30.3399 125.032 30.1867 125.875 30.3911C126.323 30.4997 126.8 30.7203 127.184 31.1193C127.569 31.5183 127.749 31.981 127.813 32.4033L127.817 32.4329L129.003 43.0404C129.063 43.4965 129.067 44.0693 128.846 44.6302C129.313 44.9911 129.641 45.4679 129.841 45.9799C130.253 47.0361 130.012 48.0656 129.441 48.9184C128.904 49.7411 128.12 50.3503 127.127 50.6785C126.215 50.9797 125.276 50.9225 124.42 50.5509L124.398 50.5415L124.376 50.5316C124.343 50.5162 124.31 50.5005 124.278 50.4844C123.99 50.8854 123.608 51.2323 123.124 51.4871L123.074 51.5135L123.022 51.5371C118.972 53.3729 116.703 54.4094 116.168 54.6675L116.143 54.6796L116.117 54.691C115.825 54.8219 115.602 54.9215 115.449 54.9893L115.268 55.0692L115.207 55.0959L115.17 55.1113L115.135 55.1254C115.127 55.1288 115.084 55.1457 115.031 55.1633C114.58 55.3121 114.096 55.4084 113.589 55.4117C113.337 55.416 112.764 55.4033 112.217 55.1226C111.972 55.3063 111.712 55.4393 111.507 55.534C111.22 55.6658 110.895 55.7874 110.551 55.9014C109.764 56.1614 108.538 56.3295 107.523 55.5473C107.552 56.2045 107.325 56.8937 106.724 57.431C106.269 57.855 105.709 58.1165 105.19 58.288C104.546 58.5008 103.797 58.682 103.069 58.6299C102.836 58.6133 102.575 58.5707 102.308 58.4811C101.777 58.9962 101.145 59.4712 100.404 59.716C99.1819 60.1201 97.9238 60.3564 96.7544 60.1905C96.7079 60.3275 96.6493 60.464 96.5774 60.5994C96.1604 61.4419 95.3876 61.9377 94.5994 62.1983C94.0791 62.3702 93.5765 62.3257 93.3365 62.2981C93.0303 62.2629 92.7065 62.1941 92.3886 62.1128C92.0537 62.0271 91.6741 61.9141 91.2533 61.7765C90.1954 62.7662 88.9324 63.5079 87.4791 63.9883C85.1391 64.7618 82.8349 64.7475 80.8226 63.6044C78.9397 62.5347 77.6379 60.7602 76.7761 58.5512C76.0387 56.661 75.7935 54.7442 76.0706 52.8227ZM90.691 59.7399C89.6892 60.976 88.4079 61.852 86.847 62.3679C84.8917 63.0142 83.211 62.938 81.805 62.1392C80.399 61.3405 79.3095 59.9505 78.5366 57.9693C77.8934 56.3208 77.6895 54.6808 77.9248 53.0493C78.1602 51.4178 78.8115 49.9731 79.879 48.7154C80.9406 47.4425 82.334 46.5209 84.0592 45.9507C85.7352 45.3967 87.2808 45.4834 88.6961 46.2108C90.1219 46.9176 91.2419 48.3146 92.0562 50.4017C92.2034 50.7792 92.3258 51.163 92.4231 51.5531C92.6143 52.3196 92.7091 53.1104 92.7075 53.9256C92.7071 54.1719 92.6976 54.416 92.679 54.658C92.6051 55.6246 92.3872 56.5569 92.0254 57.4549C92.7167 57.7317 93.2842 57.9677 93.7278 58.1628C94.4834 58.4951 94.8797 58.7088 94.9169 58.8041C95.0216 59.0727 95.05 59.3227 95.0019 59.5541C94.9795 59.6616 94.9407 59.7651 94.8854 59.8646C94.7334 60.188 94.4273 60.4258 93.9672 60.5778C93.6222 60.6919 92.5301 60.4126 90.691 59.7399ZM95.1944 56.9122C95.2179 56.9754 95.2418 57.0382 95.2662 57.1008C95.4947 57.6866 95.8715 58.0913 96.3966 58.315C96.5082 58.3626 96.6267 58.402 96.7518 58.4333C97.5113 58.6227 98.5182 58.5102 99.7723 58.0956C100.122 57.9799 100.505 57.7232 100.92 57.3255C100.992 57.2565 101.065 57.1834 101.139 57.106C101.187 57.0561 101.234 57.0064 101.28 56.957C101.351 56.8815 101.419 56.8065 101.486 56.7321C101.491 56.7268 101.496 56.7214 101.501 56.716C101.599 56.6072 101.693 56.4996 101.784 56.3932C101.786 56.3903 101.788 56.3874 101.791 56.3845C102.015 56.1206 102.216 55.8643 102.394 55.6155L102.583 56.5265C102.714 56.8644 103.093 56.9832 103.719 56.8829C103.961 56.844 104.241 56.7723 104.557 56.6676C104.935 56.5427 105.219 56.3893 105.407 56.2074C105.602 56.0406 105.682 55.8178 105.648 55.539C105.501 54.5458 105.253 52.4595 104.903 49.2799L104.455 45.279C104.442 45.1979 104.431 45.099 104.423 44.9823C104.425 44.845 104.411 44.7386 104.382 44.663C104.193 44.179 103.663 44.0809 102.792 44.3688C102.168 44.5751 101.784 44.9238 101.642 45.4148C101.51 45.8852 101.472 46.4528 101.527 47.1175C101.574 47.6654 101.73 49.1336 101.994 51.5221L102.218 53.5226C101.955 53.9077 101.561 54.3308 101.036 54.7921C100.9 54.9115 100.755 55.0334 100.602 55.1579C100.443 55.288 100.294 55.4068 100.153 55.5143C99.6432 55.9026 99.2469 56.1436 98.9638 56.2372C98.8324 56.2806 98.655 56.2539 98.4317 56.1569C98.2084 56.06 98.0583 55.9132 97.9816 55.7166C97.1025 53.4632 96.972 50.894 97.5902 48.009C97.6449 47.769 97.7243 47.5208 97.8283 47.2644C97.9206 46.9778 97.9578 46.8119 97.9401 46.7665C97.8634 46.5699 97.6506 46.4524 97.3018 46.414C96.9635 46.3551 96.5067 46.4207 95.9317 46.6108C95.3895 46.79 95.0328 46.9933 94.8618 47.2205C94.7072 47.4424 94.5992 47.7598 94.5377 48.1728C94.3804 49.2872 94.2991 50.3517 94.2937 51.3662C94.2889 52.2589 94.343 53.113 94.4559 53.9284C94.486 54.1459 94.5203 54.3607 94.5588 54.5727C94.7079 55.3938 94.9197 56.1737 95.1944 56.9122ZM106.975 44.241C107.531 49.8967 107.862 52.8607 107.968 53.1329C108.167 53.5963 108.408 53.9521 108.69 54.2003C108.967 54.4333 109.376 54.4602 109.918 54.281C110.347 54.1394 110.669 54.0076 110.884 53.8856C110.974 53.8345 111.045 53.7852 111.098 53.7376C111.276 53.5762 111.332 53.4124 111.268 53.246L110.792 52.4555L109.8 43.5636C109.773 43.4015 109.743 43.2751 109.707 43.1844C109.628 42.9805 109.512 42.8079 109.359 42.6667C109.263 42.5774 109.151 42.5006 109.026 42.4364C108.85 42.3388 108.648 42.2945 108.418 42.3036C108.244 42.3104 108.054 42.3478 107.849 42.4155C107.241 42.6165 106.848 42.7976 106.67 42.959C106.598 43.0239 106.546 43.0893 106.514 43.155C106.466 43.2526 106.461 43.3511 106.5 43.4505L106.975 44.241ZM117.786 42.2556C117.459 42.8799 117.06 43.6871 116.589 44.6772C116.187 45.5214 115.734 46.4986 115.228 47.6088C114.443 49.3536 113.804 50.7344 113.31 51.7513C113.212 51.7839 113.04 51.8663 112.794 51.9986C112.758 52.018 112.723 52.0373 112.69 52.0563C112.67 52.0681 112.65 52.0798 112.632 52.0914C112.513 52.166 112.428 52.2374 112.376 52.3057C112.357 52.3316 112.342 52.357 112.332 52.382C112.283 52.4768 112.28 52.5859 112.321 52.7092C112.325 52.7195 112.328 52.7298 112.333 52.7403C112.349 52.7827 112.372 52.8265 112.4 52.8717C112.463 52.9713 112.554 53.0776 112.675 53.1905C112.85 53.3545 112.969 53.4689 113.032 53.5337C113.035 53.5388 113.039 53.5439 113.044 53.5488C113.064 53.5725 113.089 53.5933 113.119 53.6111C113.129 53.6169 113.14 53.6224 113.151 53.6276C113.248 53.6731 113.386 53.6939 113.566 53.6901C113.825 53.6897 114.103 53.6406 114.399 53.5429C114.415 53.5374 114.715 53.404 115.3 53.1425C115.862 52.8714 118.16 51.8214 122.196 49.9925C122.457 49.8548 122.665 49.6496 122.818 49.377C122.839 49.3385 122.859 49.3003 122.876 49.2624C122.984 49.0203 122.999 48.791 122.922 48.5743C122.919 48.5667 122.916 48.5591 122.913 48.5515C122.785 48.223 122.612 48.0007 122.395 47.8847C122.173 47.7657 121.903 47.7584 121.587 47.8629C121.161 48.0038 120.43 48.3047 119.394 48.7657C118.673 49.0869 117.803 49.4857 116.786 49.9622L118.832 45.6492C119.633 43.899 120.32 42.451 120.893 41.3054L121.267 40.6951C121.445 40.5338 121.576 40.3455 121.659 40.1303C121.661 40.1255 121.662 40.1208 121.664 40.1161C121.736 39.8911 121.735 39.6824 121.66 39.4898C121.637 39.431 121.612 39.3756 121.587 39.3237C121.556 39.262 121.523 39.2052 121.489 39.1531C121.408 39.0318 121.317 38.9365 121.215 38.8671C120.979 38.707 120.685 38.685 120.334 38.8012C119.939 38.9315 119.043 39.2962 117.644 39.8951C116.256 40.4734 114.98 41.0316 113.818 41.5696C112.655 42.1076 112.053 42.4432 112.012 42.5762C111.864 43.052 111.864 43.479 112.011 43.8571C112.194 44.3259 112.54 44.4762 113.049 44.3078L117.786 42.2556ZM123.426 38.9237C123.47 39.3826 123.512 39.8135 123.552 40.2162C123.644 41.1284 123.728 41.8963 123.805 42.52C123.926 43.4018 124.061 44.0318 124.208 44.4099C124.231 44.4683 124.257 44.5222 124.287 44.5718C124.496 44.9242 124.876 45.0558 125.427 44.9666C125.582 44.9414 125.751 44.8987 125.934 44.8384C126.476 44.6592 126.824 44.4587 126.979 44.2369C127.036 44.1606 127.08 44.0722 127.112 43.9719C127.174 43.7733 127.185 43.5275 127.144 43.2346L125.96 32.6389C125.913 32.3298 125.726 32.1355 125.399 32.0561C125.071 31.9766 124.66 32.0183 124.168 32.1813C123.165 32.5125 122.726 33.0759 122.851 33.8713C123.039 35.2092 123.23 36.8876 123.424 38.9065C123.425 38.9122 123.426 38.9179 123.426 38.9237ZM127.668 45.9692C127.528 45.8561 127.363 45.778 127.174 45.7347C126.888 45.6604 126.586 45.6471 126.268 45.6948C126.103 45.7195 125.933 45.7606 125.759 45.8181C125.244 45.9884 124.856 46.2744 124.594 46.676C124.564 46.7226 124.536 46.7708 124.509 46.8205C124.419 46.977 124.354 47.1295 124.312 47.2781C124.233 47.5605 124.24 47.8285 124.333 48.0821C124.336 48.0897 124.339 48.0973 124.342 48.1049C124.445 48.3696 124.611 48.5903 124.84 48.7672C124.951 48.853 125.077 48.9285 125.217 48.9936C125.642 49.1778 126.067 49.1993 126.495 49.0581C127.07 48.868 127.519 48.523 127.844 48.0231C128.185 47.5177 128.263 47.0307 128.081 46.5618C127.982 46.309 127.844 46.1115 127.668 45.9692ZM109.173 40.6532C109.275 40.5517 109.369 40.4416 109.453 40.323C109.79 39.8533 109.872 39.3992 109.701 38.9606C109.53 38.522 109.146 38.2048 108.551 38.009C107.971 37.8078 107.378 37.8077 106.77 38.0086C106.195 38.1987 105.814 38.5296 105.627 39.0012C105.456 39.4673 105.462 39.9348 105.645 40.4036C105.774 40.7337 105.964 40.9938 106.215 41.1841C106.309 41.2554 106.411 41.3169 106.522 41.3686C106.802 41.4816 107.121 41.5132 107.478 41.4632C107.655 41.4385 107.841 41.3937 108.037 41.3289C108.492 41.1787 108.87 40.9535 109.173 40.6532Z",
    fill: "#252B51",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("clipPath", {
    id: "clip0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("rect", {
    width: "134.373",
    height: "67",
    fill: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))));
}

Logo.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
const QuizLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Logo).withConfig({
  displayName: "QuizLogo",
  componentId: "rct3ik-0"
})(["margin:auto;display:block;@media screen and (max-width:500px){margin:0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (QuizLogo);

/***/ }),

/***/ "./src/components/Widget/index.js":
/*!****************************************!*\
  !*** ./src/components/Widget/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Widget = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widget",
  componentId: "i6tyvd-0"
})(["margin-top:24px;margin-bottom:24px;border:1px solid ", ";background-color:", ";border-radius:4px;overflow:hidden;h1,h2,h3{font-size:16px;font-weight:700;line-height:1;margin-bottom:0;}p{font-size:14px;font-weight:400;line-height:1;}"], ({
  theme
}) => theme.colors.primary, ({
  theme
}) => {
  return theme.colors.mainBg;
});
Widget.Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "Widget__Header",
  componentId: "i6tyvd-1"
})(["display:flex;justify-content:flex-start;align-items:center;padding:18px 32px;background-color:", ";*{margin:0;}"], ({
  theme
}) => theme.colors.primary);
Widget.Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widget__Content",
  componentId: "i6tyvd-2"
})(["padding:24px 32px 32px 32px;& > *:first-child{margin-top:0;}& > *:last-child{margin-bottom:0;}ul{list-style:none;padding:0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dpdEh1YkNvcm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWl6TG9nby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJRdWl6Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSG9tZSIsImRiIiwiYmciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiRm9vdGVyV3JhcHBlciIsImZvb3RlciIsIkZvb3RlciIsInByb3BzIiwiV3JhcHBlciIsIlNWR1dyYXBwZXIiLCJzdmciLCJ0aGVtZSIsImNvbG9ycyIsInNlY29uZGFyeSIsImNvbnRyYXN0VGV4dCIsIkdpdEh1YkNvcm5lciIsInByb2plY3RVcmwiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJRdWl6QmFja2dyb3VuZCIsImJhY2tncm91bmRJbWFnZSIsIm1haW5CZyIsIkxvZ28iLCJjbGFzc05hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiUXVpekxvZ28iLCJXaWRnZXQiLCJwcmltYXJ5IiwiSGVhZGVyIiwiaGVhZGVyIiwiQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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QUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRGIsQ0FBakI7QUFJQSxNQUFNQyxRQUFRLEdBQUc5Qix3REFBTSxDQUFDd0IsSUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGdGQUFkO0FBUWVNLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQzNDQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1DLE1BQU0sR0FBRy9CLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVBBR1UsQ0FBQztBQUFFYTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFpQixPQUh0QyxFQUlVLENBQUM7QUFBRWxCO0FBQUYsQ0FBRCxLQUFlO0FBQ2pDLFNBQU9BLEtBQUssQ0FBQ0MsTUFBTixDQUFhUSxNQUFwQjtBQUNELENBTlMsQ0FBWjtBQXNCQVEsTUFBTSxDQUFDRSxNQUFQLEdBQWdCakMsd0RBQU0sQ0FBQ2tDLE1BQXZCO0FBQUE7QUFBQTtBQUFBLHdIQUtzQixDQUFDO0FBQUVwQjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFpQixPQUxsRDtBQVlBRCxNQUFNLENBQUNJLE9BQVAsR0FBaUJuQyx3REFBTSxDQUFDQyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQWNlOEIscUVBQWYsRTs7Ozs7Ozs7Ozs7QUNsREEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IGRiIGZyb20gJy4uL2RiLmpzb24nO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1dpZGdldCdcclxuaW1wb3J0IFF1aXpMb2dvIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1aXpMb2dvJ1xyXG5pbXBvcnQgUXVpekJhY2tncm91bmQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVpekJhY2tncm91bmQnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5pbXBvcnQgR2l0SHViQ29ybmVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0dpdEh1YkNvcm5lcidcclxuLy8gaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9JbmRleFBhZ2UnXHJcblxyXG4vLyBjb25zdCBCYWNrZ3JvdW5kSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2RiLmJnfSk7XHJcbi8vICAgZmxleDogMTtcclxuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuLy8gYDtcclxuXHJcbmV4cG9ydCBjb25zdCBRdWl6Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIG1hcmdpbjogYXV0byAxMCU7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxyXG4gICAgICA8UXVpekNvbnRhaW5lcj5cclxuICAgICAgICA8UXVpekxvZ28gLz5cclxuICAgICAgICA8V2lkZ2V0PlxyXG4gICAgICAgICAgPFdpZGdldC5IZWFkZXI+XHJcbiAgICAgICAgICAgIDxoMT57ZGIudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDwvV2lkZ2V0LkhlYWRlcj5cclxuICAgICAgICAgIDxXaWRnZXQuQ29udGVudD5cclxuICAgICAgICAgICAgPHA+e2RiLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgPC9XaWRnZXQ+XHJcblxyXG4gICAgICAgIDxXaWRnZXQ+XHJcbiAgICAgICAgICA8V2lkZ2V0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxoMT5RdWl6ZXMgZGEgR2FsZXJhPC9oMT5cclxuXHJcbiAgICAgICAgICAgIDxwPmxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0Li4uPC9wPlxyXG4gICAgICAgICAgPC9XaWRnZXQuQ29udGVudD5cclxuICAgICAgICA8L1dpZGdldD5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvUXVpekNvbnRhaW5lcj5cclxuICAgICAgPEdpdEh1YkNvcm5lciBwcm9qZWN0VXJsPVwiaHR0cHM6Ly9naXRodWIuY29tL0dhYnJpZWxDaGFnYXMxXCIgLz5cclxuICAgIDwvUXVpekJhY2tncm91bmQ+XHJcbiAgKTtcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG4vLyBzcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanNcclxuY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5mb290ZXJgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDcwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyM3B4O1xyXG4gIH1cclxuICBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nXHJcbiAgICA8Rm9vdGVyV3JhcHBlciB7Li4ucHJvcHN9PlxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYWx1cmEuY29tLmJyL1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuYWx1cmEuY29tLmJyL2Fzc2V0cy9pbWcvYWx1cmEtbG9nby13aGl0ZS4xNTcwNTUwNzA3LnN2Z1wiIGFsdD1cIkxvZ28gQWx1cmFcIiAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIE9yZ3VsaG9zYW1lbnRlIGNyaWFkbyBkdXJhbnRlXHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICBhXHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYWx1cmEuY29tLmJyL1wiPlxyXG4gICAgICAgICAgPHNwYW4+SW1lcnPDo28gUmVhY3QgZGEgQWx1cmE8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0Zvb3RlcldyYXBwZXI+XHJcbiAgKTtcclxufSAiLCIvLyBzcmMvY29tcG9uZW50cy9HaXRIdWJDb3JuZXIvaW5kZXguanNcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyMDtcclxuYDtcclxuXHJcbmNvbnN0IFNWR1dyYXBwZXIgPSBzdHlsZWQuc3ZnYFxyXG4gIGZpbGw6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX07XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmNvbnRyYXN0VGV4dH07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIgLm9jdG8tYXJte1xyXG4gICAgYW5pbWF0aW9uOm9jdG9jYXQtd2F2ZSA1NjBtcyBlYXNlLWluLW91dFxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIG9jdG9jYXQtd2F2ZXtcclxuICAgIDAlLDEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgwKX1cclxuICAgIDIwJSw2MCV7dHJhbnNmb3JtOnJvdGF0ZSgtMjVkZWcpfVxyXG4gICAgNDAlLDgwJXt0cmFuc2Zvcm06cm90YXRlKDEwZGVnKX1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpe1xyXG4gICAgJjpob3ZlciAub2N0by1hcm17XHJcbiAgICAgIGFuaW1hdGlvbjpub25lXHJcbiAgICB9XHJcbiAgICAmIC5vY3RvLWFybXtcclxuICAgICAgYW5pbWF0aW9uOm9jdG9jYXQtd2F2ZSA1NjBtcyBlYXNlLWluLW91dFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdpdEh1YkNvcm5lcih7IHByb2plY3RVcmwgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPGEgaHJlZj17cHJvamVjdFVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgIDxTVkdXcmFwcGVyIGNsYXNzTmFtZT1cImdpdGh1YkNvcm5lclwiIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCI4MFwiIHZpZXdCb3g9XCIwIDAgMjUwIDI1MFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0wLDAgTDExNSwxMTUgTDEzMCwxMTUgTDE0MiwxNDIgTDI1MCwyNTAgTDI1MCwwIFpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xMjguMywxMDkuMCBDMTEzLjgsOTkuNyAxMTkuMCw4OS42IDExOS4wLDg5LjYgQzEyMi4wLDgyLjcgMTIwLjUsNzguNiAxMjAuNSw3OC42IEMxMTkuMiw3Mi4wIDEyMy40LDc2LjMgMTIzLjQsNzYuMyBDMTI3LjMsODAuOSAxMjUuNSw4Ny4zIDEyNS41LDg3LjMgQzEyMi45LDk3LjYgMTMwLjYsMTAxLjkgMTM0LjQsMTAzLjJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAnMTMwcHggMTA2cHgnIH19IGNsYXNzTmFtZT1cIm9jdG8tYXJtXCIgLz5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTE1LjAsMTE1LjAgQzExNC45LDExNS4xIDExOC43LDExNi41IDExOS44LDExNS40IEwxMzMuNywxMDEuNiBDMTM2LjksOTkuMiAxMzkuOSw5OC40IDE0Mi4yLDk4LjYgQzEzMy44LDg4LjAgMTI3LjUsNzQuNCAxNDMuOCw1OC4wIEMxNDguNSw1My40IDE1NC4wLDUxLjIgMTU5LjcsNTEuMCBDMTYwLjMsNDkuNCAxNjMuMiw0My42IDE3MS40LDQwLjEgQzE3MS40LDQwLjEgMTc2LjEsNDIuNSAxNzguOCw1Ni4yIEMxODMuMSw1OC42IDE4Ny4yLDYxLjggMTkwLjksNjUuNCBDMTk0LjUsNjkuMCAxOTcuNyw3My4yIDIwMC4xLDc3LjYgQzIxMy44LDgwLjIgMjE2LjMsODQuOSAyMTYuMyw4NC45IEMyMTIuNyw5My4xIDIwNi45LDk2LjAgMjA1LjQsOTYuNiBDMjA1LjEsMTAyLjQgMjAzLjAsMTA3LjggMTk4LjMsMTEyLjUgQzE4MS45LDEyOC45IDE2OC4zLDEyMi41IDE1Ny43LDExNC4xIEMxNTcuOSwxMTYuOSAxNTYuNywxMjAuOSAxNTIuNywxMjQuOSBMMTQxLjAsMTM2LjUgQzEzOS44LDEzNy43IDE0MS42LDE0MS45IDE0MS44LDE0MS44IFpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwib2N0by1ib2R5XCIgLz5cclxuICAgICAgICA8L1NWR1dyYXBwZXI+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59ICIsIi8vIHNyYy9jb21wb25lbnRzL1F1aXpCYWNrZ3JvdW5kL2luZGV4LmpzXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgUXVpekJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyh7IGJhY2tncm91bmRJbWFnZSB9KSA9PiBiYWNrZ3JvdW5kSW1hZ2V9KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQmd9O1xyXG4gIGZsZXg6IDE7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLm1haW5CZ30pLFxyXG4gICAgICAgIHVybCgkeyh7IGJhY2tncm91bmRJbWFnZSB9KSA9PiBiYWNrZ3JvdW5kSW1hZ2V9KTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6QmFja2dyb3VuZDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5mdW5jdGlvbiBMb2dvKHsgY2xhc3NOYW1lIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gd2lkdGg9XCIxMzVcIiBoZWlnaHQ9XCI2N1wiIHZpZXdCb3g9XCIwIDAgMTM1IDY3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNjbGlwMClcIj5cclxuICAgICAgICA8bWFzayBpZD1cInBhdGgtMS1vdXRzaWRlLTFcIiBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHg9XCIyXCIgeT1cIjJcIiB3aWR0aD1cIjExMFwiIGhlaWdodD1cIjUwXCIgZmlsbD1cImJsYWNrXCI+XHJcbiAgICAgICAgICA8cmVjdCBmaWxsPVwid2hpdGVcIiB4PVwiMlwiIHk9XCIyXCIgd2lkdGg9XCIxMTBcIiBoZWlnaHQ9XCI1MFwiIC8+XHJcbiAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMyLjAzNDUgNEgzNi44MzU0QzM3LjA3NjYgNCAzNy4yNzg3IDQuMTg2IDM3LjI3ODcgNC40MDhWNDguNjI4QzM3LjI3NzggNDguNzM2MSAzNy4yMzA5IDQ4LjgzOTYgMzcuMTQ4IDQ4LjkxNjJDMzcuMDY1MSA0OC45OTI4IDM2Ljk1MjkgNDkuMDM2MyAzNi44MzU0IDQ5LjAzNzVIMzIuMDM0NUMzMS45MTcxIDQ5LjAzNjMgMzEuODA0OCA0OC45OTI4IDMxLjcyMTkgNDguOTE2MkMzMS42MzkgNDguODM5NiAzMS41OTIxIDQ4LjczNjEgMzEuNTkxMyA0OC42MjhWNC40MDhDMzEuNTkxMyA0LjE4NiAzMS43OTE3IDQgMzIuMDM0NSA0Wk02NS4wMjk2IDQwLjM4NTVWNDEuNUM2NS4wMjk2IDQxLjk4MyA2NC45NDk4IDQyLjY1MDUgNjQuNzQ3NyA0My41MDU1QzY0LjU4NjQgNDQuMzIxNSA2NC4xMDI0IDQ1LjE3NSA2My4zMzY0IDQ1Ljk5MjVDNjIuNTcwNSA0Ni44MSA2MS40NDEyIDQ3LjU1MjUgNTkuOTA3NyA0OC4xNDY1QzU4LjM3NTkgNDguNzQwNSA1Ni4yNzY5IDQ5LjAzNzUgNTMuNTc1IDQ5LjAzNzVDNTAuODcxNCA0OS4wMzc1IDQ4Ljc3NDEgNDguNzQwNSA0Ny4yNDIyIDQ4LjE0NjVDNDUuNzEwNCA0Ny41NTI1IDQ0LjU3OTQgNDYuODQ2IDQzLjgxMzUgNDUuOTkyNUM0My4wNDc2IDQ1LjE3NSA0Mi41NjE5IDQ0LjMyMTUgNDIuNDAwNiA0My40NjhDNDIuMjM5MyA0Mi42MTMgNDIuMTE4NyA0MS45ODMgNDIuMTE4NyA0MS41VjE2LjMyN0M0Mi4xMTg3IDE2LjEwMzUgNDIuMzIwNyAxNS45MTkgNDIuNTYxOSAxNS45MTlINDcuMzYyOEM0Ny42MDQgMTUuOTE5IDQ3LjgwNjEgMTYuMTAzNSA0Ny44MDYxIDE2LjMyN1YzOS45MDRDNDcuODA2MSA0MC42ODQgNDcuOTI2NyA0MS4yMzkgNDguMDQ4OSA0MS42ODZDNDguMTY5NSA0Mi4xMzE1IDQ4LjQxMDcgNDIuNTc3IDQ4Ljc3NDEgNDIuOTQ3NUM0OS4xMzc1IDQzLjM1NyA0OS43MDMgNDMuNjkgNTAuNDY4OSA0My45NTFDNTEuMTk0MSA0NC4yMTA1IDUyLjIwMjggNDQuMzU5IDUzLjQ1NDQgNDQuMzU5QzU0Ljc0NSA0NC4zNTkgNTUuNzkyOSA0NC4yMDkgNTYuNTU4OCA0My45NTFDNTcuMzI0NyA0My42OSA1Ny44OTAyIDQzLjM1NyA1OC4yOTQ0IDQyLjk4NUM1OC42OTY5IDQyLjYxNDUgNTguOTc4OCA0Mi4yMDUgNTkuMTAxIDQxLjc1OTVDNTkuMjIxNiA0MS4zMTQgNTkuMzgzIDQwLjk0MzUgNTkuMzgzIDM5Ljg2NjVWMTYuMzI3QzU5LjM4MyAxNi4xMDM1IDU5LjU4NSAxNS45MTkgNTkuODI2MiAxNS45MTlINjQuNjI3MUM2NC44NjgzIDE1LjkxOSA2NS4wNzA0IDE2LjEwMzUgNjUuMDcwNCAxNi4zMjdWNDAuMzg3SDY1LjAyOTZWNDAuMzg1NVpNODEuMzY2NyAxNS45MTlIODQuNTkzM0M4NC44NzY5IDE1LjkxOSA4NS4wNzczIDE2LjE3ODUgODQuOTk3NSAxNi40MzhMODMuOTA4OSAyMC4yOTlDODMuODY4MiAyMC40ODUgODMuNjY2MSAyMC41OTYgODMuNTA0NyAyMC41OTZIODEuMjQ2MUM4MC4wMzUzIDIwLjU5NiA3OS4wNjczIDIwLjc0NiA3OC4zMDEzIDIxLjA0MTVDNzcuNTc2MiAyMS4zMzg1IDc2Ljk2OTkgMjEuNjczIDc2LjU2NzQgMjIuMDgxQzc2LjIwOTIgMjIuNDI3MiA3NS45NDY2IDIyLjg0NzUgNzUuODAxNSAyMy4zMDY1Qzc1LjY3OTMgMjMuNzUyIDc1LjYzODUgMjQuMTYxNSA3NS42Mzg1IDI0LjUzMlY0OC42NjU1Qzc1LjYzNzcgNDguNzczNiA3NS41OTA4IDQ4Ljg3NzEgNzUuNTA3OSA0OC45NTM3Qzc1LjQyNSA0OS4wMzAzIDc1LjMxMjcgNDkuMDczOCA3NS4xOTUzIDQ5LjA3NUg3MC4zNTUzQzcwLjIzNzggNDkuMDczOCA3MC4xMjU2IDQ5LjAzMDMgNzAuMDQyNyA0OC45NTM3QzY5Ljk1OTggNDguODc3MSA2OS45MTI4IDQ4Ljc3MzYgNjkuOTEyIDQ4LjY2NTVWMjMuNDkyNUM2OS45MTIgMjMuMDQ3IDY5Ljk5MTkgMjIuMzc4IDcwLjE5MzkgMjEuNTI0NUM3MC4zNTUzIDIwLjY2OTUgNzAuODM5MyAxOS44NTM1IDcxLjYwNTIgMTlDNzIuMzcxMSAxOC4xODI1IDczLjUwMjEgMTcuNDQgNzUuMDMzOSAxNi44NDZDNzYuNTI2NyAxNi4yMTYgNzguNjY0NyAxNS45MTkgODEuMzY2NyAxNS45MTlaTTE1LjQxNTYgMTUuOTE5QzE5LjMyNjcgMTUuOTE5IDIyLjE5MTYgMTYuNjI0IDI0LjA0NzcgMTguMDM0QzI1Ljg2MzEgMTkuNDQ1NSAyNi43OTA0IDIxLjIyOSAyNi43OTA0IDIzLjM0NFY0MS41Mzc1QzI2Ljc5MDQgNDIuMjggMjYuNjI5IDQzLjA5NzUgMjYuMzQ3MSA0My45NTFDMjYuMDY1MiA0NC44NDIgMjUuNDk5NyA0NS42NTggMjQuNjUyMyA0Ni4zNjQ1QzIzLjgwNDkgNDcuMTA3IDIyLjYzNjQgNDcuNjk5NSAyMS4xODQ0IDQ4LjIyQzE5LjczMDggNDguNzAzIDE3Ljc5NDggNDguOTYyNSAxNS40NTYzIDQ4Ljk2MjVDMTMuMDc3IDQ4Ljk2MjUgMTEuMTgwMSA0OC43MDMgOS43MjgxNSA0OC4yMkM4LjI3NjE1IDQ3LjczNyA3LjEwNDQ0IDQ3LjEwNyA2LjI1ODY3IDQ2LjM2NDVDNS40MTEyNiA0NS42MjIgNC44NDc0MSA0NC44MDQ1IDQuNTYzODUgNDMuOTQ5NUM0LjI4MTkzIDQzLjA2IDQuMTIwNTkgNDIuMjQyNSA0LjEyMDU5IDQxLjUzNzVWMzguNjQyNUM0LjEyMDU5IDM3LjA4MjUgNC41NjU0OCAzNS42NzEgNS40MTEyNiAzNC40MDhDNi4yOTk0MSAzMy4xNDY1IDcuNTA4NTkgMzIuMjE4IDkuMTIzNTYgMzEuNjk3NUM5LjkzMDIyIDMxLjQzOCAxMC44MTg0IDMxLjE3ODUgMTEuODY2MiAzMC44NDRDMTIuODc1IDMwLjUwOTUgMTMuODgyMSAzMC4yMTQgMTQuODUwMSAyOS44NzhDMTUuODE4MSAyOS41ODEgMTYuNjI2NCAyOS4yODQgMTcuMzUxNiAyOS4wNjJDMTguMDc4NCAyOC44MDI1IDE4LjUyMTYgMjguNjkgMTguNjgzIDI4LjYxNjVDMTguODQ0MyAyOC41NDE1IDE5LjA4NTUgMjguNDMwNSAxOS4zNjc0IDI4LjI4MkMxOS42NTEgMjguMTMzNSAxOS45MzI5IDI3LjkxMTUgMjAuMjE0OCAyNy42NTJDMjAuNDk4NCAyNy4zNTM1IDIwLjcwMDQgMjcuMDIwNSAyMC45MDA5IDI2LjY4NkMyMS4xMDMgMjYuMzE0IDIxLjE4NDQgMjUuODY4NSAyMS4xODQ0IDI1LjM4NTVWMjQuMjM1QzIxLjE4NDQgMjMuODI3IDIxLjEwMyAyMy40MTkgMjAuOTAwOSAyMi45NzM1QzIwLjczOTYgMjIuNTI2NSAyMC40MTY5IDIyLjE1NiAxOS45NzM2IDIxLjc4NEMxOS41MzA0IDIxLjQxMzUgMTguOTI0MSAyMS4xMTY1IDE4LjE5NzMgMjAuODkzQzE3LjQ3MjEgMjAuNjcxIDE2LjU0NDkgMjAuNTYgMTUuNDE1NiAyMC41NkMxMy4xOTc2IDIwLjU2IDExLjcwNDkgMjAuOTY4IDEwLjg5ODIgMjEuODIxNUMxMC4yMDI0IDIyLjU3MTQgOS43OTE1NSAyMy41MSA5LjcyODE1IDI0LjQ5NDVDOS43MjgxNSAyNC43MTggOS41MjYwNyAyNC44NjY1IDkuMjg0ODkgMjQuODY2NUg0LjQ0NDg5QzQuMzI3NDQgMjQuODY1NyA0LjIxNTAyIDI0LjgyMjUgNC4xMzE4MiAyNC43NDYyQzQuMDQ4NjEgMjQuNjY5OSA0LjAwMTI4IDI0LjU2NjYgNCAyNC40NTg1VjIzLjM4MTVDNCAyMi4zNDIgNC4yMDIwNyAyMS4zNzYgNC42NDUzMyAyMC40ODY1QzUuMDQ5NDggMTkuNTk0IDUuNzMzOTMgMTguNzc2NSA2LjcwMTkzIDE4LjEwOUM3LjYzMDgyIDE3LjQ0IDguODAwODkgMTYuODgzNSAxMC4yNTI5IDE2LjUxM0MxMS42NjQxIDE2LjE0MSAxMy4zOTgxIDE1LjkxOSAxNS40MTU2IDE1LjkxOVpNMjEuMTQzNyAzMi4yMThDMjEuMTA2NyAzMi40MDg1IDIxLjAyNjUgMzIuNTg5NiAyMC45MDgzIDMyLjc0OTZDMjAuNzkwMSAzMi45MDk2IDIwLjYzNjUgMzMuMDQ0OSAyMC40NTc2IDMzLjE0NjVDMjAuMDk0MiAzMy4zNjg1IDE5Ljc3MzIgMzMuNDc5NSAxOS40NDg5IDMzLjU5MkMxOC43NjQ0IDMzLjgxNCAxOC4wMzc2IDM0LjAzNzUgMTcuMjcxNyAzNC4yOTdDMTYuNTA1OCAzNC41NTY1IDE1Ljc3OSAzNC44MTc1IDE1LjA5MjkgMzUuMDAyQzE0LjI4NjIgMzUuMjYzIDEzLjUyMDMgMzUuNDg1IDEyLjgzNDIgMzUuNzQ0NUMxMi4yODQ3IDM1Ljk2NTcgMTEuNzY5NSAzNi4yNTMyIDExLjMwMjQgMzYuNTk5NUMxMC44OTgyIDM2LjkzMjUgMTAuNTM0OCAzNy4zNDIgMTAuMjEwNSAzNy44NjFDOS44ODk0OCAzOC4zODE1IDkuNzI4MTUgMzkuMDEzIDkuNzI4MTUgMzkuNzkxNUM5LjcyODE1IDQxLjM1MTUgMTAuMTMwNyA0Mi41MDIgMTAuOTM3MyA0My4yODJDMTEuNzQ0IDQ0LjAyNDUgMTMuMjM2NyA0NC40MzI1IDE1LjQxNTYgNDQuNDMyNUMxNy42MzM1IDQ0LjQzMjUgMTkuMTY3IDQ0LjAyNDUgMTkuOTczNiA0My4yNDQ1QzIwLjc4MDMgNDIuNDI4NSAyMS4xODQ0IDQxLjMxNCAyMS4xODQ0IDM5LjgyOVYzMi4yMThIMjEuMTQzN1pNOTguNTUxMSAxNS45MTlDMTAyLjQ2MiAxNS45MTkgMTA1LjMyNyAxNi42MjQgMTA3LjE4MyAxOC4wMzRDMTA4Ljk5OSAxOS40NDU1IDEwOS45MjYgMjEuMjI5IDEwOS45MjYgMjMuMzQ0VjQxLjUzNzVDMTA5LjkyNiA0Mi4yOCAxMDkuNzY1IDQzLjA5NzUgMTA5LjQ4MyA0My45NTFDMTA5LjE5OSA0NC44NDIgMTA4LjYzNSA0NS42NTggMTA3Ljc4OCA0Ni4zNjQ1QzEwNi45NCA0Ny4xMDcgMTA1Ljc3IDQ3LjY5OTUgMTA0LjMxOCA0OC4yMkMxMDIuODY4IDQ4LjcwMyAxMDAuOTMgNDguOTYyNSA5OC41OTE5IDQ4Ljk2MjVDOTYuMjEyNiA0OC45NjI1IDk0LjMxNTcgNDguNzAzIDkyLjg2MzcgNDguMjJDOTEuNDExNyA0Ny43MzcgOTAuMjQgNDcuMTA3IDg5LjM5NDIgNDYuMzY0NUM4OC41NDY4IDQ1LjYyMiA4Ny45ODMgNDQuODA0NSA4Ny42OTk0IDQzLjk0OTVDODcuNDE3NSA0My4wNiA4Ny4yNTYyIDQyLjI0MjUgODcuMjU2MiA0MS41Mzc1VjM4LjY0MjVDODcuMjU2MiAzNy4wODI1IDg3LjY5OTQgMzUuNjcxIDg4LjU0NjggMzQuNDA4Qzg5LjQzNSAzMy4xNDY1IDkwLjY0NDIgMzIuMjE4IDkyLjI1NzUgMzEuNjk3NUM5My4wNjQyIDMxLjQzOCA5My45NTIzIDMxLjE3ODUgOTUuMDAxOCAzMC44NDRDOTYuMDA4OSAzMC41MDk1IDk3LjAxNzYgMzAuMjE0IDk3Ljk4NTYgMjkuODc4Qzk4Ljk1MzYgMjkuNTgxIDk5Ljc2MTkgMjkuMjg0IDEwMC40ODcgMjkuMDYyQzEwMS4yMTIgMjguODAyNSAxMDEuNjU3IDI4LjY5IDEwMS44MTkgMjguNjE2NUMxMDEuOTggMjguNTQxNSAxMDIuMjIxIDI4LjQzMDUgMTAyLjUwMyAyOC4yODJDMTAyLjc4NyAyOC4xMzM1IDEwMy4wNjggMjcuOTExNSAxMDMuMzUgMjcuNjUyQzEwMy42MzQgMjcuMzUzNSAxMDMuODM0IDI3LjAyMDUgMTA0LjAzNiAyNi42ODZDMTA0LjIzOSAyNi4zMTQgMTA0LjMxOCAyNS44Njg1IDEwNC4zMTggMjUuMzg1NVYyNC4yMzVDMTA0LjMxOCAyMy44MjcgMTA0LjIzNyAyMy40MTkgMTA0LjAzNiAyMi45NzM1QzEwMy44NzUgMjIuNTI2NSAxMDMuNTUyIDIyLjE1NiAxMDMuMTA4IDIxLjc4NEMxMDIuNjY2IDIxLjQxMzUgMTAyLjA2IDIxLjExNjUgMTAxLjMzNSAyMC44OTNDMTAwLjYwOCAyMC42NzEgOTkuNjgwNSAyMC41NiA5OC41NTExIDIwLjU2Qzk2LjMzMTYgMjAuNTYgOTQuODQwNSAyMC45NjggOTQuMDMzOCAyMS44MjE1QzkzLjMzNzkgMjIuNTcxNCA5Mi45MjcxIDIzLjUxIDkyLjg2MzcgMjQuNDk0NUM5Mi44NjM3IDI0LjcxOCA5Mi42NjE2IDI0Ljg2NjUgOTIuNDE4OCAyNC44NjY1SDg3LjU3ODhDODcuNDYxNyAyNC44NjUzIDg3LjM0OTYgMjQuODIyIDg3LjI2NjggMjQuNzQ1N0M4Ny4xODM5IDI0LjY2OTQgODcuMTM2OCAyNC41NjYzIDg3LjEzNTYgMjQuNDU4NVYyMy4zODE1Qzg3LjEzNTYgMjIuMzQyIDg3LjMzNzYgMjEuMzc2IDg3Ljc4MDkgMjAuNDg2NUM4OC4xODM0IDE5LjU5NCA4OC44Njk1IDE4Ljc3NjUgODkuODM3NSAxOC4xMDlDOTAuNzY2NCAxNy40NCA5MS45MzQ4IDE2Ljg4MzUgOTMuMzg2OCAxNi41MTNDOTQuODQwNSAxNi4xNDEgOTYuNTMzNiAxNS45MTkgOTguNTUxMSAxNS45MTlaTTEwNC4yNzkgMzIuMjE4QzEwNC4yNDIgMzIuNDA4NSAxMDQuMTYyIDMyLjU4OTYgMTA0LjA0NCAzMi43NDk2QzEwMy45MjYgMzIuOTA5NiAxMDMuNzcyIDMzLjA0NDkgMTAzLjU5MyAzMy4xNDY1QzEwMy4yMyAzMy4zNjg1IDEwMi45MDkgMzMuNDc5NSAxMDIuNTg0IDMzLjU5MkMxMDEuOSAzMy44MTQgMTAxLjE3MyAzNC4wMzc1IDEwMC40MDYgMzQuMjk3Qzk5LjYzOTcgMzQuNTU2NSA5OC45MTQ1IDM0LjgxNzUgOTguMjI4NCAzNS4wMDJDOTcuNDIxOCAzNS4yNjMgOTYuNjU0MiAzNS40ODUgOTUuOTY5OCAzNS43NDQ1Qzk1LjQxOTYgMzUuOTY1NiA5NC45MDM5IDM2LjI1MzEgOTQuNDM2MyAzNi41OTk1Qzk0LjAzMzggMzYuOTMyNSA5My42NzA0IDM3LjM0MiA5My4zNDc3IDM3Ljg2MUM5My4wMjUgMzguMzgxNSA5Mi44NjM3IDM5LjAxMyA5Mi44NjM3IDM5Ljc5MTVDOTIuODYzNyA0MS4zNTE1IDkzLjI2NjIgNDIuNTAyIDk0LjA3MjkgNDMuMjgyQzk0Ljg3OTYgNDQuMDI0NSA5Ni4zNzIzIDQ0LjQzMjUgOTguNTUxMSA0NC40MzI1QzEwMC43NjkgNDQuNDMyNSAxMDIuMzAzIDQ0LjAyNDUgMTAzLjEwOSA0My4yNDQ1QzEwMy45MTYgNDIuNDI4NSAxMDQuMzE4IDQxLjMxNCAxMDQuMzE4IDM5LjgyOVYzMi4yMThIMTA0LjI3OVpcIiAvPlxyXG4gICAgICAgIDwvbWFzaz5cclxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMyLjAzNDUgNEgzNi44MzU0QzM3LjA3NjYgNCAzNy4yNzg3IDQuMTg2IDM3LjI3ODcgNC40MDhWNDguNjI4QzM3LjI3NzggNDguNzM2MSAzNy4yMzA5IDQ4LjgzOTYgMzcuMTQ4IDQ4LjkxNjJDMzcuMDY1MSA0OC45OTI4IDM2Ljk1MjkgNDkuMDM2MyAzNi44MzU0IDQ5LjAzNzVIMzIuMDM0NUMzMS45MTcxIDQ5LjAzNjMgMzEuODA0OCA0OC45OTI4IDMxLjcyMTkgNDguOTE2MkMzMS42MzkgNDguODM5NiAzMS41OTIxIDQ4LjczNjEgMzEuNTkxMyA0OC42MjhWNC40MDhDMzEuNTkxMyA0LjE4NiAzMS43OTE3IDQgMzIuMDM0NSA0Wk02NS4wMjk2IDQwLjM4NTVWNDEuNUM2NS4wMjk2IDQxLjk4MyA2NC45NDk4IDQyLjY1MDUgNjQuNzQ3NyA0My41MDU1QzY0LjU4NjQgNDQuMzIxNSA2NC4xMDI0IDQ1LjE3NSA2My4zMzY0IDQ1Ljk5MjVDNjIuNTcwNSA0Ni44MSA2MS40NDEyIDQ3LjU1MjUgNTkuOTA3NyA0OC4xNDY1QzU4LjM3NTkgNDguNzQwNSA1Ni4yNzY5IDQ5LjAzNzUgNTMuNTc1IDQ5LjAzNzVDNTAuODcxNCA0OS4wMzc1IDQ4Ljc3NDEgNDguNzQwNSA0Ny4yNDIyIDQ4LjE0NjVDNDUuNzEwNCA0Ny41NTI1IDQ0LjU3OTQgNDYuODQ2IDQzLjgxMzUgNDUuOTkyNUM0My4wNDc2IDQ1LjE3NSA0Mi41NjE5IDQ0LjMyMTUgNDIuNDAwNiA0My40NjhDNDIuMjM5MyA0Mi42MTMgNDIuMTE4NyA0MS45ODMgNDIuMTE4NyA0MS41VjE2LjMyN0M0Mi4xMTg3IDE2LjEwMzUgNDIuMzIwNyAxNS45MTkgNDIuNTYxOSAxNS45MTlINDcuMzYyOEM0Ny42MDQgMTUuOTE5IDQ3LjgwNjEgMTYuMTAzNSA0Ny44MDYxIDE2LjMyN1YzOS45MDRDNDcuODA2MSA0MC42ODQgNDcuOTI2NyA0MS4yMzkgNDguMDQ4OSA0MS42ODZDNDguMTY5NSA0Mi4xMzE1IDQ4LjQxMDcgNDIuNTc3IDQ4Ljc3NDEgNDIuOTQ3NUM0OS4xMzc1IDQzLjM1NyA0OS43MDMgNDMuNjkgNTAuNDY4OSA0My45NTFDNTEuMTk0MSA0NC4yMTA1IDUyLjIwMjggNDQuMzU5IDUzLjQ1NDQgNDQuMzU5QzU0Ljc0NSA0NC4zNTkgNTUuNzkyOSA0NC4yMDkgNTYuNTU4OCA0My45NTFDNTcuMzI0NyA0My42OSA1Ny44OTAyIDQzLjM1NyA1OC4yOTQ0IDQyLjk4NUM1OC42OTY5IDQyLjYxNDUgNTguOTc4OCA0Mi4yMDUgNTkuMTAxIDQxLjc1OTVDNTkuMjIxNiA0MS4zMTQgNTkuMzgzIDQwLjk0MzUgNTkuMzgzIDM5Ljg2NjVWMTYuMzI3QzU5LjM4MyAxNi4xMDM1IDU5LjU4NSAxNS45MTkgNTkuODI2MiAxNS45MTlINjQuNjI3MUM2NC44NjgzIDE1LjkxOSA2NS4wNzA0IDE2LjEwMzUgNjUuMDcwNCAxNi4zMjdWNDAuMzg3SDY1LjAyOTZWNDAuMzg1NVpNODEuMzY2NyAxNS45MTlIODQuNTkzM0M4NC44NzY5IDE1LjkxOSA4NS4wNzczIDE2LjE3ODUgODQuOTk3NSAxNi40MzhMODMuOTA4OSAyMC4yOTlDODMuODY4MiAyMC40ODUgODMuNjY2MSAyMC41OTYgODMuNTA0NyAyMC41OTZIODEuMjQ2MUM4MC4wMzUzIDIwLjU5NiA3OS4wNjczIDIwLjc0NiA3OC4zMDEzIDIxLjA0MTVDNzcuNTc2MiAyMS4zMzg1IDc2Ljk2OTkgMjEuNjczIDc2LjU2NzQgMjIuMDgxQzc2LjIwOTIgMjIuNDI3MiA3NS45NDY2IDIyLjg0NzUgNzUuODAxNSAyMy4zMDY1Qzc1LjY3OTMgMjMuNzUyIDc1LjYzODUgMjQuMTYxNSA3NS42Mzg1IDI0LjUzMlY0OC42NjU1Qzc1LjYzNzcgNDguNzczNiA3NS41OTA4IDQ4Ljg3NzEgNzUuNTA3OSA0OC45NTM3Qzc1LjQyNSA0OS4wMzAzIDc1LjMxMjcgNDkuMDczOCA3NS4xOTUzIDQ5LjA3NUg3MC4zNTUzQzcwLjIzNzggNDkuMDczOCA3MC4xMjU2IDQ5LjAzMDMgNzAuMDQyNyA0OC45NTM3QzY5Ljk1OTggNDguODc3MSA2OS45MTI4IDQ4Ljc3MzYgNjkuOTEyIDQ4LjY2NTVWMjMuNDkyNUM2OS45MTIgMjMuMDQ3IDY5Ljk5MTkgMjIuMzc4IDcwLjE5MzkgMjEuNTI0NUM3MC4zNTUzIDIwLjY2OTUgNzAuODM5MyAxOS44NTM1IDcxLjYwNTIgMTlDNzIuMzcxMSAxOC4xODI1IDczLjUwMjEgMTcuNDQgNzUuMDMzOSAxNi44NDZDNzYuNTI2NyAxNi4yMTYgNzguNjY0NyAxNS45MTkgODEuMzY2NyAxNS45MTlaTTE1LjQxNTYgMTUuOTE5QzE5LjMyNjcgMTUuOTE5IDIyLjE5MTYgMTYuNjI0IDI0LjA0NzcgMTguMDM0QzI1Ljg2MzEgMTkuNDQ1NSAyNi43OTA0IDIxLjIyOSAyNi43OTA0IDIzLjM0NFY0MS41Mzc1QzI2Ljc5MDQgNDIuMjggMjYuNjI5IDQzLjA5NzUgMjYuMzQ3MSA0My45NTFDMjYuMDY1MiA0NC44NDIgMjUuNDk5NyA0NS42NTggMjQuNjUyMyA0Ni4zNjQ1QzIzLjgwNDkgNDcuMTA3IDIyLjYzNjQgNDcuNjk5NSAyMS4xODQ0IDQ4LjIyQzE5LjczMDggNDguNzAzIDE3Ljc5NDggNDguOTYyNSAxNS40NTYzIDQ4Ljk2MjVDMTMuMDc3IDQ4Ljk2MjUgMTEuMTgwMSA0OC43MDMgOS43MjgxNSA0OC4yMkM4LjI3NjE1IDQ3LjczNyA3LjEwNDQ0IDQ3LjEwNyA2LjI1ODY3IDQ2LjM2NDVDNS40MTEyNiA0NS42MjIgNC44NDc0MSA0NC44MDQ1IDQuNTYzODUgNDMuOTQ5NUM0LjI4MTkzIDQzLjA2IDQuMTIwNTkgNDIuMjQyNSA0LjEyMDU5IDQxLjUzNzVWMzguNjQyNUM0LjEyMDU5IDM3LjA4MjUgNC41NjU0OCAzNS42NzEgNS40MTEyNiAzNC40MDhDNi4yOTk0MSAzMy4xNDY1IDcuNTA4NTkgMzIuMjE4IDkuMTIzNTYgMzEuNjk3NUM5LjkzMDIyIDMxLjQzOCAxMC44MTg0IDMxLjE3ODUgMTEuODY2MiAzMC44NDRDMTIuODc1IDMwLjUwOTUgMTMuODgyMSAzMC4yMTQgMTQuODUwMSAyOS44NzhDMTUuODE4MSAyOS41ODEgMTYuNjI2NCAyOS4yODQgMTcuMzUxNiAyOS4wNjJDMTguMDc4NCAyOC44MDI1IDE4LjUyMTYgMjguNjkgMTguNjgzIDI4LjYxNjVDMTguODQ0MyAyOC41NDE1IDE5LjA4NTUgMjguNDMwNSAxOS4zNjc0IDI4LjI4MkMxOS42NTEgMjguMTMzNSAxOS45MzI5IDI3LjkxMTUgMjAuMjE0OCAyNy42NTJDMjAuNDk4NCAyNy4zNTM1IDIwLjcwMDQgMjcuMDIwNSAyMC45MDA5IDI2LjY4NkMyMS4xMDMgMjYuMzE0IDIxLjE4NDQgMjUuODY4NSAyMS4xODQ0IDI1LjM4NTVWMjQuMjM1QzIxLjE4NDQgMjMuODI3IDIxLjEwMyAyMy40MTkgMjAuOTAwOSAyMi45NzM1QzIwLjczOTYgMjIuNTI2NSAyMC40MTY5IDIyLjE1NiAxOS45NzM2IDIxLjc4NEMxOS41MzA0IDIxLjQxMzUgMTguOTI0MSAyMS4xMTY1IDE4LjE5NzMgMjAuODkzQzE3LjQ3MjEgMjAuNjcxIDE2LjU0NDkgMjAuNTYgMTUuNDE1NiAyMC41NkMxMy4xOTc2IDIwLjU2IDExLjcwNDkgMjAuOTY4IDEwLjg5ODIgMjEuODIxNUMxMC4yMDI0IDIyLjU3MTQgOS43OTE1NSAyMy41MSA5LjcyODE1IDI0LjQ5NDVDOS43MjgxNSAyNC43MTggOS41MjYwNyAyNC44NjY1IDkuMjg0ODkgMjQuODY2NUg0LjQ0NDg5QzQuMzI3NDQgMjQuODY1NyA0LjIxNTAyIDI0LjgyMjUgNC4xMzE4MiAyNC43NDYyQzQuMDQ4NjEgMjQuNjY5OSA0LjAwMTI4IDI0LjU2NjYgNCAyNC40NTg1VjIzLjM4MTVDNCAyMi4zNDIgNC4yMDIwNyAyMS4zNzYgNC42NDUzMyAyMC40ODY1QzUuMDQ5NDggMTkuNTk0IDUuNzMzOTMgMTguNzc2NSA2LjcwMTkzIDE4LjEwOUM3LjYzMDgyIDE3LjQ0IDguODAwODkgMTYuODgzNSAxMC4yNTI5IDE2LjUxM0MxMS42NjQxIDE2LjE0MSAxMy4zOTgxIDE1LjkxOSAxNS40MTU2IDE1LjkxOVpNMjEuMTQzNyAzMi4yMThDMjEuMTA2NyAzMi40MDg1IDIxLjAyNjUgMzIuNTg5NiAyMC45MDgzIDMyLjc0OTZDMjAuNzkwMSAzMi45MDk2IDIwLjYzNjUgMzMuMDQ0OSAyMC40NTc2IDMzLjE0NjVDMjAuMDk0MiAzMy4zNjg1IDE5Ljc3MzIgMzMuNDc5NSAxOS40NDg5IDMzLjU5MkMxOC43NjQ0IDMzLjgxNCAxOC4wMzc2IDM0LjAzNzUgMTcuMjcxNyAzNC4yOTdDMTYuNTA1OCAzNC41NTY1IDE1Ljc3OSAzNC44MTc1IDE1LjA5MjkgMzUuMDAyQzE0LjI4NjIgMzUuMjYzIDEzLjUyMDMgMzUuNDg1IDEyLjgzNDIgMzUuNzQ0NUMxMi4yODQ3IDM1Ljk2NTcgMTEuNzY5NSAzNi4yNTMyIDExLjMwMjQgMzYuNTk5NUMxMC44OTgyIDM2LjkzMjUgMTAuNTM0OCAzNy4zNDIgMTAuMjEwNSAzNy44NjFDOS44ODk0OCAzOC4zODE1IDkuNzI4MTUgMzkuMDEzIDkuNzI4MTUgMzkuNzkxNUM5LjcyODE1IDQxLjM1MTUgMTAuMTMwNyA0Mi41MDIgMTAuOTM3MyA0My4yODJDMTEuNzQ0IDQ0LjAyNDUgMTMuMjM2NyA0NC40MzI1IDE1LjQxNTYgNDQuNDMyNUMxNy42MzM1IDQ0LjQzMjUgMTkuMTY3IDQ0LjAyNDUgMTkuOTczNiA0My4yNDQ1QzIwLjc4MDMgNDIuNDI4NSAyMS4xODQ0IDQxLjMxNCAyMS4xODQ0IDM5LjgyOVYzMi4yMThIMjEuMTQzN1pNOTguNTUxMSAxNS45MTlDMTAyLjQ2MiAxNS45MTkgMTA1LjMyNyAxNi42MjQgMTA3LjE4MyAxOC4wMzRDMTA4Ljk5OSAxOS40NDU1IDEwOS45MjYgMjEuMjI5IDEwOS45MjYgMjMuMzQ0VjQxLjUzNzVDMTA5LjkyNiA0Mi4yOCAxMDkuNzY1IDQzLjA5NzUgMTA5LjQ4MyA0My45NTFDMTA5LjE5OSA0NC44NDIgMTA4LjYzNSA0NS42NTggMTA3Ljc4OCA0Ni4zNjQ1QzEwNi45NCA0Ny4xMDcgMTA1Ljc3IDQ3LjY5OTUgMTA0LjMxOCA0OC4yMkMxMDIuODY4IDQ4LjcwMyAxMDAuOTMgNDguOTYyNSA5OC41OTE5IDQ4Ljk2MjVDOTYuMjEyNiA0OC45NjI1IDk0LjMxNTcgNDguNzAzIDkyLjg2MzcgNDguMjJDOTEuNDExNyA0Ny43MzcgOTAuMjQgNDcuMTA3IDg5LjM5NDIgNDYuMzY0NUM4OC41NDY4IDQ1LjYyMiA4Ny45ODMgNDQuODA0NSA4Ny42OTk0IDQzLjk0OTVDODcuNDE3NSA0My4wNiA4Ny4yNTYyIDQyLjI0MjUgODcuMjU2MiA0MS41Mzc1VjM4LjY0MjVDODcuMjU2MiAzNy4wODI1IDg3LjY5OTQgMzUuNjcxIDg4LjU0NjggMzQuNDA4Qzg5LjQzNSAzMy4xNDY1IDkwLjY0NDIgMzIuMjE4IDkyLjI1NzUgMzEuNjk3NUM5My4wNjQyIDMxLjQzOCA5My45NTIzIDMxLjE3ODUgOTUuMDAxOCAzMC44NDRDOTYuMDA4OSAzMC41MDk1IDk3LjAxNzYgMzAuMjE0IDk3Ljk4NTYgMjkuODc4Qzk4Ljk1MzYgMjkuNTgxIDk5Ljc2MTkgMjkuMjg0IDEwMC40ODcgMjkuMDYyQzEwMS4yMTIgMjguODAyNSAxMDEuNjU3IDI4LjY5IDEwMS44MTkgMjguNjE2NUMxMDEuOTggMjguNTQxNSAxMDIuMjIxIDI4LjQzMDUgMTAyLjUwMyAyOC4yODJDMTAyLjc4NyAyOC4xMzM1IDEwMy4wNjggMjcuOTExNSAxMDMuMzUgMjcuNjUyQzEwMy42MzQgMjcuMzUzNSAxMDMuODM0IDI3LjAyMDUgMTA0LjAzNiAyNi42ODZDMTA0LjIzOSAyNi4zMTQgMTA0LjMxOCAyNS44Njg1IDEwNC4zMTggMjUuMzg1NVYyNC4yMzVDMTA0LjMxOCAyMy44MjcgMTA0LjIzNyAyMy40MTkgMTA0LjAzNiAyMi45NzM1QzEwMy44NzUgMjIuNTI2NSAxMDMuNTUyIDIyLjE1NiAxMDMuMTA4IDIxLjc4NEMxMDIuNjY2IDIxLjQxMzUgMTAyLjA2IDIxLjExNjUgMTAxLjMzNSAyMC44OTNDMTAwLjYwOCAyMC42NzEgOTkuNjgwNSAyMC41NiA5OC41NTExIDIwLjU2Qzk2LjMzMTYgMjAuNTYgOTQuODQwNSAyMC45NjggOTQuMDMzOCAyMS44MjE1QzkzLjMzNzkgMjIuNTcxNCA5Mi45MjcxIDIzLjUxIDkyLjg2MzcgMjQuNDk0NUM5Mi44NjM3IDI0LjcxOCA5Mi42NjE2IDI0Ljg2NjUgOTIuNDE4OCAyNC44NjY1SDg3LjU3ODhDODcuNDYxNyAyNC44NjUzIDg3LjM0OTYgMjQuODIyIDg3LjI2NjggMjQuNzQ1N0M4Ny4xODM5IDI0LjY2OTQgODcuMTM2OCAyNC41NjYzIDg3LjEzNTYgMjQuNDU4NVYyMy4zODE1Qzg3LjEzNTYgMjIuMzQyIDg3LjMzNzYgMjEuMzc2IDg3Ljc4MDkgMjAuNDg2NUM4OC4xODM0IDE5LjU5NCA4OC44Njk1IDE4Ljc3NjUgODkuODM3NSAxOC4xMDlDOTAuNzY2NCAxNy40NCA5MS45MzQ4IDE2Ljg4MzUgOTMuMzg2OCAxNi41MTNDOTQuODQwNSAxNi4xNDEgOTYuNTMzNiAxNS45MTkgOTguNTUxMSAxNS45MTlaTTEwNC4yNzkgMzIuMjE4QzEwNC4yNDIgMzIuNDA4NSAxMDQuMTYyIDMyLjU4OTYgMTA0LjA0NCAzMi43NDk2QzEwMy45MjYgMzIuOTA5NiAxMDMuNzcyIDMzLjA0NDkgMTAzLjU5MyAzMy4xNDY1QzEwMy4yMyAzMy4zNjg1IDEwMi45MDkgMzMuNDc5NSAxMDIuNTg0IDMzLjU5MkMxMDEuOSAzMy44MTQgMTAxLjE3MyAzNC4wMzc1IDEwMC40MDYgMzQuMjk3Qzk5LjYzOTcgMzQuNTU2NSA5OC45MTQ1IDM0LjgxNzUgOTguMjI4NCAzNS4wMDJDOTcuNDIxOCAzNS4yNjMgOTYuNjU0MiAzNS40ODUgOTUuOTY5OCAzNS43NDQ1Qzk1LjQxOTYgMzUuOTY1NiA5NC45MDM5IDM2LjI1MzEgOTQuNDM2MyAzNi41OTk1Qzk0LjAzMzggMzYuOTMyNSA5My42NzA0IDM3LjM0MiA5My4zNDc3IDM3Ljg2MUM5My4wMjUgMzguMzgxNSA5Mi44NjM3IDM5LjAxMyA5Mi44NjM3IDM5Ljc5MTVDOTIuODYzNyA0MS4zNTE1IDkzLjI2NjIgNDIuNTAyIDk0LjA3MjkgNDMuMjgyQzk0Ljg3OTYgNDQuMDI0NSA5Ni4zNzIzIDQ0LjQzMjUgOTguNTUxMSA0NC40MzI1QzEwMC43NjkgNDQuNDMyNSAxMDIuMzAzIDQ0LjAyNDUgMTAzLjEwOSA0My4yNDQ1QzEwMy45MTYgNDIuNDI4NSAxMDQuMzE4IDQxLjMxNCAxMDQuMzE4IDM5LjgyOVYzMi4yMThIMTA0LjI3OVpcIiBmaWxsPVwid2hpdGVcIiAvPlxyXG4gICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMzIuMDM0NSA0SDM2LjgzNTRDMzcuMDc2NiA0IDM3LjI3ODcgNC4xODYgMzcuMjc4NyA0LjQwOFY0OC42MjhDMzcuMjc3OCA0OC43MzYxIDM3LjIzMDkgNDguODM5NiAzNy4xNDggNDguOTE2MkMzNy4wNjUxIDQ4Ljk5MjggMzYuOTUyOSA0OS4wMzYzIDM2LjgzNTQgNDkuMDM3NUgzMi4wMzQ1QzMxLjkxNzEgNDkuMDM2MyAzMS44MDQ4IDQ4Ljk5MjggMzEuNzIxOSA0OC45MTYyQzMxLjYzOSA0OC44Mzk2IDMxLjU5MjEgNDguNzM2MSAzMS41OTEzIDQ4LjYyOFY0LjQwOEMzMS41OTEzIDQuMTg2IDMxLjc5MTcgNCAzMi4wMzQ1IDRaTTY1LjAyOTYgNDAuMzg1NVY0MS41QzY1LjAyOTYgNDEuOTgzIDY0Ljk0OTggNDIuNjUwNSA2NC43NDc3IDQzLjUwNTVDNjQuNTg2NCA0NC4zMjE1IDY0LjEwMjQgNDUuMTc1IDYzLjMzNjQgNDUuOTkyNUM2Mi41NzA1IDQ2LjgxIDYxLjQ0MTIgNDcuNTUyNSA1OS45MDc3IDQ4LjE0NjVDNTguMzc1OSA0OC43NDA1IDU2LjI3NjkgNDkuMDM3NSA1My41NzUgNDkuMDM3NUM1MC44NzE0IDQ5LjAzNzUgNDguNzc0MSA0OC43NDA1IDQ3LjI0MjIgNDguMTQ2NUM0NS43MTA0IDQ3LjU1MjUgNDQuNTc5NCA0Ni44NDYgNDMuODEzNSA0NS45OTI1QzQzLjA0NzYgNDUuMTc1IDQyLjU2MTkgNDQuMzIxNSA0Mi40MDA2IDQzLjQ2OEM0Mi4yMzkzIDQyLjYxMyA0Mi4xMTg3IDQxLjk4MyA0Mi4xMTg3IDQxLjVWMTYuMzI3QzQyLjExODcgMTYuMTAzNSA0Mi4zMjA3IDE1LjkxOSA0Mi41NjE5IDE1LjkxOUg0Ny4zNjI4QzQ3LjYwNCAxNS45MTkgNDcuODA2MSAxNi4xMDM1IDQ3LjgwNjEgMTYuMzI3VjM5LjkwNEM0Ny44MDYxIDQwLjY4NCA0Ny45MjY3IDQxLjIzOSA0OC4wNDg5IDQxLjY4NkM0OC4xNjk1IDQyLjEzMTUgNDguNDEwNyA0Mi41NzcgNDguNzc0MSA0Mi45NDc1QzQ5LjEzNzUgNDMuMzU3IDQ5LjcwMyA0My42OSA1MC40Njg5IDQzLjk1MUM1MS4xOTQxIDQ0LjIxMDUgNTIuMjAyOCA0NC4zNTkgNTMuNDU0NCA0NC4zNTlDNTQuNzQ1IDQ0LjM1OSA1NS43OTI5IDQ0LjIwOSA1Ni41NTg4IDQzLjk1MUM1Ny4zMjQ3IDQzLjY5IDU3Ljg5MDIgNDMuMzU3IDU4LjI5NDQgNDIuOTg1QzU4LjY5NjkgNDIuNjE0NSA1OC45Nzg4IDQyLjIwNSA1OS4xMDEgNDEuNzU5NUM1OS4yMjE2IDQxLjMxNCA1OS4zODMgNDAuOTQzNSA1OS4zODMgMzkuODY2NVYxNi4zMjdDNTkuMzgzIDE2LjEwMzUgNTkuNTg1IDE1LjkxOSA1OS44MjYyIDE1LjkxOUg2NC42MjcxQzY0Ljg2ODMgMTUuOTE5IDY1LjA3MDQgMTYuMTAzNSA2NS4wNzA0IDE2LjMyN1Y0MC4zODdINjUuMDI5NlY0MC4zODU1Wk04MS4zNjY3IDE1LjkxOUg4NC41OTMzQzg0Ljg3NjkgMTUuOTE5IDg1LjA3NzMgMTYuMTc4NSA4NC45OTc1IDE2LjQzOEw4My45MDg5IDIwLjI5OUM4My44NjgyIDIwLjQ4NSA4My42NjYxIDIwLjU5NiA4My41MDQ3IDIwLjU5Nkg4MS4yNDYxQzgwLjAzNTMgMjAuNTk2IDc5LjA2NzMgMjAuNzQ2IDc4LjMwMTMgMjEuMDQxNUM3Ny41NzYyIDIxLjMzODUgNzYuOTY5OSAyMS42NzMgNzYuNTY3NCAyMi4wODFDNzYuMjA5MiAyMi40MjcyIDc1Ljk0NjYgMjIuODQ3NSA3NS44MDE1IDIzLjMwNjVDNzUuNjc5MyAyMy43NTIgNzUuNjM4NSAyNC4xNjE1IDc1LjYzODUgMjQuNTMyVjQ4LjY2NTVDNzUuNjM3NyA0OC43NzM2IDc1LjU5MDggNDguODc3MSA3NS41MDc5IDQ4Ljk1MzdDNzUuNDI1IDQ5LjAzMDMgNzUuMzEyNyA0OS4wNzM4IDc1LjE5NTMgNDkuMDc1SDcwLjM1NTNDNzAuMjM3OCA0OS4wNzM4IDcwLjEyNTYgNDkuMDMwMyA3MC4wNDI3IDQ4Ljk1MzdDNjkuOTU5OCA0OC44NzcxIDY5LjkxMjggNDguNzczNiA2OS45MTIgNDguNjY1NVYyMy40OTI1QzY5LjkxMiAyMy4wNDcgNjkuOTkxOSAyMi4zNzggNzAuMTkzOSAyMS41MjQ1QzcwLjM1NTMgMjAuNjY5NSA3MC44MzkzIDE5Ljg1MzUgNzEuNjA1MiAxOUM3Mi4zNzExIDE4LjE4MjUgNzMuNTAyMSAxNy40NCA3NS4wMzM5IDE2Ljg0NkM3Ni41MjY3IDE2LjIxNiA3OC42NjQ3IDE1LjkxOSA4MS4zNjY3IDE1LjkxOVpNMTUuNDE1NiAxNS45MTlDMTkuMzI2NyAxNS45MTkgMjIuMTkxNiAxNi42MjQgMjQuMDQ3NyAxOC4wMzRDMjUuODYzMSAxOS40NDU1IDI2Ljc5MDQgMjEuMjI5IDI2Ljc5MDQgMjMuMzQ0VjQxLjUzNzVDMjYuNzkwNCA0Mi4yOCAyNi42MjkgNDMuMDk3NSAyNi4zNDcxIDQzLjk1MUMyNi4wNjUyIDQ0Ljg0MiAyNS40OTk3IDQ1LjY1OCAyNC42NTIzIDQ2LjM2NDVDMjMuODA0OSA0Ny4xMDcgMjIuNjM2NCA0Ny42OTk1IDIxLjE4NDQgNDguMjJDMTkuNzMwOCA0OC43MDMgMTcuNzk0OCA0OC45NjI1IDE1LjQ1NjMgNDguOTYyNUMxMy4wNzcgNDguOTYyNSAxMS4xODAxIDQ4LjcwMyA5LjcyODE1IDQ4LjIyQzguMjc2MTUgNDcuNzM3IDcuMTA0NDQgNDcuMTA3IDYuMjU4NjcgNDYuMzY0NUM1LjQxMTI2IDQ1LjYyMiA0Ljg0NzQxIDQ0LjgwNDUgNC41NjM4NSA0My45NDk1QzQuMjgxOTMgNDMuMDYgNC4xMjA1OSA0Mi4yNDI1IDQuMTIwNTkgNDEuNTM3NVYzOC42NDI1QzQuMTIwNTkgMzcuMDgyNSA0LjU2NTQ4IDM1LjY3MSA1LjQxMTI2IDM0LjQwOEM2LjI5OTQxIDMzLjE0NjUgNy41MDg1OSAzMi4yMTggOS4xMjM1NiAzMS42OTc1QzkuOTMwMjIgMzEuNDM4IDEwLjgxODQgMzEuMTc4NSAxMS44NjYyIDMwLjg0NEMxMi44NzUgMzAuNTA5NSAxMy44ODIxIDMwLjIxNCAxNC44NTAxIDI5Ljg3OEMxNS44MTgxIDI5LjU4MSAxNi42MjY0IDI5LjI4NCAxNy4zNTE2IDI5LjA2MkMxOC4wNzg0IDI4LjgwMjUgMTguNTIxNiAyOC42OSAxOC42ODMgMjguNjE2NUMxOC44NDQzIDI4LjU0MTUgMTkuMDg1NSAyOC40MzA1IDE5LjM2NzQgMjguMjgyQzE5LjY1MSAyOC4xMzM1IDE5LjkzMjkgMjcuOTExNSAyMC4yMTQ4IDI3LjY1MkMyMC40OTg0IDI3LjM1MzUgMjAuNzAwNCAyNy4wMjA1IDIwLjkwMDkgMjYuNjg2QzIxLjEwMyAyNi4zMTQgMjEuMTg0NCAyNS44Njg1IDIxLjE4NDQgMjUuMzg1NVYyNC4yMzVDMjEuMTg0NCAyMy44MjcgMjEuMTAzIDIzLjQxOSAyMC45MDA5IDIyLjk3MzVDMjAuNzM5NiAyMi41MjY1IDIwLjQxNjkgMjIuMTU2IDE5Ljk3MzYgMjEuNzg0QzE5LjUzMDQgMjEuNDEzNSAxOC45MjQxIDIxLjExNjUgMTguMTk3MyAyMC44OTNDMTcuNDcyMSAyMC42NzEgMTYuNTQ0OSAyMC41NiAxNS40MTU2IDIwLjU2QzEzLjE5NzYgMjAuNTYgMTEuNzA0OSAyMC45NjggMTAuODk4MiAyMS44MjE1QzEwLjIwMjQgMjIuNTcxNCA5Ljc5MTU1IDIzLjUxIDkuNzI4MTUgMjQuNDk0NUM5LjcyODE1IDI0LjcxOCA5LjUyNjA3IDI0Ljg2NjUgOS4yODQ4OSAyNC44NjY1SDQuNDQ0ODlDNC4zMjc0NCAyNC44NjU3IDQuMjE1MDIgMjQuODIyNSA0LjEzMTgyIDI0Ljc0NjJDNC4wNDg2MSAyNC42Njk5IDQuMDAxMjggMjQuNTY2NiA0IDI0LjQ1ODVWMjMuMzgxNUM0IDIyLjM0MiA0LjIwMjA3IDIxLjM3NiA0LjY0NTMzIDIwLjQ4NjVDNS4wNDk0OCAxOS41OTQgNS43MzM5MyAxOC43NzY1IDYuNzAxOTMgMTguMTA5QzcuNjMwODIgMTcuNDQgOC44MDA4OSAxNi44ODM1IDEwLjI1MjkgMTYuNTEzQzExLjY2NDEgMTYuMTQxIDEzLjM5ODEgMTUuOTE5IDE1LjQxNTYgMTUuOTE5Wk0yMS4xNDM3IDMyLjIxOEMyMS4xMDY3IDMyLjQwODUgMjEuMDI2NSAzMi41ODk2IDIwLjkwODMgMzIuNzQ5NkMyMC43OTAxIDMyLjkwOTYgMjAuNjM2NSAzMy4wNDQ5IDIwLjQ1NzYgMzMuMTQ2NUMyMC4wOTQyIDMzLjM2ODUgMTkuNzczMiAzMy40Nzk1IDE5LjQ0ODkgMzMuNTkyQzE4Ljc2NDQgMzMuODE0IDE4LjAzNzYgMzQuMDM3NSAxNy4yNzE3IDM0LjI5N0MxNi41MDU4IDM0LjU1NjUgMTUuNzc5IDM0LjgxNzUgMTUuMDkyOSAzNS4wMDJDMTQuMjg2MiAzNS4yNjMgMTMuNTIwMyAzNS40ODUgMTIuODM0MiAzNS43NDQ1QzEyLjI4NDcgMzUuOTY1NyAxMS43Njk1IDM2LjI1MzIgMTEuMzAyNCAzNi41OTk1QzEwLjg5ODIgMzYuOTMyNSAxMC41MzQ4IDM3LjM0MiAxMC4yMTA1IDM3Ljg2MUM5Ljg4OTQ4IDM4LjM4MTUgOS43MjgxNSAzOS4wMTMgOS43MjgxNSAzOS43OTE1QzkuNzI4MTUgNDEuMzUxNSAxMC4xMzA3IDQyLjUwMiAxMC45MzczIDQzLjI4MkMxMS43NDQgNDQuMDI0NSAxMy4yMzY3IDQ0LjQzMjUgMTUuNDE1NiA0NC40MzI1QzE3LjYzMzUgNDQuNDMyNSAxOS4xNjcgNDQuMDI0NSAxOS45NzM2IDQzLjI0NDVDMjAuNzgwMyA0Mi40Mjg1IDIxLjE4NDQgNDEuMzE0IDIxLjE4NDQgMzkuODI5VjMyLjIxOEgyMS4xNDM3Wk05OC41NTExIDE1LjkxOUMxMDIuNDYyIDE1LjkxOSAxMDUuMzI3IDE2LjYyNCAxMDcuMTgzIDE4LjAzNEMxMDguOTk5IDE5LjQ0NTUgMTA5LjkyNiAyMS4yMjkgMTA5LjkyNiAyMy4zNDRWNDEuNTM3NUMxMDkuOTI2IDQyLjI4IDEwOS43NjUgNDMuMDk3NSAxMDkuNDgzIDQzLjk1MUMxMDkuMTk5IDQ0Ljg0MiAxMDguNjM1IDQ1LjY1OCAxMDcuNzg4IDQ2LjM2NDVDMTA2Ljk0IDQ3LjEwNyAxMDUuNzcgNDcuNjk5NSAxMDQuMzE4IDQ4LjIyQzEwMi44NjggNDguNzAzIDEwMC45MyA0OC45NjI1IDk4LjU5MTkgNDguOTYyNUM5Ni4yMTI2IDQ4Ljk2MjUgOTQuMzE1NyA0OC43MDMgOTIuODYzNyA0OC4yMkM5MS40MTE3IDQ3LjczNyA5MC4yNCA0Ny4xMDcgODkuMzk0MiA0Ni4zNjQ1Qzg4LjU0NjggNDUuNjIyIDg3Ljk4MyA0NC44MDQ1IDg3LjY5OTQgNDMuOTQ5NUM4Ny40MTc1IDQzLjA2IDg3LjI1NjIgNDIuMjQyNSA4Ny4yNTYyIDQxLjUzNzVWMzguNjQyNUM4Ny4yNTYyIDM3LjA4MjUgODcuNjk5NCAzNS42NzEgODguNTQ2OCAzNC40MDhDODkuNDM1IDMzLjE0NjUgOTAuNjQ0MiAzMi4yMTggOTIuMjU3NSAzMS42OTc1QzkzLjA2NDIgMzEuNDM4IDkzLjk1MjMgMzEuMTc4NSA5NS4wMDE4IDMwLjg0NEM5Ni4wMDg5IDMwLjUwOTUgOTcuMDE3NiAzMC4yMTQgOTcuOTg1NiAyOS44NzhDOTguOTUzNiAyOS41ODEgOTkuNzYxOSAyOS4yODQgMTAwLjQ4NyAyOS4wNjJDMTAxLjIxMiAyOC44MDI1IDEwMS42NTcgMjguNjkgMTAxLjgxOSAyOC42MTY1QzEwMS45OCAyOC41NDE1IDEwMi4yMjEgMjguNDMwNSAxMDIuNTAzIDI4LjI4MkMxMDIuNzg3IDI4LjEzMzUgMTAzLjA2OCAyNy45MTE1IDEwMy4zNSAyNy42NTJDMTAzLjYzNCAyNy4zNTM1IDEwMy44MzQgMjcuMDIwNSAxMDQuMDM2IDI2LjY4NkMxMDQuMjM5IDI2LjMxNCAxMDQuMzE4IDI1Ljg2ODUgMTA0LjMxOCAyNS4zODU1VjI0LjIzNUMxMDQuMzE4IDIzLjgyNyAxMDQuMjM3IDIzLjQxOSAxMDQuMDM2IDIyLjk3MzVDMTAzLjg3NSAyMi41MjY1IDEwMy41NTIgMjIuMTU2IDEwMy4xMDggMjEuNzg0QzEwMi42NjYgMjEuNDEzNSAxMDIuMDYgMjEuMTE2NSAxMDEuMzM1IDIwLjg5M0MxMDAuNjA4IDIwLjY3MSA5OS42ODA1IDIwLjU2IDk4LjU1MTEgMjAuNTZDOTYuMzMxNiAyMC41NiA5NC44NDA1IDIwLjk2OCA5NC4wMzM4IDIxLjgyMTVDOTMuMzM3OSAyMi41NzE0IDkyLjkyNzEgMjMuNTEgOTIuODYzNyAyNC40OTQ1QzkyLjg2MzcgMjQuNzE4IDkyLjY2MTYgMjQuODY2NSA5Mi40MTg4IDI0Ljg2NjVIODcuNTc4OEM4Ny40NjE3IDI0Ljg2NTMgODcuMzQ5NiAyNC44MjIgODcuMjY2OCAyNC43NDU3Qzg3LjE4MzkgMjQuNjY5NCA4Ny4xMzY4IDI0LjU2NjMgODcuMTM1NiAyNC40NTg1VjIzLjM4MTVDODcuMTM1NiAyMi4zNDIgODcuMzM3NiAyMS4zNzYgODcuNzgwOSAyMC40ODY1Qzg4LjE4MzQgMTkuNTk0IDg4Ljg2OTUgMTguNzc2NSA4OS44Mzc1IDE4LjEwOUM5MC43NjY0IDE3LjQ0IDkxLjkzNDggMTYuODgzNSA5My4zODY4IDE2LjUxM0M5NC44NDA1IDE2LjE0MSA5Ni41MzM2IDE1LjkxOSA5OC41NTExIDE1LjkxOVpNMTA0LjI3OSAzMi4yMThDMTA0LjI0MiAzMi40MDg1IDEwNC4xNjIgMzIuNTg5NiAxMDQuMDQ0IDMyLjc0OTZDMTAzLjkyNiAzMi45MDk2IDEwMy43NzIgMzMuMDQ0OSAxMDMuNTkzIDMzLjE0NjVDMTAzLjIzIDMzLjM2ODUgMTAyLjkwOSAzMy40Nzk1IDEwMi41ODQgMzMuNTkyQzEwMS45IDMzLjgxNCAxMDEuMTczIDM0LjAzNzUgMTAwLjQwNiAzNC4yOTdDOTkuNjM5NyAzNC41NTY1IDk4LjkxNDUgMzQuODE3NSA5OC4yMjg0IDM1LjAwMkM5Ny40MjE4IDM1LjI2MyA5Ni42NTQyIDM1LjQ4NSA5NS45Njk4IDM1Ljc0NDVDOTUuNDE5NiAzNS45NjU2IDk0LjkwMzkgMzYuMjUzMSA5NC40MzYzIDM2LjU5OTVDOTQuMDMzOCAzNi45MzI1IDkzLjY3MDQgMzcuMzQyIDkzLjM0NzcgMzcuODYxQzkzLjAyNSAzOC4zODE1IDkyLjg2MzcgMzkuMDEzIDkyLjg2MzcgMzkuNzkxNUM5Mi44NjM3IDQxLjM1MTUgOTMuMjY2MiA0Mi41MDIgOTQuMDcyOSA0My4yODJDOTQuODc5NiA0NC4wMjQ1IDk2LjM3MjMgNDQuNDMyNSA5OC41NTExIDQ0LjQzMjVDMTAwLjc2OSA0NC40MzI1IDEwMi4zMDMgNDQuMDI0NSAxMDMuMTA5IDQzLjI0NDVDMTAzLjkxNiA0Mi40Mjg1IDEwNC4zMTggNDEuMzE0IDEwNC4zMTggMzkuODI5VjMyLjIxOEgxMDQuMjc5WlwiIHN0cm9rZT1cIiMyNTJCNTFcIiBzdHJva2VXaWR0aD1cIjRcIiBtYXNrPVwidXJsKCNwYXRoLTEtb3V0c2lkZS0xKVwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk04Ni44NDY5IDYyLjM2OEM4NC44OTE3IDYzLjAxNDIgODMuMjExIDYyLjkzOCA4MS44MDUgNjIuMTM5M0M4MC4zOTg5IDYxLjM0MDYgNzkuMzA5NSA1OS45NTA2IDc4LjUzNjUgNTcuOTY5NEM3Ny44OTM0IDU2LjMyMDkgNzcuNjg5NSA1NC42ODA5IDc3LjkyNDggNTMuMDQ5M0M3OC4xNjAxIDUxLjQxNzggNzguODExNSA0OS45NzMyIDc5Ljg3OSA0OC43MTU0QzgwLjk0MDYgNDcuNDQyNSA4Mi4zMzQgNDYuNTIxIDg0LjA1OTIgNDUuOTUwN0M4NS43MzUxIDQ1LjM5NjggODcuMjgwNyA0NS40ODM1IDg4LjY5NiA0Ni4yMTA5QzkwLjEyMTkgNDYuOTE3NyA5MS4yNDE5IDQ4LjMxNDYgOTIuMDU2MSA1MC40MDE3QzkyLjQ5MjggNTEuNTIwOSA5Mi43MDk5IDUyLjY5NTUgOTIuNzA3NSA1My45MjU2QzkyLjcwNTEgNTUuMTU1OCA5Mi40Nzc4IDU2LjMzMjIgOTIuMDI1NCA1Ny40NTQ5QzkzLjg5NCA1OC4yMDMyIDk0Ljg1NzkgNTguNjUyOSA5NC45MTY5IDU4LjgwNDJDOTUuMDcwMyA1OS4xOTc0IDk1LjA1OTggNTkuNTUwOSA5NC44ODU0IDU5Ljg2NDZDOTQuNzMzMyA2MC4xODgxIDk0LjQyNzMgNjAuNDI1OCA5My45NjcyIDYwLjU3NzlDOTMuNjIyMiA2MC42OTIgOTIuNTMwMSA2MC40MTI3IDkwLjY5MDkgNTkuNzRDODkuNjg5MiA2MC45NzYgODguNDA3OSA2MS44NTIgODYuODQ2OSA2Mi4zNjhaTTg2LjM5NTQgNjAuMjEyMkM4Ny4xMDIgNTkuOTc4NyA4Ny43MTA1IDU5LjQ3MDIgODguMjIxIDU4LjY4NjhDODcuNDk5MyA1OC4zMTA3IDg2Ljc2NTEgNTcuODc4OSA4Ni4wMTg0IDU3LjM5MTVDODUuMjg4MiA1Ni44OTg3IDg0Ljg4NzcgNTYuNTYxNiA4NC44MTY5IDU2LjM4MDFDODQuNjU3NiA1NS45NzE3IDg0LjYzMDYgNTUuNjY0OCA4NC43MzU5IDU1LjQ1OTJDODQuODUxOCA1NS4yMzMxIDg1LjEwNjggNTUuMDU0OSA4NS41MDEyIDU0LjkyNDZDODUuNTUwNSA1NC45MDgzIDg1Ljk5MzUgNTUuMDY5MiA4Ni44MzAzIDU1LjQwNzNDODcuMTY1MyA1NS41NTI3IDg3LjkyMzkgNTUuODU2OCA4OS4xMDYyIDU2LjMxOTdDODkuMjYxOSA1NS40ODI4IDg5LjI5MjYgNTQuNjEwNSA4OS4xOTgxIDUzLjcwMjZDODkuMTE0MiA1Mi43NzQyIDg4Ljg5NTIgNTEuODU2MyA4OC41NDExIDUwLjk0ODlDODguMTI4MSA0OS44OTAyIDg3LjU4NzEgNDkuMTIxNSA4Ni45MTc5IDQ4LjY0MjZDODYuMjY1MyA0OC4xNTgzIDg1LjQ3ODkgNDguMDY4MiA4NC41NTg3IDQ4LjM3MjNDODMuNTA3MiA0OC43MTk5IDgyLjcxMjIgNDkuMzkyNCA4Mi4xNzM5IDUwLjM4OTlDODEuNjM1NiA1MS4zODc0IDgxLjM1NzYgNTIuNTI5MyA4MS4zNDAxIDUzLjgxNTdDODEuMzE2NyA1NS4wODY5IDgxLjUyOTIgNTYuMjk3MiA4MS45Nzc2IDU3LjQ0NjZDODIuMjQ5IDU4LjE0MjMgODIuNjM2NSA1OC43MzE0IDgzLjE0IDU5LjIxMzdDODMuNjU0MSA1OS42NzU2IDg0LjIwNiA1OS45OTY4IDg0Ljc5NTkgNjAuMTc3NUM4NS4zODU4IDYwLjM1ODEgODUuOTE4OSA2MC4zNjk3IDg2LjM5NTQgNjAuMjEyMlpcIiBmaWxsPVwid2hpdGVcIiAvPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTA1LjY0NyA1NS41MzkxQzEwNS42ODIgNTUuODE3OSAxMDUuNjAyIDU2LjA0MDcgMTA1LjQwNyA1Ni4yMDc1QzEwNS4yMTkgNTYuMzg5NCAxMDQuOTM1IDU2LjU0MjggMTA0LjU1NyA1Ni42Njc3QzEwMy40MjQgNTcuMDQyNCAxMDIuNzY1IDU2Ljk5NTQgMTAyLjU4MyA1Ni41MjY1TDEwMi4zOTQgNTUuNjE1NkMxMDIuMDU4IDU2LjA4NTMgMTAxLjY0IDU2LjU4MjEgMTAxLjEzOSA1Ny4xMDYxQzEwMC42MzkgNTcuNjMgMTAwLjE4MyA1Ny45NTk5IDk5Ljc3MjMgNTguMDk1N0M5Ny4zNDA1IDU4Ljg5OTUgOTUuODM4NSA1OC41Njc4IDk1LjI2NjIgNTcuMTAwOEM5NC4yOTI2IDU0LjYwNTQgOTQuMDQ5OCA1MS42Mjk0IDk0LjUzNzcgNDguMTcyOUM5NC41OTkyIDQ3Ljc1OTkgOTQuNzA3MiA0Ny40NDI0IDk0Ljg2MTggNDcuMjIwNkM5NS4wMzI4IDQ2Ljk5MzMgOTUuMzg5NCA0Ni43OTAxIDk1LjkzMTYgNDYuNjEwOEM5Ni41MDY3IDQ2LjQyMDggOTYuOTYzNCA0Ni4zNTUyIDk3LjMwMTggNDYuNDE0MUM5Ny42NTA2IDQ2LjQ1MjQgOTcuODYzNCA0Ni41Njk5IDk3Ljk0MDEgNDYuNzY2NUM5Ny45NTc4IDQ2LjgxMTkgOTcuOTIwNSA0Ni45Nzc5IDk3LjgyODMgNDcuMjY0NUM5Ny43MjQzIDQ3LjUyMDggOTcuNjQ0OSA0Ny43NjkgOTcuNTkwMSA0OC4wMDkxQzk2Ljk3MiA1MC44OTQgOTcuMTAyNSA1My40NjMyIDk3Ljk4MTYgNTUuNzE2N0M5OC4wNTgzIDU1LjkxMzMgOTguMjA4MyA1Ni4wNjAxIDk4LjQzMTYgNTYuMTU3Qzk4LjY1NSA1Ni4yNTM5IDk4LjgzMjMgNTYuMjgwNyA5OC45NjM4IDU2LjIzNzJDOTkuMzI1MyA1Ni4xMTc3IDk5Ljg3MTIgNTUuNzU4IDEwMC42MDIgNTUuMTU4QzEwMS4zNDkgNTQuNTUyNSAxMDEuODg3IDU0LjAwNzQgMTAyLjIxOCA1My41MjI2TDEwMS45OTQgNTEuNTIyMkMxMDEuNzMgNDkuMTMzNyAxMDEuNTc0IDQ3LjY2NTUgMTAxLjUyNyA0Ny4xMTc1QzEwMS40NzIgNDYuNDUyOCAxMDEuNTEgNDUuODg1MyAxMDEuNjQyIDQ1LjQxNDlDMTAxLjc4NCA0NC45MjM5IDEwMi4xNjggNDQuNTc1MiAxMDIuNzkyIDQ0LjM2ODhDMTAzLjY2MyA0NC4wODEgMTA0LjE5MyA0NC4xNzkgMTA0LjM4MiA0NC42NjNDMTA0LjQxMSA0NC43Mzg2IDEwNC40MjUgNDQuODQ1MSAxMDQuNDIzIDQ0Ljk4MjRDMTA0LjQzMSA0NS4wOTkxIDEwNC40NDIgNDUuMTk4IDEwNC40NTUgNDUuMjc5TDEwNC45MDMgNDkuMjhDMTA1LjI1MyA1Mi40NTk1IDEwNS41MDEgNTQuNTQ1OSAxMDUuNjQ3IDU1LjUzOTFaXCIgZmlsbD1cIndoaXRlXCIgLz5cclxuICAgICAgICA8cGF0aCBkPVwiTTEwNS42NDUgNDAuNDAzN0MxMDUuNDYyIDM5LjkzNDkgMTA1LjQ1NiAzOS40Njc0IDEwNS42MjcgMzkuMDAxMkMxMDUuODE0IDM4LjUyOTYgMTA2LjE5NSAzOC4xOTg4IDEwNi43NyAzOC4wMDg3QzEwNy4zNzggMzcuODA3OCAxMDcuOTcxIDM3LjgwNzkgMTA4LjU1MSAzOC4wMDkxQzEwOS4xNDYgMzguMjA0OSAxMDkuNTMgMzguNTIyMSAxMDkuNzAxIDM4Ljk2MDdDMTA5Ljg3MiAzOS4zOTkyIDEwOS43OSAzOS44NTM0IDEwOS40NTMgNDAuMzIzQzEwOS4xMTcgNDAuNzkyNyAxMDguNjQ1IDQxLjEyOCAxMDguMDM3IDQxLjMyOUMxMDcuNDQ2IDQxLjUyNDUgMTA2Ljk0MSA0MS41Mzc3IDEwNi41MjIgNDEuMzY4N0MxMDYuMTE1IDQxLjE3OTEgMTA1LjgyMiA0MC44NTc0IDEwNS42NDUgNDAuNDAzN1pNMTA3Ljk2OCA1My4xMzNDMTA3Ljg2MiA1Mi44NjA3IDEwNy41MzEgNDkuODk2OCAxMDYuOTc1IDQ0LjI0MTFMMTA2LjUgNDMuNDUwNkMxMDYuNDM1IDQzLjI4NDIgMTA2LjQ5MiA0My4xMjA0IDEwNi42NyA0Mi45NTlDMTA2Ljg0OCA0Mi43OTc3IDEwNy4yNDEgNDIuNjE2NiAxMDcuODQ5IDQyLjQxNTZDMTA4LjMyNiA0Mi4yNTgxIDEwOC43MTggNDIuMjY1IDEwOS4wMjYgNDIuNDM2NEMxMDkuMzUgNDIuNjAyNCAxMDkuNTc3IDQyLjg1MTcgMTA5LjcwNyA0My4xODQ0QzEwOS43NDMgNDMuMjc1MiAxMDkuNzczIDQzLjQwMTYgMTA5LjggNDMuNTYzN0wxMTAuNzkyIDUyLjQ1NTZMMTExLjI2OCA1My4yNDYxQzExMS4zMzIgNTMuNDEyNCAxMTEuMjc2IDUzLjU3NjMgMTExLjA5OCA1My43Mzc2QzExMC45MTkgNTMuODk5IDExMC41MjYgNTQuMDgwMSAxMDkuOTE4IDU0LjI4MTFDMTA5LjM3NiA1NC40NjAzIDEwOC45NjcgNTQuNDMzNCAxMDguNjkgNTQuMjAwM0MxMDguNDA4IDUzLjk1MjIgMTA4LjE2NyA1My41OTY0IDEwNy45NjggNTMuMTMzWlwiIGZpbGw9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xMjIuMTk1IDQ5Ljk5MjVDMTE4LjE2IDUxLjgyMTQgMTE1Ljg2MiA1Mi44NzE1IDExNS4zIDUzLjE0MjZDMTE0LjcxNSA1My40MDQgMTE0LjQxNSA1My41Mzc1IDExNC4zOTkgNTMuNTQyOUMxMTQuMTAzIDUzLjY0MDcgMTEzLjgyNSA1My42ODk4IDExMy41NjYgNTMuNjkwMkMxMTMuMjkgNTMuNjk2IDExMy4xMTIgNTMuNjQzOSAxMTMuMDMyIDUzLjUzMzdDMTEyLjk2OSA1My40NjkgMTEyLjg1IDUzLjM1NDYgMTEyLjY3NSA1My4xOTA2QzExMi41IDUzLjAyNjUgMTEyLjM4NiA1Mi44NzY1IDExMi4zMzMgNTIuNzQwNEMxMTIuMjc5IDUyLjYwNDIgMTEyLjI3OSA1Mi40ODQ4IDExMi4zMzIgNTIuMzgyQzExMi4zNzkgNTIuMjY0MSAxMTIuNTMzIDUyLjEzNjMgMTEyLjc5NCA1MS45OTg2QzExMy4wNCA1MS44NjY0IDExMy4yMTEgNTEuNzgzOSAxMTMuMzEgNTEuNzUxNEMxMTMuODA0IDUwLjczNDUgMTE0LjQ0MyA0OS4zNTM2IDExNS4yMjggNDcuNjA4OEMxMTYuMzI3IDQ1LjE5NjYgMTE3LjE4IDQzLjQxMjIgMTE3Ljc4NiA0Mi4yNTU3TDExMy4wNDkgNDQuMzA3OUMxMTIuNTQgNDQuNDc2MiAxMTIuMTk0IDQ0LjMyNiAxMTIuMDExIDQzLjg1NzFDMTExLjg2NCA0My40NzkxIDExMS44NjQgNDMuMDUyMSAxMTIuMDEyIDQyLjU3NjJDMTEyLjA1MyA0Mi40NDMyIDExMi42NTUgNDIuMTA3NyAxMTMuODE4IDQxLjU2OTdDMTE0Ljk4IDQxLjAzMTcgMTE2LjI1NiA0MC40NzM1IDExNy42NDQgMzkuODk1MUMxMTkuMDQzIDM5LjI5NjIgMTE5LjkzOSAzOC45MzE2IDEyMC4zMzQgMzguODAxM0MxMjAuOTU4IDM4LjU5NDkgMTIxLjQgMzguODI0NCAxMjEuNjYgMzkuNDg5OUMxMjEuNzM2IDM5LjY4NjUgMTIxLjczNiAzOS45IDEyMS42NTkgNDAuMTMwM0MxMjEuNTc2IDQwLjM0NTYgMTIxLjQ0NSA0MC41MzM5IDEyMS4yNjcgNDAuNjk1MkwxMjAuODkzIDQxLjMwNTVDMTIwLjMyIDQyLjQ1MTEgMTE5LjYzMyA0My44OTkgMTE4LjgzMiA0NS42NDkzTDExNi43ODYgNDkuOTYyM0MxMTkuMjY0IDQ4LjgwMTcgMTIwLjg2NCA0OC4xMDE5IDEyMS41ODcgNDcuODYzQzEyMi4yMTIgNDcuNjU2NiAxMjIuNjU0IDQ3Ljg4NjEgMTIyLjkxMyA0OC41NTE2QzEyMy4wMTQgNDguODA4NyAxMjIuOTgyIDQ5LjA4MzggMTIyLjgxOCA0OS4zNzdDMTIyLjY2NSA0OS42NDk3IDEyMi40NTcgNDkuODU0OCAxMjIuMTk1IDQ5Ljk5MjVaXCIgZmlsbD1cIndoaXRlXCIgLz5cclxuICAgICAgICA8cGF0aCBkPVwiTTEyNy4xNDQgNDMuMjM0NkMxMjcuMjA1IDQzLjY3NTUgMTI3LjE1IDQ0LjAwOTYgMTI2Ljk3OSA0NC4yMzY5QzEyNi44MjQgNDQuNDU4NyAxMjYuNDc2IDQ0LjY1OTMgMTI1LjkzMyA0NC44Mzg1QzEyNS4wMTMgNDUuMTQyNiAxMjQuNDM4IDQ0Ljk5OTggMTI0LjIwOCA0NC40MUMxMjQuMDYxIDQ0LjAzMTkgMTIzLjkyNiA0My40MDE5IDEyMy44MDUgNDIuNTJDMTIzLjY5NCA0MS42MTc2IDEyMy41NjcgNDAuNDEzMSAxMjMuNDI0IDM4LjkwNjVDMTIzLjIzIDM2Ljg4NzYgMTIzLjAzOSAzNS4yMDkyIDEyMi44NTEgMzMuODcxM0MxMjIuNzI2IDMzLjA3NTkgMTIzLjE2NSAzMi41MTI2IDEyNC4xNjcgMzIuMTgxM0MxMjQuNjYgMzIuMDE4NCAxMjUuMDcxIDMxLjk3NjcgMTI1LjM5OSAzMi4wNTYxQzEyNS43MjYgMzIuMTM1NiAxMjUuOTEzIDMyLjMyOTkgMTI1Ljk2IDMyLjYzODlMMTI3LjE0NCA0My4yMzQ2Wk0xMjYuNDk1IDQ5LjA1ODFDMTI2LjA2NyA0OS4xOTkzIDEyNS42NDIgNDkuMTc3OSAxMjUuMjE3IDQ4Ljk5MzdDMTI0Ljc4NyA0OC43OTQ0IDEyNC40OTUgNDguNDk4MiAxMjQuMzQyIDQ4LjEwNDlDMTI0LjE4OSA0Ny43MTE3IDEyNC4yNDQgNDcuMjgzNiAxMjQuNTA5IDQ2LjgyMDVDMTI0Ljc2NyA0Ni4zNDIzIDEyNS4xODQgNDYuMDA4MiAxMjUuNzU5IDQ1LjgxODFDMTI2LjI2OSA0NS42NDk4IDEyNi43NCA0NS42MjIgMTI3LjE3NCA0NS43MzQ4QzEyNy42MDEgNDUuODMyNSAxMjcuOTA0IDQ2LjEwODIgMTI4LjA4MSA0Ni41NjE5QzEyOC4yNjMgNDcuMDMwNyAxMjguMTg1IDQ3LjUxNzggMTI3Ljg0NCA0OC4wMjMyQzEyNy41MTkgNDguNTIzMSAxMjcuMDcgNDguODY4MSAxMjYuNDk1IDQ5LjA1ODFaXCIgZmlsbD1cIndoaXRlXCIgLz5cclxuICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTg2LjkxOCA0OC42NDI1Qzg2LjI2NTMgNDguMTU4MiA4NS40Nzg5IDQ4LjA2ODEgODQuNTU4OCA0OC4zNzIzQzgzLjUwNzIgNDguNzE5OSA4Mi43MTIzIDQ5LjM5MjQgODIuMTczOSA1MC4zODk5QzgxLjYzNTYgNTEuMzg3NCA4MS4zNTc3IDUyLjUyOTMgODEuMzQwMSA1My44MTU2QzgxLjMxNjcgNTUuMDg2OSA4MS41MjkyIDU2LjI5NzIgODEuOTc3NiA1Ny40NDY2QzgyLjI0OSA1OC4xNDIzIDgyLjYzNjUgNTguNzMxMyA4My4xNCA1OS4yMTM3QzgzLjY1NDEgNTkuNjc1NSA4NC4yMDYxIDU5Ljk5NjggODQuNzk1OSA2MC4xNzc0Qzg1LjM4NTggNjAuMzU4MSA4NS45MTkgNjAuMzY5NiA4Ni4zOTU1IDYwLjIxMjFDODYuNTc1MiA2MC4xNTI4IDg2Ljc0ODUgNjAuMDc1NiA4Ni45MTU1IDU5Ljk4MDZDODcuNDA1MiA1OS43MDIyIDg3Ljg0MDQgNTkuMjcwOSA4OC4yMjExIDU4LjY4NjdDODcuODg5NCA1OC41MTM5IDg3LjU1NTIgNTguMzI5NCA4Ny4yMTgzIDU4LjEzMzFDODYuODIyIDU3LjkwMjEgODYuNDIyIDU3LjY1NDkgODYuMDE4NSA1Ny4zOTE1Qzg1LjI4ODMgNTYuODk4NyA4NC44ODc4IDU2LjU2MTUgODQuODE3IDU2LjM4Qzg0LjY1NzYgNTUuOTcxNyA4NC42MzA2IDU1LjY2NDcgODQuNzM2IDU1LjQ1OTJDODQuODUxOCA1NS4yMzMxIDg1LjEwNjkgNTUuMDU0OSA4NS41MDEyIDU0LjkyNDVDODUuNTUwNSA1NC45MDgyIDg1Ljk5MzUgNTUuMDY5MSA4Ni44MzAzIDU1LjQwNzJDODYuOTQ1NiA1NS40NTcyIDg3LjExMTEgNTUuNTI2MSA4Ny4zMjY3IDU1LjYxMzdDODcuNzM3NyA1NS43ODA4IDg4LjMzMDggNTYuMDE2MSA4OS4xMDYyIDU2LjMxOTdDODkuMjE1NiA1NS43MzE5IDg5LjI2MzMgNTUuMTI2NyA4OS4yNDkyIDU0LjUwNEM4OS4yNDMzIDU0LjI0IDg5LjIyNjMgNTMuOTcyOCA4OS4xOTgxIDUzLjcwMjZDODkuMTE0MiA1Mi43NzQyIDg4Ljg5NTIgNTEuODU2MyA4OC41NDEyIDUwLjk0ODhDODguMTI4MiA0OS44OTAyIDg3LjU4NzEgNDkuMTIxNCA4Ni45MTggNDguNjQyNVpNNzYuMDcwNiA1Mi44MjI3Qzc2LjM0OCA1MC44OTk1IDc3LjEyMzkgNDkuMTY3IDc4LjQwMDIgNDcuNjYxMUM3OS42OTEgNDYuMTE1NiA4MS4zODUxIDQ1LjAwNTIgODMuNDI3IDQ0LjMzMDNDODUuNTUxIDQzLjYyODIgODcuNjYxOCA0My43MTE1IDg5LjU5NTcgNDQuNzAxM0M5MC45MDIzIDQ1LjM1MjMgOTEuOTMwNyA0Ni4zNzE2IDkyLjczNiA0Ny42NDYzQzkyLjgyODQgNDcuMTk0NyA5Mi45OTA1IDQ2LjcxNyA5My4yODc0IDQ2LjI5MDlMOTMuMzA1MyA0Ni4yNjUzTDkzLjMyNDIgNDYuMjQwMkM5My44NDMzIDQ1LjU1MDMgOTQuNjc2NCA0NS4xOTYzIDk1LjI5OTUgNDQuOTkwNEM5NS45NjExIDQ0Ljc3MTcgOTYuNzc1MSA0NC41ODcxIDk3LjU4NTkgNDQuNzExOUM5OC4xOTgxIDQ0Ljc5MDYgOTkuMjAwNiA0NS4wODcgOTkuNjQ5MiA0Ni4wNjM1Qzk5LjY3NTYgNDUuNjkyNiA5OS43MzM3IDQ1LjMzMTQgOTkuODMwOSA0NC45ODQ4TDk5LjgzNDggNDQuOTcwOUMxMDAuMTY5IDQzLjgxOTUgMTAxLjA5MSA0My4xMDE4IDEwMi4xNiA0Mi43NDg0QzEwMi43MTUgNDIuNTY0OSAxMDMuNDUyIDQyLjM5NzkgMTA0LjIxMSA0Mi41Mzg1QzEwNC4zODcgNDIuNTcxMSAxMDQuNTU0IDQyLjYxODIgMTA0LjcxMiA0Mi42Nzg1QzEwNC43NTEgNDIuNTcwOSAxMDQuNzk3IDQyLjQ2ODQgMTA0Ljg1IDQyLjM3MTRDMTA0LjQwNiA0MS45ODU5IDEwNC4wODggNDEuNTA3NiAxMDMuODg1IDQwLjk4NTVDMTAzLjU2MSA0MC4xNTY2IDEwMy41NDcgMzkuMjkwNCAxMDMuODU0IDM4LjQ1MTZMMTAzLjg2MiAzOC40MzExTDEwMy44NyAzOC40MTA4QzEwNC4yNzEgMzcuMzk3OCAxMDUuMTExIDM2LjcyNzYgMTA2LjEzOCAzNi4zODgyQzEwNy4xMzkgMzYuMDU3MiAxMDguMTg2IDM2LjA0NiAxMDkuMTk1IDM2LjM5MjdDMTEwLjE2OSAzNi43MTYxIDExMS4wNTcgMzcuMzQyNiAxMTEuNDYxIDM4LjM3ODdDMTExLjgxNyAzOS4yODg4IDExMS42NjMgNDAuMTcwMyAxMTEuMjQgNDAuOTE5NUMxMTEuMzM1IDQwLjg2IDExMS40MzIgNDAuODA0IDExMS41MjUgNDAuNzUyMUMxMTEuODg5IDQwLjU0OSAxMTIuMzgyIDQwLjMwNjcgMTEyLjk3OCA0MC4wMzEzQzExNC4xNjQgMzkuNDgyNCAxMTUuNDYgMzguOTE1NCAxMTYuODY0IDM4LjMzMDJDMTE4LjIzNCAzNy43NDM4IDExOS4yMTEgMzcuMzQyOCAxMTkuNzAxIDM3LjE4MDhDMTIwLjE3NiAzNy4wMjQgMTIwLjc1OSAzNi45NDA5IDEyMS4zNTkgMzcuMDY5NkMxMjEuMjM3IDM1LjkzNTIgMTIxLjExNiAzNC45NDY4IDEyMC45OTggMzQuMTAyN0MxMjAuODgyIDMzLjM0NDYgMTIxLjAyNCAzMi41NDUyIDEyMS41NjcgMzEuODQ5MUMxMjIuMDgxIDMxLjE4ODEgMTIyLjgxOSAzMC43OTc1IDEyMy41MzUgMzAuNTYwOUMxMjQuMjA0IDMwLjMzOTkgMTI1LjAzMiAzMC4xODY3IDEyNS44NzUgMzAuMzkxMUMxMjYuMzIzIDMwLjQ5OTcgMTI2LjggMzAuNzIwMyAxMjcuMTg0IDMxLjExOTNDMTI3LjU2OSAzMS41MTgzIDEyNy43NDkgMzEuOTgxIDEyNy44MTMgMzIuNDAzM0wxMjcuODE3IDMyLjQzMjlMMTI5LjAwMyA0My4wNDA0QzEyOS4wNjMgNDMuNDk2NSAxMjkuMDY3IDQ0LjA2OTMgMTI4Ljg0NiA0NC42MzAyQzEyOS4zMTMgNDQuOTkxMSAxMjkuNjQxIDQ1LjQ2NzkgMTI5Ljg0MSA0NS45Nzk5QzEzMC4yNTMgNDcuMDM2MSAxMzAuMDEyIDQ4LjA2NTYgMTI5LjQ0MSA0OC45MTg0QzEyOC45MDQgNDkuNzQxMSAxMjguMTIgNTAuMzUwMyAxMjcuMTI3IDUwLjY3ODVDMTI2LjIxNSA1MC45Nzk3IDEyNS4yNzYgNTAuOTIyNSAxMjQuNDIgNTAuNTUwOUwxMjQuMzk4IDUwLjU0MTVMMTI0LjM3NiA1MC41MzE2QzEyNC4zNDMgNTAuNTE2MiAxMjQuMzEgNTAuNTAwNSAxMjQuMjc4IDUwLjQ4NDRDMTIzLjk5IDUwLjg4NTQgMTIzLjYwOCA1MS4yMzIzIDEyMy4xMjQgNTEuNDg3MUwxMjMuMDc0IDUxLjUxMzVMMTIzLjAyMiA1MS41MzcxQzExOC45NzIgNTMuMzcyOSAxMTYuNzAzIDU0LjQwOTQgMTE2LjE2OCA1NC42Njc1TDExNi4xNDMgNTQuNjc5NkwxMTYuMTE3IDU0LjY5MUMxMTUuODI1IDU0LjgyMTkgMTE1LjYwMiA1NC45MjE1IDExNS40NDkgNTQuOTg5M0wxMTUuMjY4IDU1LjA2OTJMMTE1LjIwNyA1NS4wOTU5TDExNS4xNyA1NS4xMTEzTDExNS4xMzUgNTUuMTI1NEMxMTUuMTI3IDU1LjEyODggMTE1LjA4NCA1NS4xNDU3IDExNS4wMzEgNTUuMTYzM0MxMTQuNTggNTUuMzEyMSAxMTQuMDk2IDU1LjQwODQgMTEzLjU4OSA1NS40MTE3QzExMy4zMzcgNTUuNDE2IDExMi43NjQgNTUuNDAzMyAxMTIuMjE3IDU1LjEyMjZDMTExLjk3MiA1NS4zMDYzIDExMS43MTIgNTUuNDM5MyAxMTEuNTA3IDU1LjUzNEMxMTEuMjIgNTUuNjY1OCAxMTAuODk1IDU1Ljc4NzQgMTEwLjU1MSA1NS45MDE0QzEwOS43NjQgNTYuMTYxNCAxMDguNTM4IDU2LjMyOTUgMTA3LjUyMyA1NS41NDczQzEwNy41NTIgNTYuMjA0NSAxMDcuMzI1IDU2Ljg5MzcgMTA2LjcyNCA1Ny40MzFDMTA2LjI2OSA1Ny44NTUgMTA1LjcwOSA1OC4xMTY1IDEwNS4xOSA1OC4yODhDMTA0LjU0NiA1OC41MDA4IDEwMy43OTcgNTguNjgyIDEwMy4wNjkgNTguNjI5OUMxMDIuODM2IDU4LjYxMzMgMTAyLjU3NSA1OC41NzA3IDEwMi4zMDggNTguNDgxMUMxMDEuNzc3IDU4Ljk5NjIgMTAxLjE0NSA1OS40NzEyIDEwMC40MDQgNTkuNzE2Qzk5LjE4MTkgNjAuMTIwMSA5Ny45MjM4IDYwLjM1NjQgOTYuNzU0NCA2MC4xOTA1Qzk2LjcwNzkgNjAuMzI3NSA5Ni42NDkzIDYwLjQ2NCA5Ni41Nzc0IDYwLjU5OTRDOTYuMTYwNCA2MS40NDE5IDk1LjM4NzYgNjEuOTM3NyA5NC41OTk0IDYyLjE5ODNDOTQuMDc5MSA2Mi4zNzAyIDkzLjU3NjUgNjIuMzI1NyA5My4zMzY1IDYyLjI5ODFDOTMuMDMwMyA2Mi4yNjI5IDkyLjcwNjUgNjIuMTk0MSA5Mi4zODg2IDYyLjExMjhDOTIuMDUzNyA2Mi4wMjcxIDkxLjY3NDEgNjEuOTE0MSA5MS4yNTMzIDYxLjc3NjVDOTAuMTk1NCA2Mi43NjYyIDg4LjkzMjQgNjMuNTA3OSA4Ny40NzkxIDYzLjk4ODNDODUuMTM5MSA2NC43NjE4IDgyLjgzNDkgNjQuNzQ3NSA4MC44MjI2IDYzLjYwNDRDNzguOTM5NyA2Mi41MzQ3IDc3LjYzNzkgNjAuNzYwMiA3Ni43NzYxIDU4LjU1MTJDNzYuMDM4NyA1Ni42NjEgNzUuNzkzNSA1NC43NDQyIDc2LjA3MDYgNTIuODIyN1pNOTAuNjkxIDU5LjczOTlDODkuNjg5MiA2MC45NzYgODguNDA3OSA2MS44NTIgODYuODQ3IDYyLjM2NzlDODQuODkxNyA2My4wMTQyIDgzLjIxMSA2Mi45MzggODEuODA1IDYyLjEzOTJDODAuMzk5IDYxLjM0MDUgNzkuMzA5NSA1OS45NTA1IDc4LjUzNjYgNTcuOTY5M0M3Ny44OTM0IDU2LjMyMDggNzcuNjg5NSA1NC42ODA4IDc3LjkyNDggNTMuMDQ5M0M3OC4xNjAyIDUxLjQxNzggNzguODExNSA0OS45NzMxIDc5Ljg3OSA0OC43MTU0QzgwLjk0MDYgNDcuNDQyNSA4Mi4zMzQgNDYuNTIwOSA4NC4wNTkyIDQ1Ljk1MDdDODUuNzM1MiA0NS4zOTY3IDg3LjI4MDggNDUuNDgzNCA4OC42OTYxIDQ2LjIxMDhDOTAuMTIxOSA0Ni45MTc2IDkxLjI0MTkgNDguMzE0NiA5Mi4wNTYyIDUwLjQwMTdDOTIuMjAzNCA1MC43NzkyIDkyLjMyNTggNTEuMTYzIDkyLjQyMzEgNTEuNTUzMUM5Mi42MTQzIDUyLjMxOTYgOTIuNzA5MSA1My4xMTA0IDkyLjcwNzUgNTMuOTI1NkM5Mi43MDcxIDU0LjE3MTkgOTIuNjk3NiA1NC40MTYgOTIuNjc5IDU0LjY1OEM5Mi42MDUxIDU1LjYyNDYgOTIuMzg3MiA1Ni41NTY5IDkyLjAyNTQgNTcuNDU0OUM5Mi43MTY3IDU3LjczMTcgOTMuMjg0MiA1Ny45Njc3IDkzLjcyNzggNTguMTYyOEM5NC40ODM0IDU4LjQ5NTEgOTQuODc5NyA1OC43MDg4IDk0LjkxNjkgNTguODA0MUM5NS4wMjE2IDU5LjA3MjcgOTUuMDUgNTkuMzIyNyA5NS4wMDE5IDU5LjU1NDFDOTQuOTc5NSA1OS42NjE2IDk0Ljk0MDcgNTkuNzY1MSA5NC44ODU0IDU5Ljg2NDZDOTQuNzMzNCA2MC4xODggOTQuNDI3MyA2MC40MjU4IDkzLjk2NzIgNjAuNTc3OEM5My42MjIyIDYwLjY5MTkgOTIuNTMwMSA2MC40MTI2IDkwLjY5MSA1OS43Mzk5Wk05NS4xOTQ0IDU2LjkxMjJDOTUuMjE3OSA1Ni45NzU0IDk1LjI0MTggNTcuMDM4MiA5NS4yNjYyIDU3LjEwMDhDOTUuNDk0NyA1Ny42ODY2IDk1Ljg3MTUgNTguMDkxMyA5Ni4zOTY2IDU4LjMxNUM5Ni41MDgyIDU4LjM2MjYgOTYuNjI2NyA1OC40MDIgOTYuNzUxOCA1OC40MzMzQzk3LjUxMTMgNTguNjIyNyA5OC41MTgyIDU4LjUxMDIgOTkuNzcyMyA1OC4wOTU2QzEwMC4xMjIgNTcuOTc5OSAxMDAuNTA1IDU3LjcyMzIgMTAwLjkyIDU3LjMyNTVDMTAwLjk5MiA1Ny4yNTY1IDEwMS4wNjUgNTcuMTgzNCAxMDEuMTM5IDU3LjEwNkMxMDEuMTg3IDU3LjA1NjEgMTAxLjIzNCA1Ny4wMDY0IDEwMS4yOCA1Ni45NTdDMTAxLjM1MSA1Ni44ODE1IDEwMS40MTkgNTYuODA2NSAxMDEuNDg2IDU2LjczMjFDMTAxLjQ5MSA1Ni43MjY4IDEwMS40OTYgNTYuNzIxNCAxMDEuNTAxIDU2LjcxNkMxMDEuNTk5IDU2LjYwNzIgMTAxLjY5MyA1Ni40OTk2IDEwMS43ODQgNTYuMzkzMkMxMDEuNzg2IDU2LjM5MDMgMTAxLjc4OCA1Ni4zODc0IDEwMS43OTEgNTYuMzg0NUMxMDIuMDE1IDU2LjEyMDYgMTAyLjIxNiA1NS44NjQzIDEwMi4zOTQgNTUuNjE1NUwxMDIuNTgzIDU2LjUyNjVDMTAyLjcxNCA1Ni44NjQ0IDEwMy4wOTMgNTYuOTgzMiAxMDMuNzE5IDU2Ljg4MjlDMTAzLjk2MSA1Ni44NDQgMTA0LjI0MSA1Ni43NzIzIDEwNC41NTcgNTYuNjY3NkMxMDQuOTM1IDU2LjU0MjcgMTA1LjIxOSA1Ni4zODkzIDEwNS40MDcgNTYuMjA3NEMxMDUuNjAyIDU2LjA0MDYgMTA1LjY4MiA1NS44MTc4IDEwNS42NDggNTUuNTM5QzEwNS41MDEgNTQuNTQ1OCAxMDUuMjUzIDUyLjQ1OTUgMTA0LjkwMyA0OS4yNzk5TDEwNC40NTUgNDUuMjc5QzEwNC40NDIgNDUuMTk3OSAxMDQuNDMxIDQ1LjA5OSAxMDQuNDIzIDQ0Ljk4MjNDMTA0LjQyNSA0NC44NDUgMTA0LjQxMSA0NC43Mzg2IDEwNC4zODIgNDQuNjYzQzEwNC4xOTMgNDQuMTc5IDEwMy42NjMgNDQuMDgwOSAxMDIuNzkyIDQ0LjM2ODhDMTAyLjE2OCA0NC41NzUxIDEwMS43ODQgNDQuOTIzOCAxMDEuNjQyIDQ1LjQxNDhDMTAxLjUxIDQ1Ljg4NTIgMTAxLjQ3MiA0Ni40NTI4IDEwMS41MjcgNDcuMTE3NUMxMDEuNTc0IDQ3LjY2NTQgMTAxLjczIDQ5LjEzMzYgMTAxLjk5NCA1MS41MjIxTDEwMi4yMTggNTMuNTIyNkMxMDEuOTU1IDUzLjkwNzcgMTAxLjU2MSA1NC4zMzA4IDEwMS4wMzYgNTQuNzkyMUMxMDAuOSA1NC45MTE1IDEwMC43NTUgNTUuMDMzNCAxMDAuNjAyIDU1LjE1NzlDMTAwLjQ0MyA1NS4yODggMTAwLjI5NCA1NS40MDY4IDEwMC4xNTMgNTUuNTE0M0M5OS42NDMyIDU1LjkwMjYgOTkuMjQ2OSA1Ni4xNDM2IDk4Ljk2MzggNTYuMjM3MkM5OC44MzI0IDU2LjI4MDYgOTguNjU1IDU2LjI1MzkgOTguNDMxNyA1Ni4xNTY5Qzk4LjIwODQgNTYuMDYgOTguMDU4MyA1NS45MTMyIDk3Ljk4MTYgNTUuNzE2NkM5Ny4xMDI1IDUzLjQ2MzIgOTYuOTcyIDUwLjg5NCA5Ny41OTAyIDQ4LjAwOUM5Ny42NDQ5IDQ3Ljc2OSA5Ny43MjQzIDQ3LjUyMDggOTcuODI4MyA0Ny4yNjQ0Qzk3LjkyMDYgNDYuOTc3OCA5Ny45NTc4IDQ2LjgxMTkgOTcuOTQwMSA0Ni43NjY1Qzk3Ljg2MzQgNDYuNTY5OSA5Ny42NTA2IDQ2LjQ1MjQgOTcuMzAxOCA0Ni40MTRDOTYuOTYzNSA0Ni4zNTUxIDk2LjUwNjcgNDYuNDIwNyA5NS45MzE3IDQ2LjYxMDhDOTUuMzg5NSA0Ni43OSA5NS4wMzI4IDQ2Ljk5MzMgOTQuODYxOCA0Ny4yMjA1Qzk0LjcwNzIgNDcuNDQyNCA5NC41OTkyIDQ3Ljc1OTggOTQuNTM3NyA0OC4xNzI4Qzk0LjM4MDQgNDkuMjg3MiA5NC4yOTkxIDUwLjM1MTcgOTQuMjkzNyA1MS4zNjYyQzk0LjI4ODkgNTIuMjU4OSA5NC4zNDMgNTMuMTEzIDk0LjQ1NTkgNTMuOTI4NEM5NC40ODYgNTQuMTQ1OSA5NC41MjAzIDU0LjM2MDcgOTQuNTU4OCA1NC41NzI3Qzk0LjcwNzkgNTUuMzkzOCA5NC45MTk3IDU2LjE3MzcgOTUuMTk0NCA1Ni45MTIyWk0xMDYuOTc1IDQ0LjI0MUMxMDcuNTMxIDQ5Ljg5NjcgMTA3Ljg2MiA1Mi44NjA3IDEwNy45NjggNTMuMTMyOUMxMDguMTY3IDUzLjU5NjMgMTA4LjQwOCA1My45NTIxIDEwOC42OSA1NC4yMDAzQzEwOC45NjcgNTQuNDMzMyAxMDkuMzc2IDU0LjQ2MDIgMTA5LjkxOCA1NC4yODFDMTEwLjM0NyA1NC4xMzk0IDExMC42NjkgNTQuMDA3NiAxMTAuODg0IDUzLjg4NTZDMTEwLjk3NCA1My44MzQ1IDExMS4wNDUgNTMuNzg1MiAxMTEuMDk4IDUzLjczNzZDMTExLjI3NiA1My41NzYyIDExMS4zMzIgNTMuNDEyNCAxMTEuMjY4IDUzLjI0NkwxMTAuNzkyIDUyLjQ1NTVMMTA5LjggNDMuNTYzNkMxMDkuNzczIDQzLjQwMTUgMTA5Ljc0MyA0My4yNzUxIDEwOS43MDcgNDMuMTg0NEMxMDkuNjI4IDQyLjk4MDUgMTA5LjUxMiA0Mi44MDc5IDEwOS4zNTkgNDIuNjY2N0MxMDkuMjYzIDQyLjU3NzQgMTA5LjE1MSA0Mi41MDA2IDEwOS4wMjYgNDIuNDM2NEMxMDguODUgNDIuMzM4OCAxMDguNjQ4IDQyLjI5NDUgMTA4LjQxOCA0Mi4zMDM2QzEwOC4yNDQgNDIuMzEwNCAxMDguMDU0IDQyLjM0NzggMTA3Ljg0OSA0Mi40MTU1QzEwNy4yNDEgNDIuNjE2NSAxMDYuODQ4IDQyLjc5NzYgMTA2LjY3IDQyLjk1OUMxMDYuNTk4IDQzLjAyMzkgMTA2LjU0NiA0My4wODkzIDEwNi41MTQgNDMuMTU1QzEwNi40NjYgNDMuMjUyNiAxMDYuNDYxIDQzLjM1MTEgMTA2LjUgNDMuNDUwNUwxMDYuOTc1IDQ0LjI0MVpNMTE3Ljc4NiA0Mi4yNTU2QzExNy40NTkgNDIuODc5OSAxMTcuMDYgNDMuNjg3MSAxMTYuNTg5IDQ0LjY3NzJDMTE2LjE4NyA0NS41MjE0IDExNS43MzQgNDYuNDk4NiAxMTUuMjI4IDQ3LjYwODhDMTE0LjQ0MyA0OS4zNTM2IDExMy44MDQgNTAuNzM0NCAxMTMuMzEgNTEuNzUxM0MxMTMuMjEyIDUxLjc4MzkgMTEzLjA0IDUxLjg2NjMgMTEyLjc5NCA1MS45OTg2QzExMi43NTggNTIuMDE4IDExMi43MjMgNTIuMDM3MyAxMTIuNjkgNTIuMDU2M0MxMTIuNjcgNTIuMDY4MSAxMTIuNjUgNTIuMDc5OCAxMTIuNjMyIDUyLjA5MTRDMTEyLjUxMyA1Mi4xNjYgMTEyLjQyOCA1Mi4yMzc0IDExMi4zNzYgNTIuMzA1N0MxMTIuMzU3IDUyLjMzMTYgMTEyLjM0MiA1Mi4zNTcgMTEyLjMzMiA1Mi4zODJDMTEyLjI4MyA1Mi40NzY4IDExMi4yOCA1Mi41ODU5IDExMi4zMjEgNTIuNzA5MkMxMTIuMzI1IDUyLjcxOTUgMTEyLjMyOCA1Mi43Mjk4IDExMi4zMzMgNTIuNzQwM0MxMTIuMzQ5IDUyLjc4MjcgMTEyLjM3MiA1Mi44MjY1IDExMi40IDUyLjg3MTdDMTEyLjQ2MyA1Mi45NzEzIDExMi41NTQgNTMuMDc3NiAxMTIuNjc1IDUzLjE5MDVDMTEyLjg1IDUzLjM1NDUgMTEyLjk2OSA1My40Njg5IDExMy4wMzIgNTMuNTMzN0MxMTMuMDM1IDUzLjUzODggMTEzLjAzOSA1My41NDM5IDExMy4wNDQgNTMuNTQ4OEMxMTMuMDY0IDUzLjU3MjUgMTEzLjA4OSA1My41OTMzIDExMy4xMTkgNTMuNjExMUMxMTMuMTI5IDUzLjYxNjkgMTEzLjE0IDUzLjYyMjQgMTEzLjE1MSA1My42Mjc2QzExMy4yNDggNTMuNjczMSAxMTMuMzg2IDUzLjY5MzkgMTEzLjU2NiA1My42OTAxQzExMy44MjUgNTMuNjg5NyAxMTQuMTAzIDUzLjY0MDYgMTE0LjM5OSA1My41NDI5QzExNC40MTUgNTMuNTM3NCAxMTQuNzE1IDUzLjQwNCAxMTUuMyA1My4xNDI1QzExNS44NjIgNTIuODcxNCAxMTguMTYgNTEuODIxNCAxMjIuMTk2IDQ5Ljk5MjVDMTIyLjQ1NyA0OS44NTQ4IDEyMi42NjUgNDkuNjQ5NiAxMjIuODE4IDQ5LjM3N0MxMjIuODM5IDQ5LjMzODUgMTIyLjg1OSA0OS4zMDAzIDEyMi44NzYgNDkuMjYyNEMxMjIuOTg0IDQ5LjAyMDMgMTIyLjk5OSA0OC43OTEgMTIyLjkyMiA0OC41NzQzQzEyMi45MTkgNDguNTY2NyAxMjIuOTE2IDQ4LjU1OTEgMTIyLjkxMyA0OC41NTE1QzEyMi43ODUgNDguMjIzIDEyMi42MTIgNDguMDAwNyAxMjIuMzk1IDQ3Ljg4NDdDMTIyLjE3MyA0Ny43NjU3IDEyMS45MDMgNDcuNzU4NCAxMjEuNTg3IDQ3Ljg2MjlDMTIxLjE2MSA0OC4wMDM4IDEyMC40MyA0OC4zMDQ3IDExOS4zOTQgNDguNzY1N0MxMTguNjczIDQ5LjA4NjkgMTE3LjgwMyA0OS40ODU3IDExNi43ODYgNDkuOTYyMkwxMTguODMyIDQ1LjY0OTJDMTE5LjYzMyA0My44OTkgMTIwLjMyIDQyLjQ1MSAxMjAuODkzIDQxLjMwNTRMMTIxLjI2NyA0MC42OTUxQzEyMS40NDUgNDAuNTMzOCAxMjEuNTc2IDQwLjM0NTUgMTIxLjY1OSA0MC4xMzAzQzEyMS42NjEgNDAuMTI1NSAxMjEuNjYyIDQwLjEyMDggMTIxLjY2NCA0MC4xMTYxQzEyMS43MzYgMzkuODkxMSAxMjEuNzM1IDM5LjY4MjQgMTIxLjY2IDM5LjQ4OThDMTIxLjYzNyAzOS40MzEgMTIxLjYxMiAzOS4zNzU2IDEyMS41ODcgMzkuMzIzN0MxMjEuNTU2IDM5LjI2MiAxMjEuNTIzIDM5LjIwNTIgMTIxLjQ4OSAzOS4xNTMxQzEyMS40MDggMzkuMDMxOCAxMjEuMzE3IDM4LjkzNjUgMTIxLjIxNSAzOC44NjcxQzEyMC45NzkgMzguNzA3IDEyMC42ODUgMzguNjg1IDEyMC4zMzQgMzguODAxMkMxMTkuOTM5IDM4LjkzMTUgMTE5LjA0MyAzOS4yOTYyIDExNy42NDQgMzkuODk1MUMxMTYuMjU2IDQwLjQ3MzQgMTE0Ljk4IDQxLjAzMTYgMTEzLjgxOCA0MS41Njk2QzExMi42NTUgNDIuMTA3NiAxMTIuMDUzIDQyLjQ0MzIgMTEyLjAxMiA0Mi41NzYyQzExMS44NjQgNDMuMDUyIDExMS44NjQgNDMuNDc5IDExMi4wMTEgNDMuODU3MUMxMTIuMTk0IDQ0LjMyNTkgMTEyLjU0IDQ0LjQ3NjIgMTEzLjA0OSA0NC4zMDc4TDExNy43ODYgNDIuMjU1NlpNMTIzLjQyNiAzOC45MjM3QzEyMy40NyAzOS4zODI2IDEyMy41MTIgMzkuODEzNSAxMjMuNTUyIDQwLjIxNjJDMTIzLjY0NCA0MS4xMjg0IDEyMy43MjggNDEuODk2MyAxMjMuODA1IDQyLjUyQzEyMy45MjYgNDMuNDAxOCAxMjQuMDYxIDQ0LjAzMTggMTI0LjIwOCA0NC40MDk5QzEyNC4yMzEgNDQuNDY4MyAxMjQuMjU3IDQ0LjUyMjIgMTI0LjI4NyA0NC41NzE4QzEyNC40OTYgNDQuOTI0MiAxMjQuODc2IDQ1LjA1NTggMTI1LjQyNyA0NC45NjY2QzEyNS41ODIgNDQuOTQxNCAxMjUuNzUxIDQ0Ljg5ODcgMTI1LjkzNCA0NC44Mzg0QzEyNi40NzYgNDQuNjU5MiAxMjYuODI0IDQ0LjQ1ODcgMTI2Ljk3OSA0NC4yMzY5QzEyNy4wMzYgNDQuMTYwNiAxMjcuMDggNDQuMDcyMiAxMjcuMTEyIDQzLjk3MTlDMTI3LjE3NCA0My43NzMzIDEyNy4xODUgNDMuNTI3NSAxMjcuMTQ0IDQzLjIzNDZMMTI1Ljk2IDMyLjYzODlDMTI1LjkxMyAzMi4zMjk4IDEyNS43MjYgMzIuMTM1NSAxMjUuMzk5IDMyLjA1NjFDMTI1LjA3MSAzMS45NzY2IDEyNC42NiAzMi4wMTgzIDEyNC4xNjggMzIuMTgxM0MxMjMuMTY1IDMyLjUxMjUgMTIyLjcyNiAzMy4wNzU5IDEyMi44NTEgMzMuODcxM0MxMjMuMDM5IDM1LjIwOTIgMTIzLjIzIDM2Ljg4NzYgMTIzLjQyNCAzOC45MDY1QzEyMy40MjUgMzguOTEyMiAxMjMuNDI2IDM4LjkxNzkgMTIzLjQyNiAzOC45MjM3Wk0xMjcuNjY4IDQ1Ljk2OTJDMTI3LjUyOCA0NS44NTYxIDEyNy4zNjMgNDUuNzc4IDEyNy4xNzQgNDUuNzM0N0MxMjYuODg4IDQ1LjY2MDQgMTI2LjU4NiA0NS42NDcxIDEyNi4yNjggNDUuNjk0OEMxMjYuMTAzIDQ1LjcxOTUgMTI1LjkzMyA0NS43NjA2IDEyNS43NTkgNDUuODE4MUMxMjUuMjQ0IDQ1Ljk4ODQgMTI0Ljg1NiA0Ni4yNzQ0IDEyNC41OTQgNDYuNjc2QzEyNC41NjQgNDYuNzIyNiAxMjQuNTM2IDQ2Ljc3MDggMTI0LjUwOSA0Ni44MjA1QzEyNC40MTkgNDYuOTc3IDEyNC4zNTQgNDcuMTI5NSAxMjQuMzEyIDQ3LjI3ODFDMTI0LjIzMyA0Ny41NjA1IDEyNC4yNCA0Ny44Mjg1IDEyNC4zMzMgNDguMDgyMUMxMjQuMzM2IDQ4LjA4OTcgMTI0LjMzOSA0OC4wOTczIDEyNC4zNDIgNDguMTA0OUMxMjQuNDQ1IDQ4LjM2OTYgMTI0LjYxMSA0OC41OTAzIDEyNC44NCA0OC43NjcyQzEyNC45NTEgNDguODUzIDEyNS4wNzcgNDguOTI4NSAxMjUuMjE3IDQ4Ljk5MzZDMTI1LjY0MiA0OS4xNzc4IDEyNi4wNjcgNDkuMTk5MyAxMjYuNDk1IDQ5LjA1ODFDMTI3LjA3IDQ4Ljg2OCAxMjcuNTE5IDQ4LjUyMyAxMjcuODQ0IDQ4LjAyMzFDMTI4LjE4NSA0Ny41MTc3IDEyOC4yNjMgNDcuMDMwNyAxMjguMDgxIDQ2LjU2MThDMTI3Ljk4MiA0Ni4zMDkgMTI3Ljg0NCA0Ni4xMTE1IDEyNy42NjggNDUuOTY5MlpNMTA5LjE3MyA0MC42NTMyQzEwOS4yNzUgNDAuNTUxNyAxMDkuMzY5IDQwLjQ0MTYgMTA5LjQ1MyA0MC4zMjNDMTA5Ljc5IDM5Ljg1MzMgMTA5Ljg3MiAzOS4zOTkyIDEwOS43MDEgMzguOTYwNkMxMDkuNTMgMzguNTIyIDEwOS4xNDYgMzguMjA0OCAxMDguNTUxIDM4LjAwOUMxMDcuOTcxIDM3LjgwNzggMTA3LjM3OCAzNy44MDc3IDEwNi43NyAzOC4wMDg2QzEwNi4xOTUgMzguMTk4NyAxMDUuODE0IDM4LjUyOTYgMTA1LjYyNyAzOS4wMDEyQzEwNS40NTYgMzkuNDY3MyAxMDUuNDYyIDM5LjkzNDggMTA1LjY0NSA0MC40MDM2QzEwNS43NzQgNDAuNzMzNyAxMDUuOTY0IDQwLjk5MzggMTA2LjIxNSA0MS4xODQxQzEwNi4zMDkgNDEuMjU1NCAxMDYuNDExIDQxLjMxNjkgMTA2LjUyMiA0MS4zNjg2QzEwNi44MDIgNDEuNDgxNiAxMDcuMTIxIDQxLjUxMzIgMTA3LjQ3OCA0MS40NjMyQzEwNy42NTUgNDEuNDM4NSAxMDcuODQxIDQxLjM5MzcgMTA4LjAzNyA0MS4zMjg5QzEwOC40OTIgNDEuMTc4NyAxMDguODcgNDAuOTUzNSAxMDkuMTczIDQwLjY1MzJaXCIgZmlsbD1cIiMyNTJCNTFcIiAvPlxyXG4gICAgICA8L2c+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXAwXCI+XHJcbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEzNC4zNzNcIiBoZWlnaHQ9XCI2N1wiIGZpbGw9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuTG9nby5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCBRdWl6TG9nbyA9IHN0eWxlZChMb2dvKWBcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6TG9nbzsgIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IFdpZGdldCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHRoZW1lLmNvbG9ycy5tYWluQmc7XHJcbiAgfX07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaDEsIGgyLCBoMyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbmA7XHJcblxyXG5XaWRnZXQuSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE4cHggMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICBcclxuICAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5XaWRnZXQuQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMjRweCAzMnB4IDMycHggMzJweDtcclxuICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICAmID4gKjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=