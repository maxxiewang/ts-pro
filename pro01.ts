/* 
  程序更容易理解，效率更高，更少的错误（编译时发现），完全兼容JS，很好的代码提示与补全
  虽然短期增加时间成本，但长期更容易维护

*/
let isDone:boolean = true
let age:number = 21

let u:undefined = undefined //undefined和null是所有类型的子类型
let n:null = null

let num:number = undefined // 同样通过

let notSure:any = 4
notSure = 'maybe it is a string'
notSure = true
notSure.myName
// notSure.getName()

// 联合类型
let numorStr:number|string = 22
// 数组
let arrNum:number[] = [1,2,3]
// 类数组 Array like Objects
function test(){
  console.log(arguments) // arguments就是一个类数组，有一些数组的属性
}

/* 
  接口，帮我们非常方便地定义对象的类型
  对对象的形状shape进行描述
  对类class进行抽象
  Duck Typing 鸭子类型
  接口里面，要用分号，分号，分号
  ? 可选属性，可传可不传
  readonly 只读属性，对象中的字段只能在创建的时候赋值
  接口其实可以描述很多东西，函数、数组等等
*/
interface IPerson{
  readonly id:number;
  name:string;
  age?:number;
}


let viking: IPerson = {
  id:12,
  name:'asdf',
  age:22
}
// const是用在对象实例上，readonly用在属性上


/* 
  函数：Function  
*/
// 返回也是Number类型，可选参数z只能放在最后面
function add2(x:number, y:number, z?:number) :number{
  if(typeof z === 'number'){
    return x + y + z
  }else{
    return x + y
  }
}
let result = add2(2,3,4)

// 函数表达式，这个函数plus本身也有一个类型
const plus = function(x:number, y:number, z:number = 10){
  return x + y +z
}

// 下面这个 => number 不是箭头函数，是声明函数的返回类型 
const plus2:(x:number,y:number,z?:number) => number = plus

/* 
  类：Class
  原来JS是利用构造函数和原型链实现继承
  private 与 protected修饰符的不同是，protected修饰子类是可以访问
  静态属性与方法，可以不new 实例直接访问
*/
class Animal{
  protected name:string;
  static categoies:string[] = ['mammal','bird']
  static isAnimal(a){
    return a instanceof Animal
  }
  constructor(name:string){
    this.name = name
  }
  run(){
    return `${this.name} is running`
  }
}
const snake = new Animal('lily')
console.log(Animal.categoies)
console.log(Animal.isAnimal(snake))


class Dog extends Animal {
  bark(){
    return `${this.name} is barking`
  }
}
// 方法的重写，多态的特性。
class Cat extends Animal {
  constructor(name){
    super(name)
    console.log(this.name)
  }
  run(){
    return 'Meow, ' + super.run()
  }
}

const maomao = new Cat('MaoMao')
console.log(maomao.run())

/* 
 接口与实现类，定义与约束所有内容
*/
interface Radio{
  switchRadio(): void
}
interface Battery{
  checkBatteryStatus():void
}

interface RadioWtihBattery extends Radio{
  checkBatteryStatus()
}

class Car implements Radio{
  switchRadio(){

  }
}
class Cellphone implements RadioWtihBattery {
  switchRadio(){

  }
  checkBatteryStatus(){

  }
}

/* 
  枚举
*/
// 数字枚举
enum Direction{
  Up = 10,
  Down,
  Left,
  Right
}
/* 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up"; 注意看这里面JS里面的赋值运算符返回的值，就是值本身。即为这个对象本身的属性值赋为0. Direction["Up"] = 0 Direction[0] = "Up"
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));

*/
console.log(Direction.Up)
console.log(Direction[10])

