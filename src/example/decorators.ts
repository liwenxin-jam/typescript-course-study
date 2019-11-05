// function setProp() {
//   // ... todo // 可以直接在这里写逻辑，接收参数target
//   return function(target) { // 也可以写成装饰工厂，返回一个方法
//     //
//     // ...
//   }
// }
// function setName() {
//   console.log('get setName')
//   return target => {
//     console.log('setName')
//   }
// }
// function setAge() {
//   console.log('get setAge')
//   return target => {
//     console.log('setAge')
//   }
// }
// 如果是装饰工厂，就是return函数里的执行顺序是从下到上。 如果是普通的装饰器，是从上到下执行
// 输出顺序 get setName =》get setAge =》setAge=》setName
// @setName()
// @setAge()
// class ClassDec {}

// 类装饰器
// let sign = null
// function setName(name: string) {
//   return (target: new () => any) => {
//     sign = target
//     console.log(target.name)
//   }
// }
// @setName('jam')
// class ClassDec {
//   constructor() {}
// }
// console.log(sign === ClassDec)
// console.log(sign === ClassDec.prototype.constructor)

// 可以用装饰器覆盖类的一些操作，它们会彼此合并
// function addName(constructor: new () => any) {
//   constructor.prototype.name = 'xxlai'
// }
// @addName
// class ClassD {}
// interface ClassD {
//   name: string
// }
// const d = new ClassD()
// console.log(d.name) // 输出 xxlai

// 返回装饰器包括的类属性，会合并
// function classDecorator<T extends new (...args: any[]) => {}>(target: T) {
//   return class extends target {
//     public newProperty = 'new property'
//     public hello = 'override'
//   }
// }
// 只返回装饰器的类属性，不会合并，会覆盖原先的类定义
// function classDecorator(target: any): any {
//   return class {
//     public newProperty = 'new property'
//     public hello = 'override'
//   }
// }
// @classDecorator
// class Greeter {
//   public property = 'property'
//   public hello: string
//   constructor(m: string) {
//     this.hello = m
//   }
// }
// console.log(new Greeter('world'))

// configurable
// writeable
// enumerable
interface ObjWithAnyKeys {
  [key: string]: any
}
let obj12: ObjWithAnyKeys = {
  age: 18,
}
Object.defineProperty(obj12, 'name', {
  value: 'jam',
  // writable: false,  // 是否可写的
  writable: false,
  // configurable: true,  // 是否可配置的
  configurable: false,
  // enumerable: false,  // 是否可枚举的
  enumerable: true,
})
// 设置了不可配置，不允许重复定义name属性
// Object.defineProperty(obj12, 'name', {
//   value: 'lison',
//   writable: true
// })
// console.log(obj12.name)
// obj12.name = 'test'
// console.log(obj12.name)
// for (const key in obj12) {
//   console.log(key)
// }

// function enumerable(bool: boolean) {
//   return (
//     target: any,
//     propertyName: string,
//     descriptor: PropertyDescriptor
//   ) => {
//     console.log(target, propertyName)
//     descriptor.enumerable = bool
//   }
// }
// function enumerable(bool: boolean): any {
//   return (
//     target: any,
//     propertyName: string,
//     descriptor: PropertyDescriptor
//   ) => {
//     return {
//       value() {
//         return 'not age'
//       },
//       enumerable: bool
//     }
//   }
// }
// class ClassF {
//   constructor(public age: number) {}
//   @enumerable(false)
//   public getAge() {
//     return this.age
//   }
// }
// const classF = new ClassF(18)
// console.log(classF.getAge()) // 输出 not age
// for (const key in classF) {
//   console.log(key)
// }

// function enumerable(bool: boolean) {
//   return (
//     target: any,
//     propertyName: string,
//     descriptor: PropertyDescriptor
//   ) => {
//     descriptor.enumerable = bool
//   }
// }
// class ClassG {
//   private _name: string
//   constructor(name: string) {
//     this._name = name
//   }
//   @enumerable(true)
//   get name() {
//     return this._name
//   }
//   set name(name) {
//     this._name = name
//   }
// }
// const classG = new ClassG('jam')
// for (const key in classG) {
//   console.log(key)
// }

// function printPropertyName(target: any, propertyName: string) {
//   console.log(propertyName)
// }
// class ClassH {
//   @printPropertyName
//   public name: string
// }

// 参数装饰器
function required(target: any, propertName: string, index: number) {
  console.log(`修饰的是${propertName}的第${index + 1}个参数`)
}
class ClassI {
  public name: string = 'jam'
  public age: number = 18
  public getInfo(prefix: string, @required infoType: string): any {
    return prefix + ' ' + this[infoType]
  }
}
interface ClassI {
  [key: string]: string | number | Function
}
const classI = new ClassI()
classI.getInfo('hihi', 'age')
