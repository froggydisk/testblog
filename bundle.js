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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cytoscape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var cytoscape__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cytoscape__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cytoscape_cose_bilkent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var cytoscape_cose_bilkent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cytoscape_cose_bilkent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _model_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);


cytoscape__WEBPACK_IMPORTED_MODULE_0___default.a.use(cytoscape_cose_bilkent__WEBPACK_IMPORTED_MODULE_1___default.a);
 // webpack으로 묶어줘야 하니 css파일을 진입점인 index.js 에 import 합니다

 // favicon build

 // data build

fetch('./model/data.json', {
  mode: 'no-cors'
}).then(function (res) {
  return res.json();
}).then(function (data) {
  var cy_for_rank = cytoscape__WEBPACK_IMPORTED_MODULE_0___default()({
    elements: data
  }); // rank를 활용하기 위해 data만 입력한 cytoscape 객체입니다

  var pageRank = cy_for_rank.elements().pageRank(); // elements들의 rank들입니다.

  var nodeMaxSize = 50;
  var nodeMinSize = 5;
  var nodeActiveSize = 20;
  var fontMaxSize = 10;
  var fontMinSize = 8;
  var fontActiveSize = 10; // node & font 크기 값

  var edgeWidth = '2px';
  var edgeActiveWidth = '4px';
  var arrowScale = 0.8;
  var arrowActiveScale = 1.2; // edge & arrow 크기값

  var dimColor = '#dfe4ea';
  var edgeColor = '#ced6e0';
  var nodeColor = '#57606f';
  var nodeActiveColor = '#0367A6';
  var successorColor = '#023859'; // 상위 node & edge color

  var predecessorsColor = '#66A8D1'; // 하위 node & edge color

  var cy = cytoscape__WEBPACK_IMPORTED_MODULE_0___default()({
    container: document.getElementById('cy'),
    // container to render in
    elements: data,
    style: [// the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': nodeColor,
        'label': 'data(label)',
        'width': function width(ele) {
          return nodeMaxSize * (pageRank.rank('#' + ele.id()) * 8) + nodeMinSize;
        },
        'height': function height(ele) {
          return nodeMaxSize * (pageRank.rank('#' + ele.id()) * 8) + nodeMinSize;
        },
        'font-size': function fontSize(ele) {
          return fontMaxSize * pageRank.rank('#' + ele.id()) + fontMinSize;
        },
        'color': nodeColor,
        'text-wrap': 'wrap'
      }
    }, {
      selector: 'edge',
      style: {
        'width': edgeWidth,
        'curve-style': 'bezier',
        'line-color': edgeColor,
        'source-arrow-color': edgeColor,
        'source-arrow-shape': 'vee',
        'arrow-scale': arrowScale
      }
    }],
    layout: {
      name: 'cose-bilkent',
      animate: false,
      gravityRangeCompound: 1.5,
      fit: true,
      tile: true
    }
  });

  function setDimStyle(target_cy, style) {
    target_cy.nodes().forEach(function (target) {
      target.style(style);
    });
    target_cy.edges().forEach(function (target) {
      target.style(style);
    });
  }

  function setFocus(target_element, successorColor, predecessorsColor, edgeWidth, arrowScale) {
    target_element.style('background-color', nodeActiveColor);
    target_element.style('color', nodeColor);
    target_element.successors().each(function (e) {
      // 상위  엣지와 노드
      if (e.isEdge()) {
        e.style('width', edgeWidth);
        e.style('arrow-scale', arrowScale);
      }

      e.style('color', nodeColor);
      e.style('background-color', successorColor);
      e.style('line-color', successorColor);
      e.style('source-arrow-color', successorColor);
      setOpacityElement(e, 0.8);
    });
    target_element.predecessors().each(function (e) {
      // 하위 엣지와 노드
      if (e.isEdge()) {
        e.style('width', edgeWidth);
        e.style('arrow-scale', arrowScale);
      }

      e.style('color', nodeColor);
      e.style('background-color', predecessorsColor);
      e.style('line-color', predecessorsColor);
      e.style('source-arrow-color', predecessorsColor);
      setOpacityElement(e, 0.6);
    });
    target_element.neighborhood().each(function (e) {
      // 이웃한 엣지와 노드
      setOpacityElement(e, 1);
    });
    target_element.style('width', Math.max(parseFloat(target_element.style('width')), nodeActiveSize));
    target_element.style('height', Math.max(parseFloat(target_element.style('height')), nodeActiveSize));
    target_element.style('font-size', Math.max(parseFloat(target_element.style('font-size')), fontActiveSize));
  }

  function setOpacityElement(target_element, degree) {
    target_element.style('opacity', degree);
  }

  function setResetFocus(target_cy) {
    target_cy.nodes().forEach(function (target) {
      target.style('background-color', nodeColor);
      var rank = pageRank.rank(target);
      target.style('width', nodeMaxSize * (rank * 8) + nodeMinSize);
      target.style('height', nodeMaxSize * (rank * 8) + nodeMinSize);
      target.style('font-size', fontMaxSize * rank + fontMinSize);
      target.style('color', nodeColor);
      target.style('opacity', 1);
    });
    target_cy.edges().forEach(function (target) {
      target.style('line-color', edgeColor);
      target.style('source-arrow-color', edgeColor);
      target.style('width', edgeWidth);
      target.style('arrow-scale', arrowScale);
      target.style('opacity', 1);
    });
  }

  cy.on('tap', function (e) {
    var url = e.target.data('url');

    if (url && url !== '') {
      window.open(url);
    }
  });
  cy.on('tapstart mouseover', 'node', function (e) {
    setDimStyle(cy, {
      'background-color': dimColor,
      'line-color': dimColor,
      'source-arrow-color': dimColor,
      'color': dimColor
    });
    setFocus(e.target, successorColor, predecessorsColor, edgeActiveWidth, arrowActiveScale);
  });
  cy.on('tapend mouseout', 'node', function (e) {
    setResetFocus(e.cy);
  });
  var resizeTimer;
  window.addEventListener('resize', function () {
    this.clearTimeout(resizeTimer);
    resizeTimer = this.setTimeout(function () {
      cy.fit();
    }, 200);
  });
});

