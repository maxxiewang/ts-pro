/*
  Generics 泛型
*/
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4]; // 类型加个<> 即为泛型
//arr:Array<number|string>
//<T>(arr:Array<T>)
var lastInArray = function (arr) {
    return arr[arr.length - 1];
};
var l1 = lastInArray([1, 2, 3, 4]);
var l2 = lastInArray(['a', 'b', 'c']);
var l3 = lastInArray(['a', 'b', 'c']);
var makeTuple = function (x, y) { return [x, y]; };
var v1 = makeTuple(1, '2');
var v2 = makeTuple(true, 2);
/*
  枚举的练习
*/
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles["USER"] = "\u7528\u6237\u4FE1\u606F";
    Roles[Roles["TOURIST"] = 5] = "TOURIST";
})(Roles || (Roles = {}));
var superAdmin = Roles.ADMIN;
console.log(superAdmin); // 0
console.log(Roles[0]); // ADMIN
console.log(Roles.USER); // '用户信息'
console.log(Roles[5]); // TOURIST
console.log(Roles.TOURIST); // 5
