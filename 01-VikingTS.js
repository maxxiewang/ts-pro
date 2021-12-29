var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isDone1 = true;
// undefiend 和 null 是所有类型的子类型
var un1 = undefined;
var num332;
var xiaomi = {
    name: 'xioami',
    age: 22
};
console.log(xiaomi);
//! 其实是这个addParams本身也是个类型
var addParams = function (x, y, z) {
    if (typeof z === 'number') {
        return x + y + z;
    }
    return x + y;
};
// 以下两种写法都可以 ，addParams就是描述了一个函数类型，我们并没有明确写这个类型，但是通过TS的类型推断推出来的
var addFun = addParams;
var addFun2 = addParams;
/*
  类的练习
*/
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    Animal1.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal1;
}());
// 方法重写的练习
var Cat1 = /** @class */ (function (_super) {
    __extends(Cat1, _super);
    function Cat1(name) {
        var _this = _super.call(this, name) || this;
        console.log('Cat 的构造'); // 重写构造，多加了点逻辑
        return _this;
    }
    Cat1.prototype.run = function () {
        return 'Meow,' + _super.prototype.run.call(this); //方法重写的同时再次调用父类的方法
    };
    return Cat1;
}(Animal1));
var maomao1 = new Cat1('maomao'); // 所以在new的时候就是调用了构造方法的打印
console.log(maomao1.run()); // 调用run方法体验一个多态的特性
var Car1 = /** @class */ (function () {
    function Car1() {
    }
    Car1.prototype.switchRadio = function () { };
    Car1.prototype.checkStatus = function () { };
    return Car1;
}());
var Car2 = /** @class */ (function () {
    function Car2() {
    }
    Car2.prototype.switchRadio = function () { };
    Car2.prototype.checkStatus = function () { };
    return Car2;
}());
function echo1(arg) {
    return arg;
}
//! 使用const和let有一些区别
var res22 = echo1('33');
var res33 = echo1('331');
// 多个范型例子
function swap22(params) {
    return [params[1], params[0]];
}
var res123 = swap22(['string', 10]); // const res123: [number, string]
function echoWithArr22(arg) {
    console.log(arg.length);
    return arg;
}
var dktype = echoWithArr22({ length: 2 }); // 体现了duckTyping，只要你叫起来像鸭子，只要length属性符合约束，那就没有问题
function echoWithArr23(arg) {
    console.log(arg.length);
    return arg;
}
function echWithArr24(arg) {
    return arg;
}
// 实现一个先进行出的队列， 范型类 
var Queue2 = /** @class */ (function () {
    function Queue2() {
        this.data = [];
    }
    Queue2.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue2.prototype.pop = function () {
        return this.data.pop();
    };
    return Queue2;
}());
function plus22(a, b) {
    return a + b;
}
var numB = plus22;
var numA = plus22;
function sum12(x, y) {
    return x + y;
}
var sum124 = sum12;
var sum125 = sum12;
