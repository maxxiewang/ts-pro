/* 
  Generics 泛型
*/
let list1:number[] = [1,2,3,4]
let list2:Array<number> = [1,2,3,4] // 类型加个<> 即为泛型

//arr:Array<number|string>
//<T>(arr:Array<T>)

let lastInArray = <T>(arr:T[])=>{
  return arr[arr.length -1]
}
const l1 = lastInArray([1,2,3,4])
const l2 = lastInArray(['a','b','c'])
const l3 = lastInArray<string|number>(['a','b','c'])

let makeTuple = <T,Y = number>(x:T,y:Y)=> [x,y]
const v1 = makeTuple(1,'2')
const v2 = makeTuple<boolean,number>(true,2)


/* 
  枚举的练习
*/

enum Roles{
  ADMIN,
  USER = '用户信息',
  TOURIST = 5
}
const superAdmin = Roles.ADMIN
console.log(superAdmin) // 0
console.log(Roles[0])  // ADMIN
console.log(Roles.USER) // '用户信息'
console.log(Roles[5]) // TOURIST
console.log(Roles.TOURIST) // 5


