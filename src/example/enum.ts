const test = 1
const getIndex = () => {
  return 2
}
enum Status {
  // 不指定第一个默认为0，后面依次+1
  Uploading = 3,
  // 也可以从中间或者其它位置开始指定，前面是默认从0开始算起
  Success = getIndex(), // 如果是使用函数表达式获取索引，后面的枚举也必须需要手动指定索引
  // 也可以全部指定不同数字
  Failed = 5,
}
// console.log(Status.Uploading)
// console.log(Status.Success)
// console.log(Status.Failed)

// console.log(Status)

enum Message {
  Error = 'Sorry, error',
  Success = 'Hoho, success',
  Failed = Error, // 跟前面Error是保持一致的，可以使用常量或者变量
}
// console.log(Message.Failed)

enum Result {
  Faild = 0,
  Success = 'success',
}

// 满足这三种情况可以作为类型使用
// 1. enum E { A }
// 2. enum E { A = 'a' }
// 3. enum E { A = -1 }

enum Animals {
  Dog = 1,
  Cat = 2,
}
interface Dog {
  type: Animals.Dog
}
// const dog: Dog = {
//     // type: Animals.Cat, // 类型不匹配，只支持Animals.Dog才符合接口定义
// }

enum Status {
  Off,
  On,
}
interface Light {
  status: Status
}
// 联合枚举类型
// const light: Light = {
//     status: Animals.Dog,
// }

// 枚举加上const代表编译的时候不会真的生成对象去比较，而是直接用具体value值
const enum Animals1 {
  Dog = 1,
}
// let testDog = Animals1.Dog; // compile生成的是 var testDog = 1 /* Dog */
