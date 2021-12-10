// 一次性定义多个范型
function swapa(params) {
    return [params[1], params[0]];
}
swapa([7, 'seven']); // ['seven', 7]
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// loggingIdentity(7);
var me = ["大圣", 18, 33, ''];
var name33;
var per01 = {
    name: '张三',
    age: 18
};
console.log(per01['name'], per01.name);
var role = {
    0: "super_admin",
    1: "admin"
};
// role[1] = "super_admin"; // Cannot assign to '0' because it is a read-only property
console.log(role['1']); // 这里面用role[1] 与role['1']是一样的
/*
  Type:类型别名
  类型别名只是给类型取了一个别名，并不是创建了一个新的类型，
  与接口的区别： 重复定义接口，会使属性叠加。而类型别名不可重复定义
*/
/*
    内置条件类型     预定义的有条件类型
    TypeScript 2.8在lib.d.ts里增加了一些预定义的有条件类型：
    Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
    Extract<T, U> -- 提取T中可以赋值给U的类型。
    NonNullable<T> -- 从T中剔除null和undefined。
    ReturnType<T> -- 获取函数返回值类型。
    InstanceType<T> -- 获取构造函数类型的实例类型。
*/
// 重点：ReturnType：获取函数返回值的类型
function getUser() {
    return { name: 'xxx', age: 10 };
}
