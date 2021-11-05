// 属性与方法的修饰符
// 标准写法要用public修饰一下，即不写就是public，公开的
var Stu = /** @class */ (function () {
    function Stu(n, age) {
        this.name = n;
        this.age = age;
    }
    Stu.prototype.info = function () {
        return this.name + " is " + this.age;
    };
    return Stu;
}());
var lily = new Stu('xioli', 20);
for (var key in lily) {
    if (lily.hasOwnProperty(key)) {
        console.log(lily[key]);
    }
}
// 类型的继承
