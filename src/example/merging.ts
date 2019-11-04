interface InfoInter {
  name: string
  getRes(input: string): number
}
interface InfoInter {
  // age: number  // 接口重复定义，不同属性会合并接口
  name: string // 相同属性必须类型一致
  getRes(input: number): string // 函数重载
}
// 接口重复定义，会合并接口
let infoInter: InfoInter
infoInter = {
  name: 'jam',
  getRes(text: any): any {
    if (typeof text === 'string') {
      return text.length
    } else {
      return String(text)
    }
  },
}
// console.log(infoInter.getRes('123'))

// 分别定义相同名字的命名空间，也会合并
// namespace Validations {
//     export const numberReg = /^[0-9]+$/
//     export const checkNumber = () => {}
// }
// namespace Validations {
//     console.log(numberReg) // 当上边有export导出才允许访问，因为已经合并了。 但没导出是没法访问的
//     export const checkLetter = () => {}
// }

// 类与命名空间同名，类必须先定义。两者也会合并
// class Validations {
//     constructor() {}
//     public checkType() {}
// }
// namespace Validations {
//     export const numberReg = /^[0-9]+$/
// }
// console.dir(Validations.numberReg)

// 函数与命名空间同名，函数必须先定义。两者也会合并
function countUp() {
  countUp.count++
}
namespace countUp {
  export let count = 0
}
// console.log(countUp.count)
// countUp()
// console.log(countUp.count)
// countUp()
// console.log(countUp.count)

// 枚举与命名空间同名，两者没有要求谁先定义。两者也会合并
enum Colors {
  red,
  green,
  blue,
}
namespace Colors {
  export const yellow = 3
}
console.log(Colors)
