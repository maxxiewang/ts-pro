/* 
  Generics 泛型
*/
let list1:number[] = [1,2,3,4]
let list2:Array<number> = [1,2,3,4] // 类型加个<> 即为泛型

//arr:Array<number|string>
//<T>(arr:Array<T>)

let lastInArray = <T>(arr:T[])=>{
  return arr[arr.length -1]
}
const l1 = lastInArray([1,2,3,4])
const l2 = lastInArray(['a','b','c'])
const l3 = lastInArray<string|number>(['a','b','c'])

let makeTuple = <T,Y = number>(x:T,y:Y)=> [x,y]
const v1 = makeTuple(1,'2')
const v2 = makeTuple<boolean,number>(true,2)


/* 
  枚举的练习
*/

enum Roles{
  ADMIN,
  USER = '用户信息',
  TOURIST = 5
}
const superAdmin = Roles.ADMIN
console.log(superAdmin) // 0
console.log(Roles[0])  // ADMIN
console.log(Roles.USER) // '用户信息'
console.log(Roles[5]) // TOURIST
console.log(Roles.TOURIST) // 5

// const handleData = (x: string): number;
// const handleData = (x: number): string;
// const handleData = (x: null): number;
const handleData = (x: string | number | null): any => {
  if (typeof x === 'string') {
    return Number(x);
  }
  if (typeof x === 'number') {
    return String(x);
  }
  return -1;
};
handleData(996)   // "996"
handleData("996") // 996
// handleData(false)  // error

/* 
  可辨识联合类型例子
*/
enum CarTransmission {
  Automatic = 200,
  Manual = 300
}

interface Motorcycle {
  vType: "motorcycle"; // discriminant
  make: number; // year
}

interface Car {
  vType: "car"; // discriminant
  transmission: CarTransmission
}

interface Truck {
  vType: "truck"; // discriminant
  capacity: number; // in tons
}
// 基于前面定义了三个接口，我们可以创建一个 Vehicle 联合类型：
type Vehicle = Motorcycle | Car | Truck;
//下面我们来定义一个 evaluatePrice 方法，该方法用于根据车辆的类型、容量和评估因子来计算价格
const EVALUATION_FACTOR = Math.PI; 
function evaluatePrice(vehicle: Vehicle) {
  switch(vehicle.vType) {
    case "car":
      return vehicle.transmission * EVALUATION_FACTOR;
    case "truck":
      return vehicle.capacity * EVALUATION_FACTOR;
    case "motorcycle":
      return vehicle.make * EVALUATION_FACTOR;
  }
}

