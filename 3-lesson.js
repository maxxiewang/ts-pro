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
// 属性与方法的修饰符
// 标准写法要用public修饰一下，即不写就是public，公开的
// asdf
var Stu = /** @class */ (function () {
  function Stu(n, age) {
    this.name = n
    this.age = age
  }
  Stu.prototype.info = function () {
    return this.name + ' is ' + this.age
  }
  return Stu
})()
var lily = new Stu('xioli', 20)
for (var key in lily) {
  if (lily.hasOwnProperty(key)) {
    console.log(lily[key])
  }
}
/*
  类型的继承
*/
// interface LenthInterface {length:number}
// T extends LengthInterface
function getMyLength(arg) {
  return arg.length
}
// console.log(getMyLength(1)) 只适用于数组或字符串等等单一，只能使用联合类型解决
// 继承之后得到的是一个类型
// 使用联合类型解决
function getLength1(arg) {
  return arg.length
}
// 这种方法其实还不错
function getMyLength2(arg) {
  return arg.length
}
getMyLength2([12])
// 泛型与数组，使用泛型在使用时，要传递，传递什么类型即使用什么类型
// 泛型就是，我们把类型赋值给泛型的时候，得先满足规范才能赋值成功
function getMyLength3(arg) {
  return arg.length
}
function getMyLength4(arg) {
  return arg.length
}
getMyLength3(['s4r', '11', 33])
getMyLength3('11')
// 类中使用泛型
// 1、约束比较大的传统写法
var Collections = /** @class */ (function () {
  function Collections() {
    this.data = []
  }
  //rest 参数必须是数组类型
  Collections.prototype.push = function () {
    var _a
    var items = []
    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i]
    }
    ;(_a = this.data).push.apply(_a, items)
  }
  return Collections
})()
var numCollections = new Collections()
numCollections.push(2, 3, 3, 3, 3, 12, 1)
// 2、利用泛型解决
var Collections1 = /** @class */ (function () {
  function Collections1() {
    this.data = []
  }
  //rest 参数必须是数组类型
  Collections1.prototype.push = function () {
    var _a
    var items = []
    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i]
    }
    ;(_a = this.data).push.apply(_a, items)
  }
  Collections1.prototype.shift = function () {
    return this.data.shift()
  }
  return Collections1
})()
var user1 = { name: 'yko', age: 18 }
var user2 = { name: 'yko', age: 18 }
var collections = new Collections1()
collections.push(user1, user2)
console.log(collections)
var myArticle = {
  title: 'title',
  isLock: true,
  comments: [{ content: '这是一个评论', author: 'tida' }],
}
console.log(myArticle)
/*
  readonly的使用
  构造函数在初使化的时候是可以改变readonly的
*/
var Axio1s = /** @class */ (function () {
  function Axio1s(name) {
    this.name = name
    this.name = name
  }
  return Axio1s
})()
/*
  单例模式
  通过静态属性结合把构造方法封装起来，阻止外部实例化对外像
*/
var Axios = /** @class */ (function () {
  function Axios(num) {
    this.num = num
    console.log('构造')
    this.num = num
  }
  Axios.make = function (num) {
    if (Axios.instance == null) {
      console.log('创建实例')
      Axios.instance = new Axios(num)
    }
    return Axios.instance
  }
  Axios.instance = null
  return Axios
})()
var as1 = Axios.make(1)
var as2 = Axios.make(2)
console.log(as2)
var as3 = Axios.make(3) // 无论如何，最后只会执行一次
var Animations = /** @class */ (function () {
  function Animations() {}
  Animations.prototype.getPos = function () {
    return { x: 100, y: 300 }
  }
  return Animations
})()
var Tank = /** @class */ (function (_super) {
  __extends(Tank, _super)
  function Tank() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.name = ''
    return _this
  }
  Tank.prototype.move = function () {
    console.log(this.name + '\u79FB\u52A8')
  }
  Tank.prototype.getDistace = function (x, y) {
    return x + y
  }
  Tank.prototype.getYoko = function () {
    console.log('....')
  }
  return Tank
})(Animations)
var userDemo = {
  name: '',
  age: 1,
  // info:function(){return ''}
  info: function () {
    return '...'
  },
}
userDemo.info() // 如果是可选执行可能会过不去
var SexTypes
;(function (SexTypes) {
  SexTypes[(SexTypes['BOY'] = 0)] = 'BOY'
  SexTypes[(SexTypes['GIRL'] = 1)] = 'GIRL'
})(SexTypes || (SexTypes = {}))
var newUser = { name: 'yoko', age: 12, sex: SexTypes.BOY }
var newUser2 = { name: 'dida', age: 22, sex: 2 }
// 分别使用接口与泛型定义一个数组
var userArrays = [newUser, newUser2]
var userArrss = [newUser, newUser2]
console.log('newUser', newUser)
console.log('newUser2', newUser2)
console.log(SexTypes.BOY, SexTypes[SexTypes.BOY]) // 0 , BOY
var AliPay = /** @class */ (function () {
  function AliPay() {}
  AliPay.prototype.handle = function () {
    console.log('ali pay')
  }
  return AliPay
})()
var WechatPay = /** @class */ (function () {
  function WechatPay() {}
  WechatPay.prototype.handle = function () {
    console.log('wechat pay ')
  }
  return WechatPay
})()
var wepay = function (xx) {
  return true
}
