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
{
    var arr = [];
    arr[0] = '1';
}
function add(args) {
    return args[0];
}
var params = {
    arr: ['2'],
    aa: 33
};
add(params);
var buu;
var sem = { name: 'semlinker', age: 30 };
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Coder = /** @class */ (function (_super) {
    __extends(Coder, _super);
    function Coder(name, age, job) {
        var _this = _super.call(this, name, age) || this;
        _this.job = job;
        return _this;
    }
    Coder.prototype.getJob = function () {
        return this.name + "\u662F\u4F7F\u7528\u7684" + this.job;
    };
    return Coder;
}(Person));
var YuZhu = new Coder('玉柱', 20, 'java');
console.log(YuZhu.getJob());
console.log(YuZhu);
var create = function (c) {
    return new c();
};
// create<string>(new String('abc'))
var getVeg = function (color, veg) {
    return color + "," + (veg ? veg : '');
};
console.log(getVeg('blue'));
