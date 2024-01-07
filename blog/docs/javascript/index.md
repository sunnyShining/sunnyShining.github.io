---
title 基础
---

##

## querySelectorAll()和getElementsByTagName的区别

`querySelectorAll()`和`getElementsByTagName()`两者的主要区别就是返回值。前者返回的是`NodeList`集合，后者返回的是`HTMLCollection`集合。

`NodeList`对象是一个节点的集合，是由`Node.childNodes`和`document.querySelectorAll()`返回的。`NodeList`并不是都是静态的，`Node.childNodes`返回的是动态的元素集合，`querySelectorAll()`返回的是一个静态集合。
`HTMLCollection`返回一个时时包括所有给定标签名称的元素的HTML集合，也就是动态集合。

## localStorage 怎么设置过期时间

1.在存储数据时，同时保存一个过期时间

2.在获取数据时，先检查过期时间，若已过期则清除数据

```ts
interface IData {
  data: any
  expires?: number
}
const MAX_EXPIRES_TIME = 24 * 60 * 60 * 1000
class StorageManage {
  storage: Storage
  constructor(storage: Storage) {
    this.storage = storage
  }
  set(key: string, val: any, expires = MAX_EXPIRES_TIME) {
    const data: IData = {
      data: val,
      expires
    }
    if (expires !== 0) {
      data.expires = Date.now() + Math.max(0, expires)
    }
    this.storage.setItem(key, JSON.stringify(data))
  }

  get(key: string, def?: any) {
    const value: IData = JSON.parse(this.storage.getItem(key)!)

    if (value.expires !== 0 && Date.now() > value.expires!) {
      this.remove(key)
      return def
    }

    return value.data
  }
  remove(key: string) {
    this.storage.removeItem(key)
  }
}

const local = new StorageManage(localStorage)
```
