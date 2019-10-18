// const getFullName = ({ firstName, lastName }) => {
//     return `${firstName} ${lastName}`
// }
// console.log(getFullName({
//     firstName: 'haha',
//     lastName: 18,
// }))
interface NameInfo {
  firstName: string
  lastName: string
}

const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}

getFullName({
  firstName: 'haha',
  lastName: 'li',
})

interface Vegetable {
  color?: string
  readonly type: string // 只读
  // [prop: string]: any // 可以接收任意N个属性，但必须包括以上两个
}

const getVegetables = ({ color, type }: Vegetable) => {
  return `A ${color ? color + ' ' : ''}${type}`
}

const vegetableInfo = {
  type: 'tomato',
  color: 'red',
  size: 2,
}

let vegetableObj: Vegetable = {
  type: 'tomato',
}
// vegetableObj.type = 'carrot'

interface ArrInter {
  0: number
  readonly 1: string
}

let arr: ArrInter = [1, 'a']
// arr[1] = 'b'

// 类型属性检测
// console.log(getVegetables(vegetableInfo))

type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2

// interface RoleDic {
//     [id: number]: string
// }
// const role1: RoleDic = {
//     'a': 'super_admin',  // key 必须是number类型
// }
interface RoleDic {
  [id: string]: string
}
const role2: RoleDic = {
  a: 'super_admin',
  1: 'admin', // 数值类型key默认会转为字符串类型
}

interface Vegetables {
  color: string
}
interface Tomato extends Vegetables {
  radius: number
}
interface Carrot extends Vegetables {
  length: number
}
const tomato: Tomato = {
  radius: 1,
  color: 'red',
}
const carrot: Carrot = {
  length: 2,
  color: 'orange',
}

// 混合接口
interface Counter {
  (): void  // 没有返回值
  count: number  // 属性
}

const getCounter = (): Counter => {
  const c = () => {
    c.count++
  }
  c.count = 0
  return c
}
const counter: Counter = getCounter()
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)
