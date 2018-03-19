# ES6内置功能

ES5中对迭代器，集合，异步，生成器的处理是欠缺的，如果想使用高级一些的功能就需要打一通补丁，插满针管才能像ES6这么灵巧，ES6版本对这些功能进行内置，开箱即用，节约了不少开发成本，下面一个一个剖析。

## 标识符Symbol

Symbol是一种独特的且不可改变的数据类型，经常用来标识对象属性。

要创建Symbol，输入`Symbol()`,并添加一个可选的字符串作为其描述。

```js
const demo = Symbol('demo');
console.log(demo);
```
Symbol创建唯一的标识符，并将其存储在demo中，描述`'demo'`只是用来描述标识符的一种方式，但不能用来访问标识符本身，因此这两个标识符不能比较。

体会一下Symbol的魅力

```js
//覆盖先声明的变量
const me = {
    'me': {name: 'lee', sex: 'man'},
    'me': {name: 'Hui', sex: 'man'},
};
console.log(me);
//不会覆盖先声明的变量
const programmers = {
    [Symbol('php')]: {name: 'ThinkPHP', address: 'China'},
    [Symbol('java')]: {name: 'Spring', address: 'World'},
    [Symbol('python')]: {name: 'Django', address: 'World'},
    [Symbol('php')]: {name: 'Laravel', address: 'America'},
};
console.log(programmers);
```


