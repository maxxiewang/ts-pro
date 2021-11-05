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

// 类型的继承

