## 发包过程

## 1. 初始化
```
npm init -y
tsc --init
```

## 2.编译
```
tsc  // tsc test.ts 可以指定文件
```

## 3.执行
```
node // node text.js 
```

## 4.发包
```
npm login
npm publish
```

## 5.报错
- 如果 on 后面不是 https://registry.npmjs.org/ ，而是其他的镜像，比如我们大家常见的淘宝镜像： https://registry.npm.taobao.org/，则需替换成原来的，对应命令
```
npm config set registry https://registry.npmjs.org/
```