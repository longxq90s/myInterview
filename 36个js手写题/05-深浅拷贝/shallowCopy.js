// 只考虑对象的拷贝
// var arr = [1,2,4,5,3]
//
// var arr2 = [...arr]
// var arr3 =Object.assign(arr)
// console.log('----浅拷贝----')
// console.log(arr2)
// arr2.push(9)
// console.log(arr3)
// arr3.push(10)
// console.log(arr)
// //--------------
// console.log('----深拷贝-----')
//
// let deepCopy=function (params){
//   return JSON.parse(JSON.stringify(params))
// }
//
// result = deepCopy(arr)
// console.log( Array.isArray(result) )
// result.push(9)
// console.log(result)
// console.log(arr)
// ----递归实现克隆-----
//定义一个函数用于检查当前数据类型
// 根据目标函数类型分情况讨论
function deepClone(target){
  let newObj = target instanceof Array ? [] : {}
  for(let key in target){
    if(target === 'object'){
      deepClone(key)
    }else{
      newObj[key] = target[key]
    }
  }
  return newObj
}

let arr = [1,2,3,[4,5,6,{7:'小王',8:'小李',9:'小黑'}]]
let targ = deepClone(arr)
targ.push('王麻子')

console.log(targ)