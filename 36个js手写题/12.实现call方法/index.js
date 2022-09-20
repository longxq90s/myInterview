/**
 * created by : Administrator
 * E-mail:
 * create Time: 2022/9/20 16:43
 * File : 实现call方法
 * Update: 2022/9/20 16:43
 * description:
 */


Function.prototype.myCall = function (content,args){
  content ? Object(content) : window
  // console.log('arguments', arguments)
  if (!args){
    return content
  }
  let arr = []
  for (let i=1;i<arguments.length;i++){
    arr.push(arguments[i])
  }
  content.f = this
  let result = content.f(...arr)
  delete content.f
  return result
}


// call使用
function printName(firstname,lastname){
  // console.log('name', name)
  let fullName = firstname + lastname
  console.log('fullName', fullName)
  return fullName
}


var obj = {
  name:'张三娃'
}

printName.myCall(obj,'孙','悟空')
let result =  printName.myCall(obj)

console.log('result', result)

printName.call(obj,'赵','老四')
