{
  let arr:string[] = []
  arr[0] = '1'
 
}

interface yoko{
  arr:string[],
  aa:number
}
function add(args:yoko){
  return args[0]
}
let params = {
  arr:['2'],
  aa:33
}
add(params)

let buu:number
