/**
 * created by : Administrator
 * E-mail:
 * create Time: 2022/9/20 17:14
 * File : 实现bind方法
 * Update: 2022/9/20 17:14
 * description:
 */


function sum(num1, num2) {
  console.log(num1 + num2 )
  return num1 + num2
}

Function.prototype.myBind = function (content){
  let bindArgs = Array.prototype.slice.call(arguments,1)
  let that = this
  function gen(){
    let args = Array.prototype.slice.call(arguments)
    return that.apply(content,bindArgs.concat(args))
  }
  return gen
  // console.log('bindArgs', bindArgs)
  // console.log('arguments', arguments)
  // let args =
}

var obj = {
  a: 100,
  b: 200
}

let res = sum.myBind(obj,20,30)
res()

let result = sum.bind(obj, 20, 20)()
console.log('result', result)
