let person = {
  name: 'Semlinker',
  gender: 'Male',
  address: 'Xiamen',
}

// 组装对象
let personWithAge = { ...person, age: 33 }

// 获取除了某些项外的其它项
let { name, ...rest } = person
console.log(rest) // objcect  rest.gender === 'Male'

class Animal {
  constructor(name) {
    this.name = name
  }
  get name() {
    return 'Jack'
  }
  set name(value) {
    console.log('setter: ' + value)
  }
}

let a = new Animal('Kitty') // setter: Kitty
a.name = 'Tom' // setter: Tom
console.log(a.name) // Jack
