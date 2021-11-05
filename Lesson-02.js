/*
  第二章，枚举与断言
*/
var SexType;
(function (SexType) {
    SexType[SexType["boy"] = 0] = "boy";
    SexType[SexType["girl"] = 1] = "girl";
})(SexType || (SexType = {}));
console.log(SexType.boy); // 0，枚举编号，默认从0开始
var SexType1;
(function (SexType1) {
    SexType1["boy"] = "\u7537";
    SexType1["girl"] = "\u5973";
})(SexType1 || (SexType1 = {}));
var ST;
(function (ST) {
    ST[ST["boy"] = 9] = "boy";
    ST["girl"] = "11";
})(ST || (ST = {}));
console.log(SexType1.boy); // 男，第一赋完初始值后，后面也需要设置。枚举一般都是统一的，都是number或都是string
console.log(ST.girl); // 自增变为10
var hd2 = function (arg) {
    return arg ? 'ToDo' : 2021;
};
var res2 = hd2(true);
console.log(typeof res2); // as number断言也没用，咋样都是ToDo了
// const断言，宽泛类型与值类型
var str11 = 'aa';
var str22; // str22的值只能是strr，值类型
var str3 = 'yoko'; // 直接断言成值类型
var str4 = 'yokoo';
str4 = '23';
var str5 = 'domain';
// str5 = 'asdf' // 无法分配到 "str5" ，因为它是常数
var arr33 = [str11, 11]; // 数组中使用as const后，数组变成元组,readonly
var aa = 'hh';
var bba = 22;
// 以下皆为把普通的数组变为元组
var arrary1 = [aa, bba];
var array2 = [aa, bba];
// 以下体现了断言思想
function fun11() {
    var a = 'hhh';
    var b = function (x, y) { return x + y; };
    return [a, b];
}
var _a = fun11(), nn = _a[0], mm = _a[1];
// mm(1,2)  // 系统推断可能是字符串也可能是函数，所以直接以函数调会报错
var _b = fun11(), xx = _b[0], yy = _b[1];
// (yy as Function)(1,2) // 以方式1断言
var _c = fun11(), cc = _c[0], zz = _c[1]; // 以方式2断言,对函数的返回值进行断言
/*
  在使用as const中，可以把宽泛类型断言为值类型，把普通数组断言为元组
*/
// 可以在tsconfig.json中配置对null与undefied的处理，非空断言
var hhi;
// HTML元素的两种非空断言。方式1，通过断言的方式告诉编译器，不会有空就是html元素
// const el:HTMLElement = document.querySelector('.hdd') as HTMLElement
// 方式2，以感叹号的形式告诉编译器，这里是非空的。这个作用仅仅是非空，在构造函数时可能类型还是不匹配
// const el2:HTMLElement = document.querySelector('.he')!
//let body: Element | null
// let body = document.querySelector('.body') as HTMLBodyElement
// let div = document.querySelector('.div1') as HTMLDivElement
/*
  DOM事件的处理
*/
// const bt = document.querySelector('bt') as HTMLButtonElement
/*
  TS 类与接口
*/
var User = /** @class */ (function () {
    function User(n, age) {
        this.name = n;
        this.age = age;
    }
    User.prototype.info = function () {
        return this.name + " is " + this.age;
    };
    return User;
}());
var xiaoming = new User('小明', 11);
var xiaoli = new User('xiaoli', 22);
console.log(xiaoming.info());
var uA;
var userArr;
var userArray = [];
userArray.push(xiaoli);
/*
  泛型，宽泛的类型，只不过这个类型是动态指定的
*/
// 下面这例子，即㒄干的事情一样为什么要写两个呢
function dump(params) {
    return params;
}
var dump1 = dump('str');
function dumpBoolean(params) {
    return params;
}
var dump2 = dumpBoolean(true);
// 传递不同参数的时候，动态的设定类型
function dump3(params) {
    return params;
}
// 这样可以保证了动态传递类型
var dumpA = dump3('str');
var dumpB = dump3(true);
