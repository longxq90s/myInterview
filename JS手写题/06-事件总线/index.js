// 定义一个队列和中央调度
class Observe {
    constructor() {
        this.message = {}
    }
    on(type, fn) {
        if (!this.message[type]) {
            this.message[type] = []
        }
        this.message[type].push(fn)
    }
    off(type, fn) {
        // 判断有没有订阅
        // 判断是否有fn这个参数，如果没有fn我就删掉整个事件，
        // 如果没有fn我就仅仅知识过滤这个方法
        if (!this.message[type]) {
            return;
        }else if (!fn) {
            this.message[type] = undefined
        }else {
            // 如果有fn则过滤掉这个方法
            this.message[type] =  this.message[type].filter(item => item !== fn)
            console.log(this.message[type])
        }

    }
    emit(type){
        if(!this.message[type]) return ;
        this.message[type].forEach(item => item())
    }
}

// 定义一个委托实例
let person = new Observe()

person.on('eat', handleC)
person.on('eat', handleA)
person.on('eat', handleB)

// person.off('eat')
person.off('eat', handleB)
person.emit('eat')
// person.emit('eat',handleC)

console.log(person)

function handleA() {
    console.log('handleA')
}

function handleB() {
    console.log('handleB')
}
function handleC() {
    console.log('handleC')
}