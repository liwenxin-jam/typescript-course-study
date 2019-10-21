// const s1 = Symbol()
// console.log(s1)

// const s2 = Symbol()
// console.log(s2)

// console.log(s1 === s2)

// const s3 = Symbol({ a: 'a' })
// console.log(s3)

// Symbol(stirng | number) 参数只能是string 或者 number，如果是object，会转化为字符串"[object Object]"
// const s4 = Symbol('lison')

// console.log(s4.toString())
// console.log(Boolean(s4))
// console.log(!s4)

let prop = "name";
const info = {
  // name: 'lison'
  [`my${prop}is`]: "lison",
};
// console.log(info)

const s5 = Symbol("name");
const info2 = {
  [s5]: "lison",
  age: 18,
  sex: "man",
};
// console.log(info2)
info2[s5] = "haha";
// console.log(info2)
// info2.s5 = 'lison'

for (const key in info2) {
  // console.log(key)
}

// console.log(Object.keys(info2))

// console.log(Object.getOwnPropertyNames(info2))

// console.log(JSON.stringify(info2))

// 以上4种方式都是获取不到symbol的key
// -------------------------------------------------------------

// console.log(Object.getOwnPropertySymbols(info2))

// console.log(Reflect.ownKeys(info2))  // 包含symbol的key

// Symbol.for() Symbol.keyFor()

const s6 = Symbol("lison");
const s7 = Symbol("lison");

const s8 = Symbol.for("lison");
// 全局查找有没有相关的symbol值，有的话直接返回，没有是新增
// const s9 = Symbol.for('lison')  // s8 === s9 true
// const s10 = Symbol.for('haha')  // s8 === s10 false

// console.log(Symbol.keyFor(s6)) // 输出 undefined
// console.log(Symbol.keyFor(s8)) // 输出 lison

// instanceof
const obj1 = {
  [Symbol.hasInstance](otherObj) {
    console.log(otherObj);
  },
};
// console.log({ a: 'a' } instanceof <any>obj1)

// let arr = [1, 2]
// console.log([].concat(arr, [3, 4]))
// console.log(arr[Symbol.isConcatSpreadable])
// arr[Symbol.isConcatSpreadable] = false
// console.log([].concat(arr, [3, 4]))
// console.log(arr[Symbol.isConcatSpreadable])

class C extends Array {
  constructor(...args) {
    super(...args);
  }
  static get [Symbol.species]() { // 浏览器下需要屏蔽
    // 创建原生对象的函数
    return Array;
  }
  public getName() {
    return "lison";
  }
}
const c = new C(1, 2, 3);
const a = c.map((item) => item + 1);
// console.log(a)
// console.log(a instanceof C) // ts 认为是 false，es6 认为是 true
// console.log(a instanceof Array)

let obj3 = {
  [Symbol.match](str) {
    console.log(str.length)
  },
  [Symbol.split](str) {
    console.log('split', str.length)
  },
};
"abcde".match(obj3 as RegExp);

// Symbol.replace
// Symbol.search
// Symbol.split

"abcde".split(obj3 as any);

// const arr = [1, 2, 3];
// const interator = arr[Symbol.iterator](); // iterator可遍历数组，相当于generator
// console.log(interator);
// console.log(interator.next());
// console.log(interator.next());
// console.log(interator.next());
// console.log(interator.next());

let obj4: unknown = {
  [Symbol.toPrimitive](type) {
    console.log(type);
  },
};
// const res = (obj4 as number)++  // number
// const res = `abc${obj4}`  // node下 default 浏览器下 string

let obj5 = {
  get [Symbol.toStringTag]() {
    return "jam";
  },
};
// console.log(obj5.toString())  // [object jam]

const obj6 = {
  a: "a",
  b: "b",
};
// 打印补过滤掉的原型方法，例如fill keys includes find findIndex等等
console.log(Array.prototype[Symbol.unscopables]);
