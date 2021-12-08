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




class Queue {
  private data = [];
  push = (item) => this.data.push(item);
  pop = () => this.data.shift();
}

const queue = new Queue();

queue.push(0);
queue.push('1'); // Oops，一个错误
console.log(queue.pop().toPrecision(1));
// console.log(queue.pop().toPrecision(1)); // RUNTIME ERROR

let myFavoriteNumber: string | number

myFavoriteNumber = 'abcd'
myFavoriteNumber = 123

interface Person1 {
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let tom: Person1 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let sfun:SearchFunc = (str1:string,str2:string)=>{
  return false
}
console.log('>>>',sfun('asdf','asdf'))
