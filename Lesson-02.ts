/* 
  第二章，枚举与断言
*/
enum SexType {
  boy,
  girl
}

console.log(SexType.boy) // 0，枚举编号，默认从0开始

enum SexType1 {
  boy ='男',
  girl = '女'
}

enum ST{
  boy = 9,
  girl = '11'
}
console.log(SexType1.boy) // 男，第一赋完初始值后，后面也需要设置。枚举一般都是统一的，都是number或都是string

console.log(ST.girl) // 自增变为10

let hd2 = (arg:boolean):string|number => {
  return arg? 'ToDo':2021
}
let res2 = hd2(true) as number

console.log(typeof res2) // as number断言也没用，咋样都是ToDo了

// const断言，宽泛类型与值类型
let str11:string = 'aa'
let str22:'strr' // str22的值只能是strr，值类型
let str3 = 'yoko' as const // 直接断言成值类型
let str4:string = 'yokoo'
str4 = '23'

const str5 = 'domain'
// str5 = 'asdf' // 无法分配到 "str5" ，因为它是常数
const arr33 = [str11,11] as const // 数组中使用as const后，数组变成元组,readonly

let aa = 'hh'
let bba = 22

// 以下皆为把普通的数组变为元组
let arrary1 = <const>[aa,bba]
let array2 = [aa,bba] as const

// 以下体现了断言思想
function fun11() {
  let a = 'hhh'
  let b = (x:number,y:number):number => x+y
  return [a,b]
}
const [nn,mm] = fun11()
// mm(1,2)  // 系统推断可能是字符串也可能是函数，所以直接以函数调会报错
const [xx,yy] = fun11();
// (yy as Function)(1,2) // 以方式1断言
const [cc,zz] = fun11() as [string,Function] // 以方式2断言,对函数的返回值进行断言

/* 
  在使用as const中，可以把宽泛类型断言为值类型，把普通数组断言为元组
*/

// 可以在tsconfig.json中配置对null与undefied的处理，非空断言

let hhi:string

// 方式1，通过断言的方式告诉编译器，不会有空就是html元素
const el:HTMLElement = document.querySelector('.hdd') as HTMLElement
// 方式2，以感叹号的形式告诉编译器，这里是非空的
const el2:HTMLElement = document.querySelector('.he')!

//let body: Element | null
let body = document.querySelector('.body') as HTMLBodyElement
console.log('body>>>',body)

