---
title 基础
---

## css有哪几种方法隐藏元素，它们之前有哪些区别

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

## 对CSS盒模型的理解

CSS 有两种盒模型：标准盒模型和IE盒模型。

标准盒模型：元素的宽度和高度只包括内容（content），不包括内边距（padding）、边框（border）和外边距（margin）。
IE盒模型：元素的宽度和高度包括内容（content）、内边距（padding）和边框（border），但不包括外边距（margin）。

![盒模型](/public/imgs/css/box-sizing.png)

## 说一下 box-sizing？

`box-sizing` 主要分为 `border-box` 和 `content-box`

拿 width 举例：

`content-box： width = content + padding + border`

`border-box： width = content`

为了方便样式计算，一般采用 `border-box`
