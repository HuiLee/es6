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

## 迭代器协议和可迭代协议

可迭代协议用来定义和自定义对象的迭代行为

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
  console.log(digit);
}
```

迭代器方法（可通过常量[Symbol.iterator]获得）是一个无参数的函数，返回的是迭代器对象。迭代器对象是遵循迭代器协议的对象。

迭代器协议用来定义对象生成一系列值得标准方式，实际上就是现在有了定义对象如何迭代的流程。通过执行`.next()`方法来完成这一流程。

当对象执行`.next()`方法时，就变成了迭代器。`.next()`方法是无参数函数，返回具有两个属性的对象：

1. `value:` 表示对象内置了序列的下个值得数据

2. 表示迭代器是否已经循环访问完值序列的布尔值

* 如果done为true，则迭代器已达到值序列的末尾处
* 如果done为false，者迭代器能够生成值序列中的另一值

小试牛刀


```js
const digits = [0, 1, 2, 3, 4, 5, 6];
const arrayIterator = digits[Symbol.iterator]();
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
```

迭代次数为length+1

## Set集合

一种类似于数组的内置对象，Set类的条目不允许重复，不能单独被访问,如果存在的话会自动移除重复条目

```js
const games = new Set(['Hui Lee', 'Lee Hui', 'Hui Lee']);
console.log(games);
```

添加条目`.add()`,删除条目`.delete()`,清楚条目`.clear()`,返回条目总数使用`.size`,检查是否存在某个条目使用`.has()`,检索所有值使用`.values()`，其返回的是SetIterator

小试牛刀

```js
const games = new Set(['QQ', 'WeChat', 'Sina']);
console.log(games);

games.add('Mi');
games.delete('Sina');
console.log(games);

// console.log(games.clear());

console.log(games.has('Mi'));
console.log(games.size);
console.log(games.values());

const Ha = games.values();
console.log(Ha.next());
console.log(Ha.next());
console.log(Ha.next());
console.log(Ha.next());

for(const game of games){
    console.log(game);
}
```

## Map

如果说Set类似于数组，那么Map就类似于对象，因为Map存储键值对的对象，键和值都可以是对象，原始值和二者的结合。

### 增删改查

下面通过实例进行创建，修改，删除，清空操作

```js
const employees = new Map();
console.log(employees);
employees.set('lihui870920@gmail.com', {
    name: 'Hui Lee',
    age: 30
});
console.log(employees.has('lihui870920@gmail.com'));
employees.set('848335648@qq.com', {
    name: 'Crazy Lee',
    age: 29
});
console.log(employees.get('848335648@qq.com'));
employees.set('848335648@qq.com', {
    name: 'Crazy Lee',
    age: 32
});
employees.delete('848335648@qq.com');
employees.clear();
console.log(employees);
```

通过`new`进行创建，通过 `.set()` 进行添加和修改，通过`.has()`判断是否存在某个对象，通过`.get()`获取对象，通过`.delete()`进行删除，通过`.clear()`进行清空操作, 以上是对Map进行的基础操作，主要处理的目标是对象. 其中使用`.get()`获取的是键值对应的内容。

### 迭代处理

Map遵守可迭代协议和迭代器协议，所以可使用下面三种操作方式进行数据处理：

1. 使用Map的默认迭代器循环访问每个键或值
2. 使用`for...of`进行循环遍历
3. 使用Map的`.forEach()`方法循环访问每个键值

#### 使用MapIterator

在Map上使用`.keys()`和`.values()`方法将返回新的迭代对象，叫做MapIterator. 我们可以使用迭代器对象存储在新的变量中，并使用`.next()`循环访问每个键或值。

下面对上面三种方式做一个演示操作：

```js
const projects = new Map();

projects.set('php',{year:20,desc:'Top7'});
projects.set('java',{year:30,desc:'Top1'});
projects.set('python',{year:23,desc:'Top3'});
projects.set('nodejs',{year:8,desc:'Top6'});

console.log(projects);

console.log(projects.keys());

console.log(projects.values());

//1.使用Map的默认迭代器循环访问每个键或值
console.log(projects.next());

//2.使用`for...of`进行循环遍历
for(const project of projects){
    const [category,content] = project;
    console.log(category,content);
}

//3.使用Map的`.forEach()`方法循环访问每个键值
projects.forEach(function (value, key, map) {
    console.log(value,key,map);
});
```

以上Map对象操作讲解完毕.



