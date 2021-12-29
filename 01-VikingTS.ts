
const isDone1: boolean = true;

// undefiend 和 null 是所有类型的子类型
let un1: undefined = undefined
let num332: number

// 接口里面到时是用分号还是逗号无所谓
interface Iperson {
  name: string;
  age: number
}

let xiaomi: Iperson = {
  name: 'xioami',
  age: 22
}
console.log(xiaomi)

//! 其实是这个addParams本身也是个类型
const addParams = (x: number, y: number, z?: number) => {
  if (typeof z === 'number') {
    return x + y + z
  }
  return x + y
}

// 以下两种写法都可以 ，addParams就是描述了一个函数类型，我们并没有明确写这个类型，但是通过TS的类型推断推出来的
const addFun: (x: number, y: number, z: number | undefined) => number = addParams
const addFun2: (x: number, y: number, z?: number) => number = addParams

/* 
  类的练习 
*/
class Animal1 {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}

// 方法重写的练习
class Cat1 extends Animal1 {
  constructor(name: string) {
    super(name)
    console.log('Cat 的构造') // 重写构造，多加了点逻辑
  }
  run() {
    return 'Meow,' + super.run() //方法重写的同时再次调用父类的方法
  }
}
let maomao1 = new Cat1('maomao') // 所以在new的时候就是调用了构造方法的打印
console.log(maomao1.run())  // 调用run方法体验一个多态的特性


interface Radio {
  switchRadio(): void
}
interface Battery1 {
  checkStatus(): void; // 其实不写any是可以的
}

class Car1 implements Radio, Battery1 {
  switchRadio() { }
  checkStatus() { }
}

interface RadionandBattery extends Radio {
  checkStatus(): any
}
class Car2 implements RadionandBattery {
  switchRadio() { }
  checkStatus() { }
}

function echo1<T>(arg: T): T {
  return arg
}

//! 使用const和let有一些区别
const res22 = echo1('33')
let res33 = echo1('331')

// 多个范型例子
function swap22<T, U>(params: [T, U]): [U, T] {
  return [params[1], params[0]]
}

const res123 = swap22(['string', 10]) // const res123: [number, string]

// 关于范型约束的例子
interface getLength {
  length: number
}
function echoWithArr22<T extends getLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
const dktype = echoWithArr22({ length: 2 }) // 体现了duckTyping，只要你叫起来像鸭子，只要length属性符合约束，那就没有问题

function echoWithArr23<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

function echWithArr24<T extends { length: number }>(arg: T): T {
  return arg
}

// 实现一个先进行出的队列， 范型类 
class Queue2<T> {
  private data = <any>[]
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.pop()
  }
}

function plus22(a: number, b: number): number {
  return a + b
}
interface IPlusNum {
  (a: number, b: number): number
}
//接口中使用范围的例子
interface IPlusNum1<T> {
  (a: T, b: T): T
}

const numB: IPlusNum = plus22
const numA: IPlusNum1<number> = plus22

type PlusType2 = (a: number, b: number) => number
function sum12(x: number, y: number) {
  return x + y
}
const sum124: PlusType2 = sum12
const sum125: (x: number, y: number) => number = sum12 //使用type避免了这么麻烦的写法

/* 
getName函数，参数两种类型，一种是string一种是函数类型，要求返回string，如果是string就返回参数本身
如果参数是函数，就返回函数的执行结果。一个典型的联合类型，如果没有类型别名type就很难写
*/

type NameResolver1 = () => string
type NameOrResover1 = string | NameResolver1
function getName12(n: NameOrResover1): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

