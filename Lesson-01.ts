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

// 对象与组合类型的声明
let obj1:object = {}
obj1 = [] // object 后期再更改也可以

let obj2:{name:string,age?:number} // 对象里面的可选参数
obj2={name:'11'}

// 组合类型
let obj3:Array<string | number> // 泛型里面再组合

// any类型
let obj4:Array<any> // 可以放入任何类型的数组

class Hd{
  constructor(){}
  get =()=> 'didi.com'
}
const obj5:any = new Hd() //const obj5: any ,对obj5没有做类型限定

// console.log('1......', obj5.show()) // 由于前面有了any，所以自动类型推断并不会认定为错，但TSC编译也会直接报错
obj5.get()

// unknown是不知道，any是任何
let tst:unknown = 'aaaa'
let b:string = tst as string // as 类型断言

let tst2:string = '99'
// 使用类型断言要非常了解变理的类型，否则会引发错误
let bb:number = tst2 as unknown as number  // 奇怪的类型转换成功方法，利用中间层unkown做一个转换
console.log('bb...',bb)

function run():string | void {
  return 'a' // 注意void的用法，不返回值，或理解为返回的是Null或者undefined
}

/* 
  函数 Function
*/
let fun1 = ()=> 'aa'
let fun2:Function // 函数大写
// 函数的参数，当有默认值的情况下，就不要设置可选参数了 
function sum1(a:number,b:number, d?:number, c:number = 2){
  return (a + b)*c
}

function sum3(a:number,b:number, d?:number, c:number = 2):string{
  return ((a + b)*c).toString()
}

let msg1 = ():void =>{
  console.log('msg...')
}


// type与接口的区别，type主要是对对象和函数进行声明 
type userType ={name:string, age:number} // 把对象结构用type关键字进行声明

let updateUser = (user:userType):void =>{
  console.log('更新用户')
}
