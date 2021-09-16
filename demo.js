/*
  第三章 变量声明
    新的，基础类型 enum any void tuple never
         高级类型 union组合类型，Nullable 可空类型，Literal 预定义类型

*/
var num1 = 1;
var num2 = 2;
function add(n1, n2) {
    return n1 + n2;
}
// console.log(add(num1,num2))
var isTrue;
var total = 0;
var firstName = 'yoko';
// 数组与元祖
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
var arr3 = [1, '78'];
var arr4 = [1, 2, '3'];
var person1 = [1, 'yoko']; // 简单的元组类型，固定长度，固定类型的数组
// person1[0] = 'koko'
// person1[1] = 11
// person1[2] = 12 // 以上全部报错
// 元祖的好处是可以很自然地利用数组下标形成key-value的类型。但元组还有bug
person1.push(13); // 不报错，且编译通过。声明元组一定要指明数据类型，
var person2 = [1, 'yoko']; //这并不是元组类型，而是一个union array
person2[0] = 'yyy';
// 3-5 联合类型
var union;
var union3; // 联合类型还可以限定取值
union3 = 'hello';
// 字面量类型：几个确定值的联合类型（不仅划定了数据类型，还确定了取值范围） literal与联合类型配合会产生强大的效果
var literal1;
// literal1 = 2  报错，
literal1 = true; // 正确
// literal1 = false 
var literal2;
literal2 = 1;
console.log('literal2', literal2);
/* 枚举类型 Enum
   数字与字符串也可以混合
   配合switch语句很好用
*/
var Color;
(function (Color) {
    Color[Color["red"] = 2] = "red";
    Color[Color["green"] = 9] = "green";
    Color[Color["blue"] = 10] = "blue";
    Color["balck"] = "balck";
})(Color || (Color = {}));
var color = Color.blue;
console.log('color=', color); // color=2
/*
  动态类型： any和unknow
  加还开发过长，避免太冗长的类型定义。
  any比较适合代码的快速成型，unknown会更保险，可以保证类型的安全
*/
var randomVal = 666;
randomVal = 'did!!';
// randomVal()
randomVal.name;
// randomVal.toUperCase()
console.log('randomVal', randomVal);
// unknown 不保证类型，但可以保证类型安全
var randomVal2 = 666;
randomVal2 = 'did!!';
randomVal2 = {};
randomVal2 = [];
// randomVal2()
// randomVal2.name
// randomVal2.toUperCase() 皆报错
/*
  void，undefined 与 never
  原生没有void这个类型，而在typeScript中，void这个类型的输出都是undefined

  */
function printResult() {
    console.log('rpitnany');
}
printResult();
console.log('printRes', printResult);
// 真正的类型是never
function throwError(msg, errorCode) {
    throw {
        msg: msg,
        errorCode: errorCode
    };
}
//  throwError('not fount',404)
// 不太常用，大部分用来处理异常或Promise
function whileLoop() {
    while (true) {
        console.log('loop....');
    }
}
/*
  类型断言： Type Assertions，主要用于类型的适配工作（不是类型转换）
*/
var msg;
msg = 'abc';
// msg.concat(msg,'d')
// let msg2 = (<string>msg).endsWith('d')
// console.log(msg2)
// 使用类型断言要非常了解变理的类型，否则会引发错误
var res = msg.toUpperCase();
console.log('res', res);
/*
  函数：可以给入参指定类型
  与JS不同的时，如果定义了两个及以上参数，则必须按规定传参，我指定默认值呢？？
*/
var log = function (msg) { return console.log(msg); };
// 参数的可选性
var log2 = function (msg, code) { return console.log(msg); };
// 不管是可选参数，还是默认参数 ，都必须放在末尾
var log3 = function (msg, code) {
    if (code === void 0) { code = 0; }
    return console.log(msg);
};
log3('dk');
// log(1) 错误
/*
  TypeScript 面向对象
  TS对对象类型的定义不是key-value，而是key-type键类型对
  在TS中，定义后不仅是个对象实例，是有且仅有定义时的那几个属性，且有相对应的类型。
  定义为Object比any更为精确，可以认为Object是any类型的子集
*/
var person;
// person.age = 11
// 如果不怕麻烦，也可定义成如下类型
var per2 = {
    firstName: 'tony',
    age: 11
}; // 显式声明类型及值
var drawPoint = function (point) {
    console.log({ x: point.x, y: point.y });
};
drawPoint({ x: 23, y: 11 });
var drawPoint2 = function () {
};
var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        var _this = this;
        this.drawPoint = function () {
            console.log('x,', _this.x, 'y', _this.y);
        };
        this.getDistance = function (p) {
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
        this.x = x;
        this.y = y;
    }
    return Point2;
}());
var pint = new Point2(2);
pint.drawPoint();
