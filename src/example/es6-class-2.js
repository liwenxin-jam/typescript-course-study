function Food() {
  this.type = 'food'
}
Food.prototype.getType = function () {
  return this.type
}

function Vegetables(name) {
  this.name = name
}
Vegetables.prototype = new Food()
const tomato = new Vegetables('tomato')
// console.log(tomato.getType())

// class Parent {
//     constructor (name) {
//         this.name = name
//     }
//     getName () {
//         return this.name
//     }
//     static getNames () {  // 静态方法只能是类自身调用
//         return this.name
//     }
// }
// class Child extends Parent {
//     constructor (name, age) {
//         super(name)
//         this.age = age
//     }
// }
// const c = new Child('lison', 18)
// console.log(c)
// console.log(c.getName())
// console.log(c instanceof Child) // true
// console.log(c instanceof Parent) // true 继承后也是父类的实例
// console.log(Child.getNames()) // Child
// console.log(Object.getPrototypeOf(Child) === Parent) // true

// super作为函数
// super作为对象
// 在普通方法中 -》 父类的原型对象
// 在静态方法中 -》 父类

// class Parent {
//     constructor () {
//         this.type = 'parent'
//     }
//     getName () {
//         return this.type
//     }
// }
// Parent.getType = () => {
//     return 'is parent'
// }
// class Child extends Parent {
//     constructor () {
//         super()
//         console.log('constructor: ' + super.getName())
//     }
//     getParentName () {
//         console.log('getParentName: ' + super.getName())
//     }
//     static getParentType () {
//         console.log('getParentType: ' + super.getType())
//     }
// }
// const c = new Child()
// c.getParentName()
// Child.getParentType()

class Parent {
  constructor() {
    this.name = 'parent'
  }
  print() {
    console.log(this.name)
  }
}
class Child extends Parent {
  constructor() {
    super()
    this.name = 'child'
  }
  childPrint() {
    super.print()
  }
}
const c = new Child()
c.childPrint()

// prototype
// __proto__
var objs = new Object()
console.log(objs.__proto__ === Object.prototype) // true

// 子类的__proto__指向父类本身
// 子类的prototype属性的__proto__指向父类的prototype属性
// 实例的__proto__属性的__proto__指向父类实例的__proto__

// Boolean
// Number
// String
// Array
// Date
// Function
// RegExp
// Error
// Object

class CustomArray extends Array {
  constructor(...args) {
    super(...args)
  }
}
const arr = new CustomArray(3, 4, 5)
arr.fill('+')
console.log(arr)
console.log(arr.join('_'))