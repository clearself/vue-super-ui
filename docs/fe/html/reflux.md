## 回流和重绘基本概念
- 回流：当render树中的一部分或者全部因为大小边距等问题发生改变而需要重建的过程叫做回流（改变大小）。

- 重绘：当元素的一部分属性发生变化，如外观背景色不会引起布局变化而需要重新渲染的过程叫做重绘（改变样式）。

注意：回流必将引起重绘，而重绘不一定会引起回流。
## 回流和重绘发生条件
当页面布局和几何属性改变时就需要回流。下述情况会发生浏览器回流：

- 添加或者删除可见的 DOM 元素；
- 元素位置改变；
- 元素尺寸改变——边距、填充、边框、宽度和高度 内容改变——比如文本改变或者图片大小改变而引起的计算值宽度和高度改变；
- 页面渲染初始化；
- 浏览器窗口尺寸改变——resize 事件发生时；

重绘发生条件：元素的属性或者样式发生变化。

回流的开销较大，如果每个操作都去回流重绘的话，浏览器可能就会受不了。所以很多浏览器都会优化这些操作，浏览器会维护1个队列，把所有会引起回流、重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会 flush 队列，进行一个批处理。这样就会让多次的回流、重绘变成一次回流重绘。

虽然有了浏览器的优化，但有时一些代码可能会强制浏览器提前flush队列，这样浏览器的优化可能就起不到作用了。当请求向浏览器请求一些 style 信息的时候，就会让浏览器 flush 队列，比如：

offsetTop、offsetLeft、offsetWidth、offsetHeight
scrollTop/Left/Width/Height
clientTop/Left/Width/Height
width、height
请求了 getComputedStyle() 或者 IE 的 currentStyle

## 如何减少回流和重绘

减少回流和重绘其实就是需要减少对 render tree 的操作（合并多次多 DOM 和样式的修改），并减少对一些样式信息的请求，尽量利用好浏览器的优化策略。

添加 css 样式而不是利用js控制样式（我就是想到这种办法解决回流问题的）
尽量将需要改变 DOM 的操作一次完成
直接改变 className，如果动态改变样式，则使用 cssText（考虑没有优化的浏览器）
不要经常访问会引起浏览器 flush 队列的属性，如果你确实要访问，利用缓存
让元素脱离动画流，减少回流的 Render Tree 的规模
将需要多次重排的元素，position 属性设为 absolute 或 fixed，这样此元素就脱离了文档流，它的变化不会影响到其他元素。例如有动画效果的元素就最好设置为绝对定位；
尽量不要使用表格布局，如果没有定宽表格一列的宽度由最宽的一列决定，那么很可能在最后一行的宽度超出之前的列宽，引起整体回流造成 table 可能需要多次计算才能确定好其在渲染树中节点的属性，通常要花3倍于同等元素的时间。