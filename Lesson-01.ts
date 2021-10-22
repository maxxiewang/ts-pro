/* 
  tsc demo.ts -w  可以开启监听状态，动态编译TS文件
*/
let str1:string // 也可

// 类型推断-数组
let arr11 = ['yoko']
// arr11.push(11)  //报错

let arr12 = ['mimo',11,true]

let arr14:(string|number)[] = [] // 声明类型的空数组
let arr15:Array<string> // 利用泛型限定数组类型
arr14.push(11)

// 类型推断-对象
const user = { name:'yoko', age:14, status:true,
  lesson:[{title:'Eng'}]}
// user.name = 11 //报错
user.lesson.push({title:'JAP'})