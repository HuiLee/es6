# super

super 关键字用于访问父对象上的函数。

super 属性和 super[expr] 表达式在 任何 类 与  对象字面量 的 方法定义 上都可以使用。

## 语法

> super([arguments]); // 访问父对象上的构造函数

> super.functionOnParent([arguments]); // 访问对象上的方法

## 描述

当被用在在构造函数中时，super 关键字被单独使用，且必须用于 this 关键字之前。它也可以被用来访问父对象上的方法。

## demo

以下代码片段来自于 classes sample:
 
```
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
}

class Square extends Polygon {
  constructor(length) {
    this.height; // 引用错误, 必须要先调用 super!
    
    // 这里我们调用父类的构造方法并传入 length
    // 作为 Polygon's 的 width 和 height
    super(length, length);
    
    // Note: 在派生的类中, super() 必须在 'this' 之前调用
    // 如果漏掉，则会造成引用错误。
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

### 调用父类上的静态方法

你也可以用 super 调用父类的 静态方法。

```
class Human {
  constructor() {}
  static ping() {
    return 'ping';
  }
}

class Computer extends Human {
  constructor() {}
  static pingpong() {
    return super.ping() + ' pong';
  }
}
Computer.pingpong(); // 'ping pong'
```

### 删除 super 上的属性将抛出异常

你不能使用 delete 操作符 加 super.prop 或者 super[expr] 去删除父类的属性, 这样做会抛出 ReferenceError.

```
class Base {
  constructor() {}
  foo() {}
}
class Derived extends Base {
  constructor() {}
  delete() {
    delete super.foo;
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

### Super.prop 不能重写 不可写（non-writable）的属性

当使用 Object.defineProperty 定义一个属性为不可写时, super 将不能重写这个属性的值.

```
class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false, 
      value: 1
    });
  } 
  f() { 
    super.prop = 2;
  }
}

var x = new X();
x.f();
console.log(x.prop); // 1
```

### 在对象字面量中使用 super.prop

Super 也可以用在使用字面量进行对象初始化（ object initializer / literal ）。 在下面的例子中，两个对象各定义了一个方法。在第二个对象中, 我们使用 super 调用了第一个对象中的方法。 当然，这需要我们先利用 Object.setPrototypeOf() 将第二个对象的原型设为第一个对象, 然后才能够使用 super  调用到对象1上的method1.

```
var obj1 = {
  method1() {
    console.log("method 1");
  }
}

var obj2 = {
  method2() {
   super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
```

### Links


[super](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super)

（完）

[MIT License](https://opensource.org/licenses/mit-license.html). ©  [Running Lee](mailto:lihui870920@gmail.com)