# JavaScript面试题

## 1.假设有如下代码，那么a(10)的返回结果是？

```js
function a(a){
    a^=(1<<4)-1;
    return a;
}

```

题解：

1.考察点：二进制，异或(^)使用,二级制符号移位。

2.解题思路：将1转化为二进制然后移位，再与a进行异或。在之后进行运算求值。

3.1转化为二进制为01，向左侧移动4位变成10000，变成了十进制的16（2的3次方），减一变成15（1111），然后和a（1010）进行异或变成（0101）返回二进制的（0101）十进制为5

## 2.内存回收方式以及原理？

js内存回收方式主要有两种：计数引用和标记清除

1. 计数引用

   ​	引用计数的判断原理很简单，就是看一份数据是否还有指向它的引用，如果没有任何对象再指向它，那么垃圾回收器就会回收。

   ```js
   // 创建一个对象，由变量o指向这个对象的两个属性
   var o = {
       name: '听风是风',
       handsome: true
   };
   // name虽然设置为了null，但o依旧有name属性的引用
   o.name = null;
   var s = o;
   // 我们修改并释放了o对于对象的引用，但变量s依旧存在引用
   o = null;
   // 变量s也不再引用，对象很快会被垃圾回收器释放
   s = null;
   ```

   引用计数存在一个很大的问题，就是对象间的循环引用，比如如下代码中，对象o1与o2相互引用，即便函数执行完毕，垃圾回收器通过引用计数也无法释放它们。

   ```js
   function f() {
       var o1 = {};
       var o2 = {};
       o1.a = o2; // o1 引用 o2
       o2.a = o1; // o2 引用 o1
       return;
   };
   f();
   ```

2. 标记清除

   ​	标记清除的概念也好理解，从根部出发看是否能达到某个对象，如果能达到则认定这个对象还被需要，如果无法达到，则释放它。

   总共分为三步：

   ​	a.垃圾回收器创建roots列表，roots通常是代码中保留引用的全局变量，在js中，我们一般认定全局对象window作为root，也就是所谓的根部。

   ​	b.从根部出发检查所有 的roots，所有的children也会被递归检查，能从root到达的都会被标记为active。

   ​	c.未被标记为active的数据被认定为不再需要，垃圾回收器开始释放它们。

参考资料

-  :+1: 从内存谈到垃圾回收机制 https://www.cnblogs.com/echolun/p/11503915.html

## 3.那些情况下会造成内存泄漏？

```text
一.内存泄漏情况
	1.定时器不用的时候没有清零会造成内存泄漏；
	2.闭包。因为在闭包中某个元素至少引用一次，就会造成无法进行清理。
	3.DOM对象泄漏;
	4.全局变量;
二.主要关注的代码点
	1.DOM中的addEventLisner 函数及派生的事件监听， 比如Jquery 中的on 函数， vue 组件实例的 $on 函数，第三方库中的初始化函数
	2.BOM对象的事件监听，比如webSocket的监听事件
	3.避免不必要的函数引用
	4.如果是要render函数，避免在html标签中DOM / BOM事件
三.在vue中如何处理内存泄漏的
	1.如果在mounted/created 钩子中绑定了DOM/BOM 对象中的事件，需要在beforeDestroy 中做对应解绑处理
如果在mounted/created 钩子中使用了第三方库初始化，需要在beforeDestroy 中做对应销毁处理
	2.如果组件中使用了定时器，需要在beforeDestroy 中做对应销毁处理
	3.模板中不要使用表达式来绑定到特定的处理函数，这个逻辑应该放在处理函数中
	4.如果在mounted/created 钩子中使用了$on，需要在beforeDestroy 中做对应解绑($off)处理某些组件在模板中使用 事件绑定可能会出现泄漏，使用$on 替换模板中的绑定

```

## 4.eventLoop 知道吗？解释一下

## 5.this指向问题



## 6.闭包

1、闭包是什么？

