## typescript-course-study

> 学习源码主要参照[TypeScript完全解读](https://segmentfault.com/ls/1650000018455856/l/1500000018451292)

## 构建
- tsc指令依赖typescript库，前提是全局安装`sudo npm install typescript -g`，生成**tsconfig.json**
1. `npm init -y` 
2. `tsc --init`

## 运行 
- 可以通过安装**cross-env**给`process.env.NODE_ENV`赋值，例如`cross-env NODE_ENV=development`
1. 本地开发 `npm start`
2. 打包 `npm run build`

## 规则
- tslint指令依赖tslint库，前提是全局安装`sudo npm install tslint -g`，生成**tslint.json**
1. `tslint --init` 