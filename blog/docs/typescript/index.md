---
title typescript基础
---

## 1、`type`与`interface`的区别

**相同**

都可以描述 Object 和 Function

**type**

```ts
type Point = {
  x: number;
  y: number;
};

type SetPoint = (x: number, y: number) => void;
```

**Interface**

```ts
interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}
```

**二者都可以被继承**

interface  和  type  都可以继承。
另一个值得注意的是，接口和类型别名并不互斥。类型别名可以继承接口，反之亦然。只是在实现形式上，稍微有些差别。

**interface 继承 interface**

```ts
interface Person {
  name: string;
}

interface Student extends Person {
  stuNo: number;
}
```

**interface 继承 type**

```ts
type Person{
    name:string
}

interface Student extends Person { stuNo: number }
```

**type 继承 type**

```ts
type Person{
    name:string
}

type Student = Person & { stuNo: number }
```

**type 继承 interface**

```ts
interface Person {
  name: string;
}

type Student = Person & { stuNo: number };
```

**实现 implements**
类可以实现 interface  以及  type(除联合类型外)

```ts
interface ICat {
  setName(name: string): void;
}

class Cat implements ICat {
  setName(name: string): void {
    // todo
  }
}

// type 
type ICat = {
  setName(name: string): void;
}

class Cat implements ICat {
  setName(name: string): void{
    // todo
  }
}
```

上面提到了特殊情况，类无法实现联合类型, 是什么意思呢？

```ts
type Person = { name: string; } | { setName(name:string): void };

// 无法对联合类型Person进行实现
// error: A class can only implement an object type or intersection of object types with statically known members.
class Student implements Person {
  name= "张三";
  setName(name:string): void {
    // todo
  }
}
```

**二者区别**

**1. 定义基本类型别名**

type可以定义基本类型别名, 但是interface无法定义,如：

```ts
type userName = string
type stuNo = number
...
```

**2. 声明联合类型**

type可以声明联合类型, 例如：

```ts
type Student = {stuNo: number} | {classId: number}
```

**3. 声明元组**
type可以声明 元组类型：

```ts
type Data = [number, string];
```

以上都是 type能做到， 而interface做不到的， 接下来聊聊type做不到的

**4. 声明合并**

如果你多次声明一个同名的接口，TypeScript 会将它们合并到一个声明中，并将它们视为一个接口。这称为声明合并， 例如：

```ts
interface Person { name: string }
interface Person { age: number }

let user: Person = {
    name: "Tolu",
    age: 0,
};
```

这种情况下，如果是type的话，重复使用Person是会报错的：

```ts
type Person { name: string }; 

// Error: 标识符“Person”重复。ts(2300)
type Person { age: number }

```

**5. 索引签名问题**

如果你经常使用TypeScript, 一定遇到过相似的错误：

```
Type 'xxx' is not assignable to type 'yyy'
Index signature is missing in type 'xxx'.
```

看个例子来理解问题：

```ts
interface propType{
    [key: string] : string
}

let props: propType

type dataType = {
    title: string
}
interface dataType1 {
    title: string
}
const data: dataType = {title: "订单页面"}
const data1: dataType1 = {title: "订单页面"}
props = data
// Error:类型“dataType1”不可分配给类型“propType”; 类型“dataType1”中缺少索引签名 
props = data1
```
