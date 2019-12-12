// import arrayMap = require('../dist/xx-test-array-map')
import arrayMap = require('xx-test-array-map')

let result = arrayMap([1, 2], (item) => {
  return item + 2
})
result.forEach((item) => {
  // console.log(item.length)
  console.log(item.toFixed())
})
console.log(result)