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

### 属性

#### Promise.length

长度属性，其值为 1 (构造器参数的数目).

#### Promise.prototype

表示 Promise 构造器的原型.

### 方法

#### Promise.all(iterable)

这个方法返回一个新的promise对象，该promise对象在iterable里所有的promise对象都成功的时候才会触发成功，一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败。这个新的promise对象在触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值，顺序跟iterable的顺序保持一致；如果这个新的promise对象触发了失败状态，它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息。Promise.all方法常被用于处理多个promise对象的状态集合。（可以参考jQuery.when方法---译者注）

#### Promise.race(iterable)

当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。

#### Promise.reject(reason)

调用Promise的rejected句柄，并返回这个Promise对象。

#### Promise.resolve(value)

用成功值value完成一个Promise对象。如果该value为可继续的（thenable，即带有then方法），返回的Promise对象会“跟随”这个value，采用这个value的最终状态；否则的话返回值会用这个value满足（fullfil）返回的Promise对象。

## Promise原型

### 属性

#### Promise.prototype.constructor

返回创建了实例原型的函数.  默认为 Promise 函数.

### 方法

#### Promise.prototype.catch(onRejected)

添加一个否定(rejection) 回调到当前 promise, 返回一个新的promise。如果这个回调被调用，新 promise 将以它的返回值来resolve，否则如果当前promise 进入fulfilled状态，则以当前promise的肯定结果作为新promise的肯定结果.

#### Promise.prototype.then(onFulfilled, onRejected)

添加肯定和否定回调到当前 promise, 返回一个新的 promise, 将以回调的返回值 来resolve.

### 示例

#### 创建Promise

这个小例子展示了Promise的机制。每当<button>被按下时，testPromise() 函数就会被执行。该函数会创建一个用window.setTimeout在1到3秒（随机）后用‘result’字符串完成的promise。

这里通过p1.then方法的满足回调，简单的输出了promise的满足过程，这些输出显示了该方法的同步部分是如何和promise的异步完成解耦的。

```js
<!--标注：下面略微修改了英文版的示例，主要是执行3次testPromise()的效果，如果您有疑问，可以参看英文的说明文档：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise-->
<div id="log"></div>
<script>
    'use strict';
    var promiseCount = 0;
    function testPromise() {
        var thisPromiseCount = ++promiseCount;

        var log = document.getElementById('log');
        log.insertAdjacentHTML('beforeend', thisPromiseCount + ') 开始(同步代码开始)<br/>');

        // 我们创建一个新的promise: 然后用'result'字符串完成这个promise (3秒后)
        var p1 = new Promise(function (resolve, reject) {
            // 完成函数带着完成（resolve）或拒绝（reject）promise的能力被执行
            log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise开始(异步代码开始)<br/>');

            // 这只是个创建异步完成的示例
            window.setTimeout(function () {
                // 我们满足（fullfil）了这个promise!
                resolve(thisPromiseCount)
            }, Math.random() * 2000 + 1000);
        });

        // 定义当promise被满足时应做什么
        p1.then(function (val) {
            // 输出一段信息和一个值
            log.insertAdjacentHTML('beforeend', val + ') Promise被满足了(异步代码结束)<br/>');
        });

        log.insertAdjacentHTML('beforeend', thisPromiseCount + ') 建立了Promise(同步代码结束)<br/><br/>');
    }
</script>
```

这个例子在按钮被按下后执行。你需要一个支持Promise的浏览器。你能通过短时间内按多次按钮看到不同的promise一个接一个的被完成。

## 使用XMLHttpRequest()的例子

### 创建一个Promise

这个例子展示了如何用promise报告一个XMLHttpRequest的成功或失败。

```js
'use strict';

// A-> $http function is implemented in order to follow the standard Adapter pattern
function $http(url){
 
  // A small example of object
  var core = {

    // Method that performs the ajax request
    ajax : function (method, url, args) {

      // Creating a promise
      var promise = new Promise( function (resolve, reject) {

        // Instantiates the XMLHttpRequest
        var client = new XMLHttpRequest();
        var uri = url;

        if (args && (method === 'POST' || method === 'PUT')) {
          uri += '?';
          var argcount = 0;
          for (var key in args) {
            if (args.hasOwnProperty(key)) {
              if (argcount++) {
                uri += '&';
              }
              uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
            }
          }
        }

        client.open(method, uri);
        client.send();

        client.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            // Performs the function "resolve" when this.status is equal to 2xx
            resolve(this.response);
          } else {
            // Performs the function "reject" when this.status is different than 2xx
            reject(this.statusText);
          }
        };
        client.onerror = function () {
          reject(this.statusText);
        };
      });

      // Return the promise
      return promise;
    }
  };

  // Adapter pattern
  return {
    'get' : function(args) {
      return core.ajax('GET', url, args);
    },
    'post' : function(args) {
      return core.ajax('POST', url, args);
    },
    'put' : function(args) {
      return core.ajax('PUT', url, args);
    },
    'delete' : function(args) {
      return core.ajax('DELETE', url, args);
    }
  };
};
// End A

// B-> Here you define its functions and its payload
var mdnAPI = 'https://developer.mozilla.org/en-US/search.json';
var payload = {
  'topic' : 'js',
  'q'     : 'Promise'
};

var callback = {
  success : function(data){
     console.log(1, 'success', JSON.parse(data));
  },
  error : function(data){
     console.log(2, 'error', JSON.parse(data));
  }
};
// End B

// Executes the method call 
$http(mdnAPI) 
  .get(payload) 
  .then(callback.success) 
  .catch(callback.error);

// Executes the method call but an alternative way (1) to handle Promise Reject case 
$http(mdnAPI) 
  .get(payload) 
  .then(callback.success, callback.error);

// Executes the method call but an alternative way (2) to handle Promise Reject case 
$http(mdnAPI) 
  .get(payload) 
  .then(callback.success)
  .then(undefined, callback.error);
```

### 使用XHR加载图像

另一个用了Promise和XMLHttpRequest加载一个图像的例子可在MDN GitHub promise-test 中找到。 你也可以 see it in action。每一步都有注释可以让你详细的跟随了解Promise和XHR架构。

### License

[MIT License](https://opensource.org/licenses/mit-license.html). ©  [Running Lee](mailto:lihui870920@gmail.com)