// 字符串枚举
enum Direction2{
  Up = 'UP',
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
const value = 'UP'
if(value === Direction2.Up){
  console.log('go up!')
}

// 常量枚举，使用常量枚举可以提升性能，使用const关键字
const enum Direction3{
  Up = 'UP',
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

const value2 = 'UP'
if(value === Direction3.Up){
  console.log('go up33!')
}

/* 
  常量枚举与普通枚举的比较 
  只有常量值才会进行常量枚举
*/
// var Direction2;
// (function (Direction2) {
//     Direction2["Up"] = "UP";
//     Direction2["Down"] = "DOWN";
//     Direction2["Left"] = "LEFT";
//     Direction2["Right"] = "RIGHT";
// })(Direction2 || (Direction2 = {}));
// var value = 'UP';
// if (value === Direction2.Up) {
//     console.log('go up!');
// }
// var value2 = 'UP'; 常量枚举会内联枚举的任何用法，并且不会把枚举编译成代码
// if (value === "UP" /* Up */) {
//     console.log('go up33!');
// }


/* 
  Generics 泛型，动机：
  在预先定义函数、接口或类的时候，不预先指定类型，而是在使用的时候指定类型
*/
function echo<T>(arg:T):T{
  return arg
}
// const str:string = 'str'
// const result2 = echo(str)
const result2 = echo('str') // 类型推论

function swap<T,U>(tupple:[T,U]):[T,U]{
  return [tupple[0],tupple[1]]
}
const result3 = swap(['apple',123]) //const result3: [string, number]
result3[0].concat //就可以使用String上面的一些方法

/* 
  关于约束范型
*/
function echoWithArr<T>(arg:T[]):T[]{ // 函数作用给含用T类型的Array
  console.log(arg.length)
  return arg
}
const arrs = echoWithArr(['str1','str2']) // 返回一个字符串数组
const arrs2 = echoWithArr([1,2,3]) // 返回一个数字类型数组

// 设一个函数，只允许传入包含length属性的变量

interface IWithLength {
  length:number  
}
function echoWithLength<T extends IWithLength>(arg:T):T{
  console.log(arg.length)
  return arg
}
const str = echoWithLength('str')
const obj = echoWithLength({length:10 , width:10}) // 同样通过
const arr5 = echoWithLength(['1',2])
const arr6 = echoWithLength([1,2]) // 以上皆通过，体现了duck typing ，只要你有length这个属性，符合这个约束，就可以

// 泛型在其它方面的应用，1；在类上面的应用
// 使用泛型类
class Quene<T> {
  private data = []
  push(item:T){
    return this.data.push(item)
  }
  pop():T{
    return this.data.shift()
  }
}

const quene = new Quene<Number>()
quene.push(1)
console.log(quene.pop().toFixed())

const quene2 = new Quene<String>()
quene2.push('str')
console.log(quene2.pop().toUpperCase())

// 2：接口里面使用泛型
interface KeyPair<T,U>{
  key:T
  value:U
}
let kp1: KeyPair<number,string> ={key:123 , value:'str'}
let kp2: KeyPair<string,number> ={key:'test', value:123}

let arr:number[] = [1,2,3]
let arrr1:Array<number> = [1] // 这个例子和接口有什么关系？？？Array<number>提示是接口

interface IPlus{
  (a:number,b:number):number
}
function pluss(a:number,b:number):number{
  return a+b
}

const a:IPlus = pluss // 用接口描述函数的类型

/* 
  类型别名 type aliases
  常用的场景是联合类型
*/
type PlusType = (x:number, y:number) => number
function sum2(x:number, y:number):number {
  return x+y
}
const sum22:PlusType = sum2

type NameResolver = ()=> string
type NameOrResolver = string|NameResolver

function getName(n: NameOrResolver):string{
  if(typeof n === 'string'){
    return n
  }else{
    return n()
  }
}

// 类型断言 type assertion
function getLength(input:string|number):number {
  // const str = input as String // 这算是接口的写法 , 而as关键字就是断言
  // if(str.length){
  //   return str.length
  // }else{
  //   const number = input as Number
  //   return number.toString().length
  // }
  if((<string>input).length){ //　整体的把input断言为string
    return (<string>input).length
  }else{
    return input.toString().length
  }
}

// 关于第三方的声明文件