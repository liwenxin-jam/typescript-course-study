var Validation;
(function(Validation) {
  Validation.isLetterReg = /^[A-Za-z]+$/;
  Validation.checkLetter = function(text) {
    return Validation.isLetterReg.test(text);
  };
})(Validation || (Validation = {}));
var Validation;
(function(Validation) {
  Validation.isNumberReg = /^[0-9]+$/;
  Validation.checkNumber = function(text) {
    return Validation.isNumberReg.test(text);
  };
})(Validation || (Validation = {}));
// import { name } from './b'
// import * as info from './b'
// import { name as nameProp } from './b'
// import moment from 'moment'
// import * as moment from 'moment'
// import moment = require('moment')
/// <reference path="./letter-validation.ts"/>
/// <reference path="./number-validation.ts"/>
// import './a'
// import * as AData from './a'
// import name = require('./c')
// import name from './c'
// console.log(moment)
var isLetter = Validation.checkLetter('abc');
var isNumber = Validation.checkNumber('abc');
console.log(Validation, isLetter, isNumber);
var Shapes;
(function(Shapes) {
  var Polygons;
  (function(Polygons) {
    var Triangle = /** @class */ (function() {
      function Triangle() {}
      return Triangle;
    }());
    Polygons.Triangle = Triangle;
    var Squaire = /** @class */ (function() {
      function Squaire() {}
      return Squaire;
    }());
    Polygons.Squaire = Squaire;
  })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
var polygons = Shapes.Polygons;
var triangle = new polygons.Triangle();
// 相对导入  /  ./  ../
// './a'
// '../modules/a.js'