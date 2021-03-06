/* 
  泛型 generics
*/

function dump<T>(arg:T):T{
  return arg
}

// dump<string>('sksk')

function getLength<T extends {length:number}>(arg:T):number{
  return arg.length
}

// let res3 = getLength(11) // 像这种情况，编译会通不过去，但IDE不会提醒错误
// let res3 = getLength('yaa')
 
// console.log(res3)

type Atype = { length: number}
// let aab:Atype = 22 // 报错



function getUser() {
  return {name: 'xxx', age: 10}
}

console.log(typeof getUser)
type GetUserType = typeof getUser;
type ReturnUser = ReturnType<GetUserType>

const FETCH_RECOMMEND_PRODUCTS_START = 
"FETCH_RECOMMEND_PRODUCTS_START"
console.log(typeof FETCH_RECOMMEND_PRODUCTS_START)


