// ///<reference types="moment"/>
// import * as moment from 'moment'

declare function setTitle(title: string | number): void

declare function getTitle(): string

declare let documentTitle: string

// 修改全局依赖
interface String {
  getFirstLetter(): string
}
