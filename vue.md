# vue面试题

## 基础题--扫盲

### 1. `vue` 有哪些优点？为什么要用vue？

vue比较明显的优点：

1. 灵活渐进，轻量高效。
2. 采用虚拟DOM。相对于采用非虚拟dom而言。
3. 数据驱动，组件化开发。
4. 双向数据绑定。

### 2.什么事mvvm?mvc你知道吗？

MVVM：是由（model,view,view-model）三个词缩写而成。view:视图层。model:数据层。view-model:将view和model进行连接的控制层，这里主要写入一些可重用的组件。

相关原理如下图

![](C:\Users\Administrator\Desktop\github面试题\Interview\img\MVVM.webp)

### 3.vue的生命周期有哪几个？

vue2.x的生命周期有8个分别是：

| 生命周期名称  | 解释                                                         | 使用情况                                                     |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| beforeCreate  | 此时创建了一个空壳子，数据和模板都没有进行编译               | 此时可以创建一个load事件                                     |
| create        | 此时数据开始编译，模板还没进行编译。主要完成如下工作：数据观测(data observer),属性和方法的运算，watch/event事件回调。 | 此时可以操作数据，不能操作模板                               |
| beforeMounted | 数据和模板都已经编译完成，但是还没有挂载真实Dom，render函数首次被调用。 | 此时可以操作数据，可以操作虚拟Dom                            |
| Mounted       | 数据和模板都已经编译完成，并挂在到真实dom上。                | 此时可以操作真实Dom和数据                                    |
| beforeUpdate  | 此时在更新前编译dom和数据，发生在虚拟DOM重新渲染和打补丁之前。 | 此时修改后的数据还没有挂在到真实dom中。可在这一步中更改状态，不会触发附加的重渲染过程。 |
| Update        | 挂载真实Dom                                                  | 显示真实Dom                                                  |
| activated     | keep-alive组件激活时调用                                     |                                                              |
| deactivated   | keep-alive组件停用时调用                                     |                                                              |
| beforeDestory | 实例销毁前调用，实例在这仍然可用。                           |                                                              |
| Destory       | 实例销毁后调用。调用后，vue实例指示的所有东西都会解绑，所有的监听器都会被移除，所有的子实例都会被销毁。 |                                                              |

vue3.x生命周期函数

| 生命周期函数    | 解释             | 使用情况 |
| --------------- | ---------------- | -------- |
| setup           | 初始化模板和数据 |          |
| onBeforeMount   | 挂载DOM之前      |          |
| onMounted       | 挂载DOM之后      |          |
| onBeforeUpdate  | 更新组件前       |          |
| onUpdated       | 更新组件之后     |          |
| onBeforeUnmount | 卸载销毁前       |          |
| onUnmounted     | 卸载销毁后       |          |



### 4. 组件内的生命周期函数有哪些？

beforeRouteEnter、beforeRouteUpdate (2.2 新增)、beforeRouteLeavev

### 5.vue 中除了在data中设置响应式数据外，还可以怎样设置？

vue.$set() 。vue2在外面设置响应式变量。



## 拔高题--面中小企业





## 比较有难度的题--面试大厂





