// 属性与方法的修饰符
// 标准写法要用public修饰一下，即不写就是public，公开的
class Stu{
  public name:string
  public age:number
  constructor(n:string,age:number){
    this.name = n
    this.age = age
  }
  public info(){
    return `${this.name} is ${this.age}`
  }
}
const lily = new Stu('xioli',20)

for (const key in lily) {
  if(lily.hasOwnProperty(key)){
    console.log(lily[key])
  }
}

/* 
  类型的继承
*/
// interface LenthInterface {length:number}
// T extends LengthInterface
function getMyLength<T extends string>(arg:T):number{
  return arg.length
}
// console.log(getMyLength(1)) 只适用于数组或字符串等等单一，只能使用联合类型解决
// 继承之后得到的是一个类型
// 使用联合类型解决
function getLength1<T extends string | any[]>(arg:T):number{
  return arg.length
}

// 这种方法其实还不错
function getMyLength2<T extends {length:number}>(arg:T):number{
  return arg.length
}

getMyLength2([12])

// 泛型与数组，使用泛型在使用时，要传递，传递什么类型即使用什么类型
// 泛型就是，我们把类型赋值给泛型的时候，得先满足规范才能赋值成功
function getMyLength3<T extends string | any[]>(arg:T):number{
  return arg.length
}
function getMyLength4<T extends string | string[]>(arg:T):number{
  return arg.length
}
getMyLength3(['s4r','11',33])
getMyLength3('11')

// 类中使用泛型

// 1、约束比较大的传统写法
class Collections{
  data:number[] = []
  //rest 参数必须是数组类型
  public push(...items:number[]){
    this.data.push(...items)
  }
}
const numCollections = new Collections()
numCollections.push(2,3,3,3,3,12,1)

// 2、利用泛型解决
class Collections1<T>{
  data:T[] = []
  //rest 参数必须是数组类型
  public push(...items:T[]){
    this.data.push(...items)
  }
  public shift():T|undefined {
    return this.data.shift()
  }
}

type Users={name:String; age:number}

const user1:Users = {name:'yko',age:18}
const user2:Users = {name:'yko',age:18}


const collections = new Collections1<Users>()

collections.push(user1,user2)

console.log(collections)

/* 
  接口中使用泛型与泛型的多类型定义
*/
interface ArticleInterface<T,C> {
  title:string,
  isLock:T,
  comments:C[]
}

type CommentType = {
  content:string,
  author?:string
}

const myArticle:ArticleInterface<boolean,CommentType> = {
  title:'title',
  isLock:true,
  comments:[{content:'这是一个评论',author:'tida'}]
}
console.log(myArticle)

/* 
  readonly的使用
  构造函数在初使化的时候是可以改变readonly的
*/
class Axio1s{
  constructor(public name:string){
    this.name = name
  }
}

/* 
  单例模式
  通过静态属性结合把构造方法封装起来，阻止外部实例化对外像
*/

class Axios{
  private static instance: Axios|null =null
  private constructor(public num:number){
    console.log('构造')
    this.num = num
  }
  static make(num:number):Axios{
    if(Axios.instance == null){
      console.log('创建实例')
      Axios.instance = new Axios(num)
    }
    return Axios.instance
  }
}
const as1 = Axios.make(1)
const as2 = Axios.make(2)
console.log(as2)
const as3 = Axios.make(3) // 无论如何，最后只会执行一次

