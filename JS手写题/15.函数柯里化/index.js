/**
 * created by : Administrator
 * E-mail:
 * create Time: 2022/9/20 19:06
 * File : 函数柯里化
 * Update: 2022/9/20 19:06
 * description:
 */

function add(a,b,c){
  return a + b + c
}

function curry(fn){
  let args = []
  return function resFn(...rest){
    if (rest.length === 0){
      return fn(...args)
    }else{
      args.push(...rest)
      return resFn
    }
  }
}


let addCurry = curry(add)
let result = addCurry(1)(2)(3)(5)()
console.log('result', result) // 6


