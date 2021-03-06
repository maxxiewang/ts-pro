/*
  tsc demo.ts -w  可以开启监听状态，动态编译TS文件
*/
var str1; // 也可
// 类型推断-数组
var arr11 = ['yoko'];
// arr11.push(11)  //报错
var arr12 = ['mimo', 11, true];
var arr14 = []; // 声明类型的空数组
var arr15; // 利用泛型限定数组类型
arr14.push(11);
// 类型推断-对象
var user = { name: 'yoko', age: 14, status: true,
    lesson: [{ title: 'Eng' }] };
// user.name = 11 //报错
user.lesson.push({ title: 'JAP' });
// 对象与组合类型的声明
var obj1 = {};
obj1 = []; // object 后期再更改也可以
var obj2; // 对象里面的可选参数
obj2 = { name: '11' };
// 组合类型
var obj3; // 泛型里面再组合
// any类型
var obj4; // 可以放入任何类型的数组
var Hd = /** @class */ (function () {
    function Hd() {
        this.get = function () { return 'didi.com'; };
    }
    return Hd;
}());
var obj5 = new Hd(); //const obj5: any ,对obj5没有做类型限定
// console.log('1......', obj5.show()) // 由于前面有了any，所以自动类型推断并不会认定为错，但TSC编译也会直接报错
obj5.get();
// unknown是不知道，any是任何
var tst = 'aaaa';
var b = tst; // as 类型断言
var tst2 = '99';
// 使用类型断言要非常了解变理的类型，否则会引发错误
var bb = tst2; // 奇怪的类型转换成功方法，利用中间层unkown做一个转换
console.log('bb...', bb);
function run() {
    return 'a'; // 注意void的用法，不返回值，或理解为返回的是Null或者undefined
}
/*
  函数 Function
*/
var fun1 = function () { return 'aa'; };
var fun2; // 函数大写
// 函数的参数，当有默认值的情况下，就不要设置可选参数了 
function sum1(a, b, d, c) {
    if (c === void 0) { c = 2; }
    return (a + b) * c;
}
function sum3(a, b, d, c) {
    if (c === void 0) { c = 2; }
    return ((a + b) * c).toString();
}
var msg1 = function () {
    console.log('msg...');
};
var updateUser = function (user) {
    console.log('更新用户');
};
var addUser = function (user) {
    console.log('新增用户');
};
var add1 = function (name, age) {
    console.log("\u589E\u7684\u7528\u6237\u4E3A\uFF1A" + name + "\uFF0C\u5E74\u9F84\u4E3A" + age);
    return age;
};
add1('yoko', 18);
// 函数的结构定义
var hhd; // 这样也可以，但没有细节
var hdv; // 定义了一个函数，且后面那个是返回值Number
hdv = function (x, y) {
    return x + (Number(y));
    // return x+y
};
// rest 剩余参数必须是数组类型
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return 3;
}
sum(1, 2, 3);
// 练习剩余参数 
function push(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    arr.push.apply(arr, args);
    console.log(arr);
    return arr;
}
push(['ff'], 'aa', 11, { 'aa': '1' });
// 元组Tuple
var tuple1 = ['ab', 11, true];
// tuple1[0] = true 报错
