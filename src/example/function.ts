// function add(arg1: number, arg2: number): number {
//     return arg1 + arg2
// }
// const add = (arg1: number, arg2: number) => arg1 + arg2
let add: (x: number, y: number) => number
add = (arg1: number, arg2: number): number => arg1 + arg2
add = (arg1: number, arg2: number) => arg1 + arg2

// interface定义，推荐用下边的类型别名方式
// interface Add {
//     (x: number, y: number): number
// }
// 类型别名
type Add = (x: number, y: number) => number
let addFunc
addFunc = (arg1: number, arg2: number) => arg1 + arg2

// 可空必须放置末尾，如果不是末尾，需要undefined填坑
type AddFunction = (arg1: number, arg2: number, arg3?: number) => number
// let addFunction: AddFunction
// addFunction = (x: number, y: number) => x + y
// addFunction = (x: number, y: number, z: number) => x + y + z

// ...rest拓展，类似于es5的arguments，只是arguments是类数组，...args是真正的数组
// const handleData = (arg1: number, ...args: number[]) => {
//     // ...
// }

// 类型重载
function handleData(x: string): string[]
function handleData(x: number): number[]
function handleData(x: any): any {
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map((item) => Number(item))
    }
}
// handleData('abc').map((item) => {
//     return item.toFixed()
// })
// handleData(123).map((item) => {
//     return item.length
// })
