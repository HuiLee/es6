# Class

javascript类

## constructor

### 简介

当用class 创建对象时，constructor是一个用来创建和初始化的对象的特殊方法。

### 语法

> constructor([arguments]) { ... }

### 描述

一个 class 中只能有一个指定的 ”constructor“ （构造）方法。如果 class 定义的时候包含多个构造方法，程序将会抛出 SyntaxError 错误。

在构造方法中可以使用 super 关键字来调用父类的构造方法。

如果没有显式指定构造方法，则会添加默认的constructor方法

### 实例

#### 使用构造方法

```
class Square extends Polygon {
  constructor(length) {
    // 在这里调用父类的"length",赋值给矩形的"width"和"height"。
    super(length, length);
    // 注意:子类必须在constructor方法中调用super方法，否则新建实例时会报错。
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  } 
}
```

#### 默认构造方法

如果没有显式定义，会默认添加一个空的constructor方法。对于基类"Base classes"，默认构造方法如下:

```
constructor() {}
```

对于派生类"Derived classes" ，默认构造方法如下:

```
constructor(...args) {
  super(...args);
}
```

## static

static关键字定义一个类中的静态方法

### 语法

> static methodName() { ... }

### 描述

静态方法可以在类还没有实例化时被调用，但不可以在类实例化后调用。静态方法经常作为程序的工具函数使用

### 示例

下面的例子说明了这几点：静态方法是怎么在一个类中被定义的；类中的静态成员是可以被继承的；静态方法什么时候可以被调用，什么时候不可以。

```
class Tripple {
  static tripple(n) {
    n = n || 1;
    return n * 3;
  }
}

class BiggerTripple extends Tripple {
  static tripple(n) {
    return super.tripple(n) * super.tripple(n);
  }
}

console.log(Tripple.tripple());          // 3
console.log(Tripple.tripple(6));         // 18
console.log(BiggerTripple.tripple(3));   // 81
var tp = new Tripple();
console.log(BiggerTripple.tripple(3));   // 81（不会受父类被实例化的影响）
console.log(tp.tripple());               // 'tp.tripple is not a function'.
```


### Links

[constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/constructor)

[extends](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/extends)

[static](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/static)



[MIT License](https://opensource.org/licenses/mit-license.html). ©  [Running Lee](mailto:lihui870920@gmail.com)