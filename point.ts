
interface IPoint {
  drawPoint: ()=> void
  getDistance:(p:IPoint) => number
  getX:()=> number
  setX:(value) => void
  getY:()=> number
  setY:(value) => void
}

class Point implements IPoint{
  constructor(private _x:number,private _y:number = 2){

  }
  drawPoint = ()=>{
    console.log('_x:',this._x,'_y:',this._y)
  }
  getDistance = (p:IPoint)=>{
    return Math.pow(p.getX() - this._x,2) + Math.pow(p.getY() - this._y,2)
  }
  setX = (value:number)=>{
    if(value<0){
      throw new Error('value不能小于0')
    }
    this._x = value
  }
  getX = ()=>{
    return this._x
  }
  setY = (value:number)=>{
    if(value<0){
      throw new Error('value不能小于0')
    }
    this._y = value
  }
  getY = ()=>{
    return this._y
  }
}

const point = new Point(20,10)
console.log(point.getX())
