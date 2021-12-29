function parseUrl(url){
    const paramStr = /.+\?(.+)$/.exec(url)[1]
    const paramArr = paramStr.split('&')
    let paramObj = {}
    paramArr.forEach(item => {
        if(/=/.test(item)){
            let [key,value] = item.split('=')
            value = decodeURIComponent(value)
            value = /^\d+$/.test(value) ? parseFloat(value) : value;
        }else{
            paramObj[item] = value
        }
    })
    return paramObj
}


let myUrl = 'www.baidu.com/to?xiao=zhangsan'
let res =  parseUrl(myUrl)
console.log(res)