var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        )
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
/*
  程序更容易理解，效率更高，更少的错误（编译时发现），完全兼容JS，很好的代码提示与补全
  虽然短期增加时间成本，但长期更容易维护

*/
var isDone = true
var age = 21
var u = undefined //undefined和null是所有类型的子类型
var n = null
var num = undefined // 同样通过
var notSure = 4
notSure = 'maybe it is a string'
notSure = true
notSure.myName
// notSure.getName()
// 联合类型
var numorStr = 22
// 数组
var arrNum = [1, 2, 3]
// 类数组 Array like Objects
function test() {
  console.log(arguments) // arguments就是一个类数组，有一些数组的属性
}
var viking = {
  id: 12,
  name: 'asdf',
  age: 22,
}
// const是用在对象实例上，readonly用在属性上
/*
  函数：Function
*/
// 返回也是Number类型，可选参数z只能放在最后面
function add(x, y, z) {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}
var result = add(2, 3, 4)
// 函数表达式，这个函数plus本身也有一个类型
var plus = function (x, y, z) {
  if (z === void 0) {
    z = 10
  }
  return x + y + z
}
// 下面这个 => number 不是箭头函数，是声明函数的返回类型
var plus2 = plus
/*
  类：Class
  原来JS是利用构造函数和原型链实现继承
  private 与 protected修饰符的不同是，protected修饰子类是可以访问
  静态属性与方法，可以不new 实例直接访问
*/
var Animal = /** @class */ (function () {
  function Animal(name) {
    this.name = name
  }
  Animal.isAnimal = function (a) {
    return a instanceof Animal
  }
  Animal.prototype.run = function () {
    return this.name + ' is running'
  }
  Animal.categoies = ['mammal', 'bird']
  return Animal
})()
var snake = new Animal('lily')
console.log(Animal.categoies)
console.log(Animal.isAnimal(snake))
var Dog = /** @class */ (function (_super) {
  __extends(Dog, _super)
  function Dog() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  Dog.prototype.bark = function () {
    return this.name + ' is barking'
  }
  return Dog
})(Animal)
// 方法的重写，多态的特性。
var Cat = /** @class */ (function (_super) {
  __extends(Cat, _super)
  function Cat(name) {
    var _this = _super.call(this, name) || this
    console.log(_this.name)
    return _this
  }
  Cat.prototype.run = function () {
    return 'Meow, ' + _super.prototype.run.call(this)
  }
  return Cat
})(Animal)
var maomao = new Cat('MaoMao')
console.log(maomao.run())
var Car = /** @class */ (function () {
  function Car() {}
  Car.prototype.switchRadio = function () {}
  return Car
})()
var Cellphone = /** @class */ (function () {
  function Cellphone() {}
  Cellphone.prototype.switchRadio = function () {}
  Cellphone.prototype.checkBatteryStatus = function () {}
  return Cellphone
})()
/*
  枚举
*/
// 数字枚举
var Direction
;(function (Direction) {
  Direction[(Direction['Up'] = 10)] = 'Up'
  Direction[(Direction['Down'] = 11)] = 'Down'
  Direction[(Direction['Left'] = 12)] = 'Left'
  Direction[(Direction['Right'] = 13)] = 'Right'
})(Direction || (Direction = {}))
/*
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up"; 注意看这里面JS里面的赋值运算符返回的值，就是值本身。即为这个对象本身的属性值赋为0. Direction["Up"] = 0 Direction[0] = "Up"
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));

*/
console.log(Direction.Up)
console.log(Direction[10])
// 字符串枚举
var Direction2
;(function (Direction2) {
  Direction2['Up'] = 'UP'
  Direction2['Down'] = 'DOWN'
  Direction2['Left'] = 'LEFT'
  Direction2['Right'] = 'RIGHT'
})(Direction2 || (Direction2 = {}))
var value = 'UP'
if (value === Direction2.Up) {
  console.log('go up!')
}
var value2 = 'UP'
if (value === 'UP' /* Up */) {
  console.log('go up33!')
}
/*
  常量枚举与普通枚举的比较
  只有常量值才会进行常量枚举
*/
// var Direction2;
// (function (Direction2) {
//     Direction2["Up"] = "UP";
//     Direction2["Down"] = "DOWN";
//     Direction2["Left"] = "LEFT";
//     Direction2["Right"] = "RIGHT";
// })(Direction2 || (Direction2 = {}));
// var value = 'UP';
// if (value === Direction2.Up) {
//     console.log('go up!');
// }
// var value2 = 'UP'; 常量枚举会内联枚举的任何用法，并且不会把枚举编译成代码
// if (value === "UP" /* Up */) {
//     console.log('go up33!');
// }
/*
  Generics 泛型，动机：
  在预先定义函数、接口或类的时候，不预先指定类型，而是在使用的时候指定类型
*/
function echo(arg) {
  return arg
}
// const str:string = 'str'
// const result2 = echo(str)
var result2 = echo('str') // 类型推论
function swap(tupple) {
  return [tupple[0], tupple[1]]
}
var result3 = swap(['apple', 123]) //const result3: [string, number]
result3[0].concat //就可以使用String上面的一些方法
/*
  关于约束范型
*/
function echoWithArr(arg) {
  console.log(arg.length)
  return arg
}
var arrs = echoWithArr(['str1', 'str2']) // 返回一个字符串数组
var arrs2 = echoWithArr([1, 2, 3]) // 返回一个数字类型数组
function echoWithLength(arg) {
  console.log(arg.length)
  return arg
}
var str = echoWithLength('str')
var obj = echoWithLength({ length: 10, width: 10 }) // 同样通过
var arr5 = echoWithLength(['1', 2])
var arr6 = echoWithLength([1, 2]) // 以上皆通过，体现了duck typing ，只要你有length这个属性，符合这个约束，就可以
// 泛型在其它方面的应用，1；在类上面的应用
// 使用泛型类
var Quene = /** @class */ (function () {
  function Quene() {
    this.data = []
  }
  Quene.prototype.push = function (item) {
    return this.data.push(item)
  }
  Quene.prototype.pop = function () {
    return this.data.shift()
  }
  return Quene
})()
var quene = new Quene()
quene.push(1)
console.log(quene.pop().toFixed())
var quene2 = new Quene()
quene2.push('str')
console.log(quene2.pop().toUpperCase())
