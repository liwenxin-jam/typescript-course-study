// export const name = 'jam'
// export const age = 18
// export const address = 'guangzhou'
const name = 'jam'
const age = 18
const address = 'guangzhou'

export {
  name,
  age,
  address
}

export function func() {}
export class A {}

function func1() {}
class B {}
const b = ''
// 一个文件可以有多个 export 对象属性，但只有有一个 export default
export {
  func1 as Function1,
  B as ClassB,
  b as StringB,
  b as String
}

// export 'jam' // error
// const name = 'jam'
// export name // error