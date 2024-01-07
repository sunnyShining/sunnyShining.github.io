---
title 基础
---

## 1、css有哪几种方法隐藏元素，它们之前有哪些区别

```css
div {
  display: none;
  visibility: hidden;
  opacity: 0;

  height: 0;
  width: 0;
}
```

|   | 是否占据空间  |是否导致浏览器重排重绘|能否触发点击事件|
|------------|---------------|-------------|-------------|
|display: none | 不占空间 |会导致浏览器重排和重绘|不会触发其点击事件|
|visibility: hidden | 占空间 |不会导致浏览器重排和重绘|不会触发其点击事件|
|opacity: 0 | 占空间 |不会导致浏览器重排和重绘|会触发其点击事件|
|height、width属性为0 | 不占空间 |可能会导致浏览器重排和重绘|设置为0后不会触发其点击事件|

## 2、对CSS盒模型的理解

CSS 有两种盒模型：标准盒模型和IE盒模型。

标准盒模型：元素的宽度和高度只包括内容（content），不包括内边距（padding）、边框（border）和外边距（margin）。
IE盒模型：元素的宽度和高度包括内容（content）、内边距（padding）和边框（border），但不包括外边距（margin）。

![盒模型](/public/imgs/css/box-sizing.png)

## 3、说一下 box-sizing？

`box-sizing` 主要分为 `border-box` 和 `content-box`

拿 width 举例：

`content-box： width = content + padding + border`

`border-box： width = content`

为了方便样式计算，一般采用 `border-box`

## 4、position: fixed 一定是相对于浏览器窗口进行定位吗？

不一定。

position:fixed;的元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置，元素的位置在屏幕滚动时不会改变。fixed 属性会创建新的层叠上下文。

当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先。

## 5、怎么让Chrome支持小于12px 的文字？

在默认情况下，Chrome 浏览器的最小字体大小限制为 12px，因此无法直接设置小于 12px 的文字大小。然而，可以通过以下方法绕过这个限制：

使用缩放比例：可以使用 CSS 的 transform 属性来缩放文本元素以达到小于 12px 的效果。例如，使用`transform: scale(0.8)`将文本缩放为 80% 的原始大小。请注意，这可能会导致文本外观变得模糊或失真。

```css
.small-text {
  transform: scale(0.8);
}
```
使用 zoom：将容器或文本元素的 zoom 属性设置为小于 1 的值，例如 zoom: 0.8;。这会缩小文本元素及其容器，使得文本看起来更小。请注意，zoom 是非标准的 CSS 属性，不一定在所有浏览器中都有效。

```css
.small-text {
  zoom: 0.8;
}
```
使用 -webkit-text-size-adjust：将容器或文本元素的 -webkit-text-size-adjust 属性设置为 "none" 或 "auto" 可以控制 Chrome 浏览器对文本大小的调整行为。通过将其设置为 "none"，可以禁用 Chrome 浏览器的最小字体大小限制。请注意，-webkit-text-size-adjust 是针对 WebKit 内核（包括 Chrome 和 Safari）的私有属性。
```css
.small-text {
  -webkit-text-size-adjust: none;
}
```
使用图片替代：如果需要应用较小的文字大小，并且无法使用缩放，可以将文本转换为图像，并将其作为背景图像或内联图像插入到元素中。这样可以绕过浏览器的最小字体大小限制。但要注意，这将增加页面加载时间并且不利于可访问性和响应式设计。
```html
<div class="small-text">
  <img src="path/to/small_text_image.png" alt="Small Text">
</div>
```

### 6、object-fit 用法

object-fit CSS 属性指定可替换元素（例如：`<img>` 或 `<video>`）的内容应该如何适应到其使用高度和宽度确定的框。


你可以通过使用 object-position 属性来切换被替换元素的内容对象在元素框内的对齐方式。

语法

`object-fit: contain; object-fit: cover; object-fit: fill; object-fit: none; object-fit: scale-down;`

object-fit 属性由下列的值中的单独一个关键字来指定。

contain

被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配，该对象将被添加“黑边”。

cover

被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。

fill

被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框。

none

被替换的内容将保持其原有的尺寸。

scale-down

内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。
