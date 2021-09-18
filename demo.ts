/* 
  第三章 变量声明
    新的，基础类型 enum any void tuple never
         高级类型 union组合类型，Nullable 可空类型，Literal 预定义类型

*/


let num1 = 1
let num2 = 2

function add(n1:number,n2:number){
  return n1+n2
}
// console.log(add(num1,num2))

let isTrue:boolean

let total:number = 0
let firstName:string = 'yoko'

// 数组与元祖
let arr1:number[]= [1,2,3,4]
let arr2:Array<number> = [1,2,3,4]
let arr3 = [1,'78']
let arr4:any = [1,2,'3']


let person1:[number,string] = [1,'yoko'] // 简单的元组类型，固定长度，固定类型的数组
// person1[0] = 'koko'
// person1[1] = 11
// person1[2] = 12 // 以上全部报错
// 元祖的好处是可以很自然地利用数组下标形成key-value的类型。但元组还有bug
person1.push(13) // 不报错，且编译通过。声明元组一定要指明数据类型，
let person2 = [1,'yoko'] //这并不是元组类型，而是一个union array
person2[0] = 'yyy'

// 3-5 联合类型
let union :string | number
let union3:1|2|3|'hello' // 联合类型还可以限定取值
union3 = 'hello'

// 字面量类型：几个确定值的联合类型（不仅划定了数据类型，还确定了取值范围） literal与联合类型配合会产生强大的效果
let literal1:true|1
// literal1 = 2  报错，
literal1 = true // 正确
// literal1 = false 
let literal2:1
literal2 = 1
console.log('literal2',literal2)

/* 枚举类型 Enum
   数字与字符串也可以混合
   配合switch语句很好用
*/
enum Color {
  red = 2,
  green = 9,
  blue,
  balck = 'balck'
}
let color = Color.blue
console.log('color=',color) // color=2

/* 
  动态类型： any和unknow
  加还开发过长，避免太冗长的类型定义。
  any比较适合代码的快速成型，unknown会更保险，可以保证类型的安全
*/
let randomVal:any = 666
randomVal = 'did!!'
// randomVal()
randomVal.name
// randomVal.toUperCase()
console.log('randomVal',randomVal)

// unknown 不保证类型，但可以保证类型安全
let randomVal2:unknown = 666
randomVal2 = 'did!!'
randomVal2 = {}
randomVal2 = []
// randomVal2()
// randomVal2.name
// randomVal2.toUperCase() 皆报错


/* 
  void，undefined 与 never
  原生没有void这个类型，而在typeScript中，void这个类型的输出都是undefined

  */

 function printResult():void {
   console.log('rpitnany')
 }
 printResult()
 console.log('printRes',printResult)

 // 真正的类型是never
 function throwError(msg:string,errorCode:number):never{
   throw {
     msg,
     errorCode
   }
 }
//  throwError('not fount',404)

 // 不太常用，大部分用来处理异常或Promise
function whileLoop():never{
  while(true){
    console.log('loop....')
  }
}

/* 
  类型断言： Type Assertions，主要用于类型的适配工作（不是类型转换）
*/
let msg:any;
msg = 'abc'
// msg.concat(msg,'d')

// let msg2 = (<string>msg).endsWith('d')
// console.log(msg2)
// 使用类型断言要非常了解变理的类型，否则会引发错误
let res = (msg as string).toUpperCase()
console.log('res',res)

/* 
  函数：可以给入参指定类型
  与JS不同的时，如果定义了两个及以上参数，则必须按规定传参，我指定默认值呢？？
*/
let log = (msg:string) => console.log(msg)

// 参数的可选性
let log2 = (msg:string,code?:number) => console.log(msg)

// 不管是可选参数，还是默认参数 ，都必须放在末尾
let log3 = (msg:string,code:number = 0) => console.log(msg)


log3('dk')
// log(1) 错误

/* 
  TypeScript 面向对象
  TS对对象类型的定义不是key-value，而是key-type键类型对
  在TS中，定义后不仅是个对象实例，是有且仅有定义时的那几个属性，且有相对应的类型。
  定义为Object比any更为精确，可以认为Object是any类型的子集
*/
let person:{
  firstName:string,
  age:number
}

// person.age = 11

// 如果不怕麻烦，也可定义成如下类型
const per2:{
      firstName:string,
      age:number
    } = {
      firstName:'tony',
      age:11
    }  // 显式声明类型及值

  /* 
    接口:对函数参数加以限制
      对象的聚合问题，功能相关的事务，放在同一个集合中形成一个模块。
      模块之前应该是互相独立，保持低耦合的状态。
    */
  interface Point{
    x:number,
    y:number
  }
  let drawPoint = (point:Point)=>{
    console.log({ x:point.x, y:point.y })
  }
  drawPoint({x:23,y:11})

  let drawPoint2 = ()=>{

  }

  /* 
    Clss类
  */

  interface IPoint {
    x:number,
    y:number,
    drawPoint:()=>void;
    getDistance:(p:IPoint)=>number
  }

  class Point2 implements IPoint{
    x:number;
    y:number;
    // js的构重函数不可以重载，把加？变成可选参数或是赋给默认值就变的很重要
    // 通过访问修饰符，在声明构造函数的同时，顺便完成成员变量的声明以及初始化
    // 即在构造函数的声明时，加上public private protected
    constructor(x?:number,y?:number){
      this.x = x
      this.y = y
    }
    drawPoint = ()=>{
      console.log('x,',this.x,'y',this.y)
    }
    getDistance = (p:IPoint)=>{
      return Math.pow(p.x-this.x,2) + Math.pow(p.y-this.y,2)
    }
  }

  const pint = new Point2(2)
  pint.drawPoint()

  // 通过访问修饰符，在声明构造函数的同时，顺便完成成员变量的声明以及初始化

  class PointTwo implements IPoint{
    // js的构重函数不可以重载，把加？变成可选参数或是赋给默认值就变的很重要
    // 通过访问修饰符，在声明构造函数的同时，顺便完成成员变量的声明以及初始化
    // Access Modifier 即在构造函数的声明时，加上public private protected
    constructor(public x:number, public y:number){
    }
    drawPoint = ()=>{
      console.log('x,',this.x,'y',this.y)
    }
    getDistance = (p:IPoint)=>{
      return Math.pow(p.x-this.x,2) + Math.pow(p.y-this.y,2)
    }
  }

  /* 
    Access Modifier 在默认情况下，都是public
    当修饰为private的时候，只能使用getter setter才能访问成员变量
  */
  // const pw2 = new PointTwo(2,3)
  // pw2.x = 11
  // pw2.y = 99 // 实际工作中是很危险的
