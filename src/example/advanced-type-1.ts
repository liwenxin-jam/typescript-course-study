// 交叉类型 用&
// const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
//   let res = {} as T & U
//   res = Object.assign(arg1, arg2)
//   return res
// }
// mergeFunc({ a: 'a' }, { b: 'b' }) // 可以访问到属性a/b，但访问不到其它没有的

// 联合类型 用 |
// const getLengthFunc = (content: string | number): number => {
//   if (typeof content === 'string') {
//     return content.length
//   } else {
//     return content.toString().length
//   }
// }
// console.log(getLengthFunc(false)) // 只能接收 string/number

// const valueList = [123, 'abc']
const valueList = [{}, () => {}]
const getRandomValue = () => {
  const number = Math.random() * 10
  if (number < 5) {
    return valueList[0]
  } else {
    return valueList[1]
  }
}
const item = getRandomValue()
// function isString(value: number | string): value is string {
//   return typeof value === 'string'
// }
// // 类型断言，凡是用到item需要先指明类型 as xx
// if ((item as string).length) {
//   console.log((item as string).length)
// } else {
//   console.log((item as number).toFixed())
// }
// 类型保护，先判断了用到item的类型
// if (isString(item)) {
// string/number/boolean/symbol中的一种，只有这4种基础类型才能起到类型保护
// 类型保护还必须是 === 的形式，如果是 (typeof type).includes('string')也不会产生类型保护
// if (typeof item === 'undefined') {
//   console.log(item.toString())
// } else {
//   // console.log(item.toFixed())
//   console.log(item())
// }

// class CreatedByClass1 {
//   public age = 18
//   constructor() {}
// }
// class CreatedByClass2 {
//   public name = 'lison'
//   constructor() {}
// }
// function getRandomItem() {
//   return Math.random() < 0.5 ? new CreatedByClass1() : new CreatedByClass2()
// }
// const item1 = getRandomItem()
// // 利用 instanceof 产到类型保护
// if (item1 instanceof CreatedByClass1) {
//   console.log(item1.age)
// } else {
//   console.log(item1.name)
// }

// null/undefined
let values = '123'
// values = undefined
// 以下三种类型并不等价，可以通过tsconfig.json开启strictNullChecks为ture，严格限制
// string|undefined / string | null / string | undefined | null
const sumFunc = (x: number, y?: number) => {
  return x + (y || 0)
}

// const getLengthFunction = (value: string | null): number => {
//   // if (value === null) { return 0 }
//   // else { return value.length }
//   return (value || '').length
// }

// function getSplicedStr(num: number | null): string {
//   function getRes(prefix: string) {
//     // 加上! 类型断言，保护num不为null
//     return prefix + num!.toFixed().toString()
//   }
//   num = num || 0.1
//   return getRes('lison-')
// }
// console.log(getSplicedStr(3.03))

// 类型别名
type TypeString = string
let str2: TypeString
interface PositionType<T> {
  x: T
  y: T
}
const postion1: PositionType<number> = {
  x: 1,
  y: -1,
}
const postion2: PositionType<string> = {
  x: 'left',
  y: 'top',
}
// type Childs<T> = {
//   current: T
//   child?: Childs<T>,
// }
// // 树状嵌套
// let ccc: Childs<string> = {
//   current: 'first',
//   child: {
//     current: 'second',
//     child: {
//       current: 'third',
//     },
//   },
// }
// type Childs = Childs[] // error

// extends implements
interface Alias {
  num: number
}
interface Interface {
  num: number
}
let _alias: Alias = {
  num: 123,
}
let _interface: Interface = {
  num: 321,
}
_alias = _interface

// 字面量类型
type Name = 'Lison'
// const name3: Name = 'haha'
type Direction = 'north' | 'east' | 'south' | 'west'
function getDirectionFirstLetter(direction: Direction) {
  return direction.substr(0, 1)
}
// console.log(getDirectionFirstLetter('north'))

type Age = 18
interface InfoInterfaces {
  name: string
  age: Age
}
const _info: InfoInterfaces = {
  name: 'lison',
  age: 18,
}

/**
 * 可辨识联合两要素
 * 1. 具有普通的单例类型属性
 * 2. 一个类型别名包含了哪些类型的联合
 */
interface Square {
  kind: 'square'
  size: number
}
interface Rectangle {
  kind: 'rectangle'
  height: number
  width: number
}
interface Circle {
  kind: 'circle'
  radius: number
}
type Shape = Square | Rectangle | Circle
// 帮忙判断switch 参照情况写了给出报错提示
function assertNever(value: never): never {
  throw new Error('Unexpected object: ' + value)
}
// tsconfig.json开启strictNullChecks为ture，严格限制 返回类型不能为 undefined
// 如果没有开启限制，返回类型默认会是联合类型 number | undefined
function getArea(s: Shape): number {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
      break
    case 'rectangle':
      return s.height * s.width
      break
    case 'circle':
      return Math.PI * s.radius ** 2
      break
    default:
      return assertNever(s)
  }
}
