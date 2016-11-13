# Promise

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

## 语法


> new Promise(executor);
> new Promise(function(resolve, reject) { ... });

### 参数

#### executor

带有 resolve 、reject两个参数的一个函数。这个函数在创建Promise对象的时候会立即得到执行（在Promise构造函数返回Promise对象之前就会被执行），
并把成功回调函数（resolve）和失败回调函数（reject）作为参数传递进来。调用成功回调函数（resolve）和失败回调函数（reject）会分别触发promise的成功或失败。
这个函数通常被用来执行一些异步操作，操作完成以后可以选择调用成功回调函数（resolve）来触发promise的成功状态，或者，在出现错误的时候调用失败回调函数（reject）来触发promise的失败。

### 描述

Promise 对象是一个返回值的代理，这个返回值在promise对象创建时未必已知。它允许你为异步操作的成功返回值或失败信息指定处理方法。 这使得异步方法可以像同步方法那样返回值：异步方法会返回一个包含了原返回值的 promise 对象来替代原返回值。

#### Promise对象有以下几种状态:

* pending: 初始状态, 既不是 fulfilled 也不是 rejected.
* fulfilled: 成功的操作.
* rejected: 失败的操作.

pending状态的promise对象既可转换为带着一个成功值的fulfilled 状态，也可变为带着一个失败信息的 rejected 状态。当状态发生转换时，promise.then绑定的方法（函数句柄）就会被调用。(当绑定方法时，如果 promise对象已经处于 fulfilled 或 rejected 状态，那么相应的方法将会被立刻调用， 所以在异步操作的完成情况和它的绑定方法之间不存在竞争条件。)

因为Promise.prototype.then和 Promise.prototype.catch方法返回 promises对象, 所以它们可以被链式调用—— 一种被称为 composition 的操作。

![](/screenshot/promises.png)








[MIT License](https://opensource.org/licenses/mit-license.html). ©  [Running Lee](mailto:lihui870920@gmail.com)