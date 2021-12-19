# CSS 面试题

## 1.如何实现文字超出内容区域变成...

```css
overflow:hidden;
white-space:nowrap;
text-overflow:hidden;
```

在微信中实现文字超出显示...效果 

默认显示两行

```less
display:-webkit-box;
overflow:hidden;
-webkit-box-orient:vertical;
-webkit-line-clamp:2;
```



## 2.伪类与伪元素区别

1. 伪类本质上是为了**弥补**常规CSS**选择器的不足**

2. 伪元素本质上是创建了一个**有内容的虚拟容器**

3. CSS3中伪类和伪元素的语法不同；   伪类 :link :hover     伪元素 ::before  ::after  (伪类单冒号,伪元素双冒号)

4. 可以同时使用多个伪类，而只能同时使用一个伪元素；

5. 伪类和伪元素的根本：是否创造了**新**的元素, 这个新创造的元素就叫 "伪无素" 。

   伪元素/伪对象：不存在在DOM文档中，是虚拟的元素，是创建新元素。 这个新元素(伪元素) 是某个元素的子元素，这个子元素虽然在逻辑上存在，但却并不实际存在于文档树中.

　　　 伪类：存在DOM文档中，(无标签,找不到, 只有符合触发条件时才能看到 ), 逻辑上存在但在文档树中却无须标识的“幽灵”分类。

　　6. 因为伪类是类似于添加类所以可以是多个，而伪元素在一个选择器中只能出现一次，并且只能出现在末尾 

　　7.  W3C中对于二者应用的描述(描述太模糊, 不容易理解)：

- - 伪类：用于向某些选择器添加特殊的效果
  - 伪元素：用于将特殊的效果添加到某些选择器(标签

### 3. :after/::after和:before/::before的异同

相同点

- 都可以用来表示伪类对象，用来设置对象前的内容
- :before和::before写法是等效的; :after和::after写法是等效的

不同点

- :before/:after是Css2的写法，::before/::after是Css3的写法
- 所以css2的要比css3的兼容好  ,, :before/:after 的兼容性要比::before/::after好 ， 

 

- 不过在H5开发中建议使用::before/::after比较好(易区分)

注意：

1. 伪对象要配合content属性一起使用(!!!没有设置content不生效)
2. 伪对象不会出现在DOM中，所以不能通过js来操作，仅仅是在 CSS 渲染层加入
3. 伪对象的特效通常要使用:hover伪类样式来激活

![](C:\Users\Administrator\Desktop\github面试题\Interview\img\伪类与伪元素.png)

## 4.关于相对定位于绝对定位定位是相对于哪儿进行定位的呢？

static:静态定位，也是postion的默认值，没有定位，元素出现在正常的流中，忽略top\bottom\left\right或者z-index声明；

relative:相对定位，生成相对定位的元素，通过top\bottom\left\right的设置相对于其自身的位置进行定位。**可以通过z-index进行层级分级。**

absolute:绝对定位，生成绝对定位的元素，**相对于static定位以外其他定位**（如relative\absolute\fixed）的第一个父元素进行定位，如果父元素没有定位则相对于浏览器窗口定位，**可以通过z-index进行层级分级。**

fixed:固定定位，生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过left\top\right\bottom属性进行规定。**可以通过z-index进行层级分级。**

