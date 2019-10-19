// a.js
const func1 = Symbol('func1') // 外部无法直接访问到symbol
export default class Point {
  static[func1]() {  // 通过symbol的特殊性生成一个特殊的key，作为私有方法

  }
}