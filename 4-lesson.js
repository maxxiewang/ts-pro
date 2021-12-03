/*
  泛型 generics
*/
function dump(arg) {
    return arg;
}
// dump<string>('sksk')
function getLength(arg) {
    return arg.length;
}
// let aab:Atype = 22 // 报错
function getUser() {
    return { name: 'xxx', age: 10 };
}
console.log(typeof getUser);
var FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START";
console.log(typeof FETCH_RECOMMEND_PRODUCTS_START);
