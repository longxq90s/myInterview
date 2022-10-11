function render(template,data){
    const reg = /\{\{(\w+)\}\}/;
    if(reg.test(template)){
        const name = reg.exec(template)[1];
        template = template.replace(reg,data[name])
        return render(template,data)
    }
    return template
}


let template = '我是{{name}}，年齡{{age}},性別{{sex}}'
let person = {
    name:'小甜甜',
    age:"18",
    sex:'女'
}
let res = render(template,person)
console.log(res)