[	闭包](https://links.jianshu.com/go?to=https%3A%2F%2Fdeveloper.mozilla.org%2Fcn%2Fdocs%2FWeb%2FJavaScript%2FClosures)是指有权访问另一个函数[作用域](https://links.jianshu.com/go?to=https%3A%2F%2Fjuejin.im%2Fpost%2F5afb0ae56fb9a07aa2138425)中的变量的函数。

2.为什么要闭包？

​	因为在函数执行完成后，函数的作用域就被销毁了。再次需要调用函数中的值得时候已经没有了。所以需要创建。

3.闭包如何实现？

​	闭包实现主要在一个函数里面定义一个新的函数。

4.什么情况下需要使用闭包？

​	当需要定义一个私有变量，并且该变量不被外部所访问的时候可以使用闭包。

:necktie:   面试答：闭包在js中定义的是一个函数，这个函数有权访问另一个函数作用域中的变量。在js原生中，函数中的变量的作用域仅属于它所在的函数作用域，当函数执行完成只有当前作用域就会被销毁，内存也会被js回收机制回收。当在函数内添加一个闭包，那么通过闭包可以访问上层作用域的原因，即使函数执行完毕也不会被内存清理。实现原理可以在函数内定义一个返回函数的方式实现。一般在事件绑定回调中会使用到。

## 7.深拷贝与浅拷贝

:necktie:  为什么需要深拷贝与浅拷贝：因为对象赋值是采用引用赋值，赋值后对象可能是同一份对象。

浅拷贝可以采用ES6的展开运算符和assign以及赋值运算实现浅拷贝，但是浅拷贝赋值时遇到对象时，会产生问题，所以我们会采用深拷贝的方式，对对象进行拷贝。

深拷贝主要有三种方式进行拷贝。第一种是采用JSON的两个方法，json.pase包裹json.stringify的方式。 json.parse(json.stringify) 。第二种方式可以采用递归函数进行深拷贝，当遇到拷贝的目标是对象的时候就调用自己。但是当遇到symbol的时候需要进行处理，以及其他一些情况。所以一般采用loadsh函数来实现深拷贝。

当vue中的一份data数据进行不同使用方式的时候就需要使用深拷贝。

总结：1.回答什么是深浅拷贝？ 2.回答：为什么要用深浅拷贝？3.深浅拷贝如何实现？4.在工作中遇到怎么用/什么情况下使用深浅拷贝？

## 7.发布者-订阅者模式

```js
/*
    发布者订阅者模式
    1.创建一个类
    2.在该类上创建一个缓存列表（调度中心）
    3.on方法用来把函数fn都加到缓存列表（订阅者注册事件到调度中心）
    4.emit方法取到event事件类型，根据event值取执行对应缓存列表中的函数（发布者发布事件到调度中心,
        调度中心处理代码）
    5.off方法可以根据event事件类型取消订阅（取消订阅）
* */
```

```js
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
        if(this.message[type]) return ;
        for(let item in this.message[type]){
            item()
        }
    }
}

// 定义一个委托实例
let person = new Observe()

person.on('eat', handleC)
person.on('eat', handleA)
person.on('eat', handleB)

// person.off('eat')
person.off('eat', handleB)
person.emit('eat',handleA())
person.emit('eat',handleC())

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
```
谈谈对原型链的理解。
js如何实现继承？
js有哪些数据类型？
js有哪些判断类型的方法？
如何判断一个变量是否数组？
Null 和 undefined 的区别？、
call bind apply的区别？
防抖节流的概念？实现防抖和节流。
深拷贝、浅拷贝的区别？如何实现深拷贝和浅拷贝？
对比 一下var、const、let。
ES next新特性有哪些？
箭头函数和普通函数区别是什么？
使用new创建对象的过程是什么样的？
this指向系列问题。
手写bind方法。
谈谈对闭包的理解？什么是闭包？闭包有哪些应用场景？闭包有什么缺点？如何避免闭包？
谈谈对js事件循环的理解？
谈谈对promise理解？
手写 Promise。
实现 Promise.all方法。
Typescript中type和interface的区别是什么？
讲讲Typescript中的泛型？
Typescript如何实现一个函数的重载？
CmmonJS和ESM区别？
柯里化是什么？有什么用？怎么实现？
讲讲js垃圾回收机制。
实现一个发布订阅。
如何实现数组怕平？
如何实现数组去重？

