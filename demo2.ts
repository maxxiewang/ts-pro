{
  let arr:string[] = []
  arr[0] = '1'
 
}

interface yoko{
  arr:string[],
  aa:number
}
function add(args:yoko){
  return args[0]
}
let params = {
  arr:['2'],
  aa:33
}
add(params)

let buu:number

interface Person {
  name: string;
  age: number;
}

const sem: Person = { name: 'semlinker', age: 30 };

type Sem= typeof sem; // -> Person

class Person{
  name:string
  age:number
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
}

class Coder extends Person{
  job:string
  constructor(name:string,age:number,job:string){
    super(name,age)
    this.job = job
  }
  getJob():string{
    return `${this.name}是使用的${this.job}`
  }
}

let YuZhu = new Coder('玉柱',20,'java')
console.log(YuZhu.getJob())
console.log(YuZhu)

const create = <T>(c:{new():T}):T =>{
  return new c()
}

// create<string>(new String('abc'))
const getVeg = (color:string,veg?:string)=>{
  return `${color},${veg?veg:''}`
}
console.log(getVeg('blue'))