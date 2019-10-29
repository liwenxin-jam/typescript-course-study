// import { name } from './b'
// import * as info from './b'
// import { name as nameProp } from './b'
// import moment from 'moment' // 引进默认导出
// import * as moment from 'moment' // 引进全部，包括默认导出
// import moment = require('moment') // 引进默认导出

// 三斜线引入命名空间
/// <reference path="./letter-validation.ts"/>
/// <reference path="./number-validation.ts"/>
// import './a'
// import * as AData from './a'
// import name = require('./c')
// import name from './c'
// console.log(moment)

// 多个相同的命名空间，会自动合并在一起
let isLetter = Validation.checkLetter('abc')
let isNumber = Validation.checkNumber('abc')
// console.log(isLetter, isNumber)

namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Squaire {}
  }
}
import polygons = Shapes.Polygons
let triangle = new polygons.Triangle()

// 相对导入  /  ./  ../
// './a'
// '../modules/a.js'
