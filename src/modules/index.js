// import { time } from './b'
// setInterval(() => {
//   console.log(time)
// }, 1000)

// 使用as别名
// import { name as nameProp, age, info } from './c'
// import './d'
// info.name = 'haha' // 对象引入是可以更改属性的，但不建议这样修改
// console.log(nameProp, age, info)

// getName()
// import { getName } from './e'

// import { 'get' + 'Name' } from './e'

// import { name } from './c'
// import { age } from './c'
// import { name, age } from './c' // 会自动合并加载

// 可以使用*号把所有export加载进来
// import * as info from './c'

// export { name as default } from './c'
// // 以下两句等价于前句复合语句
// import { name } from './c'
// export default name

// export { name, age } from './c'
// // 以下两句等价于前句复合语句
// import { name, age } from './c'
// export { name, age }