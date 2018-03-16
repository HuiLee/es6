# ES6语法

## 变量声明

以前使用var声明变量会有一个变量提升的问题，这样导致变量的作用域不可控，使用let变量声明和const常量声明可以使函数作用域降到块区间，举个变量提升的列子：

```js
function goHome(tool) {
    if (tool) {
        var car = 'By Car';
        console.log(car)
    } else {
        var cookie = 'FYI';
        console.log(car)
    }
}
```

执行 goHome() 得到 undefined，实际是变量提升所致

```js
function goHome(tool) {
    var car, cookie;
    if (tool) {
        car = 'By Car';
        console.log(car)
    } else {
        cookie = 'FYI';
        console.log(car)
    }
}
```

针对以上情况，新的语法中let和const做了严格的块作用域，下面是定义的规则

* let 声明的变量可以重新赋值，同一作用域不可以重复声明该变量，用于动态变量声明
* const 声明的变量必须有初始值，同一作用域不可以重复声明该变量，也不可重新赋值，用于静态变量声明

```js
function goSchool(tool) {
    let type;
    const teacher = 'Mrs Hu';
    if (tool == 'Car') {
        type = 'By Car';
    } else {
        type = 'By Bus';
    }
    console.log(`${teacher} goes school ${type}`);
}
```

以上变量type是动态变量，const是静态变量，type类型可以重复声明，teacher变量只允许声明一次；

如果使用没有定义的变量，代码会直接抛异常报参数未定义错误，请在使用变量之前做好预定义声明；

## 模板字面量

以前声明JS变量支付串要使用+进行字符串连接，通常还会有HTML的DOM元素混合，在IDE中双引号，单引号转换中常常稍有不慎就会出错，在压缩的代码中更是错误层出不穷，现在使用模板字面量可以有效解决这个问题。

使用规则是反引号里面加${expression} 变量即可，该字面量是动态替换参数，原样输出结果，清晰直观

```js
function sleep() {
    let timer = '12:30';
    console.log(`I go to bed at ${timer}`);
}
```
告别字符串加号连接变量时代

```js
function getHtml(code) {
    let style = '1px solid ###ccc';
    let html = `<div style="${style}">
    <p>This is ${code} code, which is greet!</p>
</div>`;
    return html;
}
```

执行getHtml('Html')会返回HTML的DOM文档，这样可以直接输出，不需要换行，字符拼接，快捷高效

## 解构数组

通常开发中，我们需要从数组和对象中取值复制，对于数组而言，我们一边使用索引取参数，对于对象我们常使用属性做键值取参数，通常模式下操作比较繁琐

```js
const array = ['Name', 'Sex', 'Address'];
const x = array[0];
const y = array[1];
const z = array[2];
console.log(x, y, x);
```

ES6中的使用方式

```js
const [x1, y1, z1] = ['Name', 'Sex', 'Address'];
console.log(x1, y1, z1);
```

这样就可以从赋值左侧上的数组中获取元素，其位置是一一对应的

```js
let things = ['red', 'basketball', 'paperclip', 'green', 
'computer', 'earth', 'udacity', 'blue', 'dogs'];
const [one,,,two,,,,three] = things;
const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;
console.log(colors);
```

## 对象字面量及方法

以前我们在声明对象变量的过程中，经常属性名和变量名相同，重复编写相同变量

```js
const name = "Hui Lee", sex = 'Man', address = 'HeNan China';
const IdCard = {
    name: name,
    sex: sex,
    address: address
};
```

ES6中可以做到简单如下方式,属性和变量相同只需要写一遍就自动扩展了

```js
const name = "Hui Lee", sex = 'Man', address = 'HeNan China';
let IdCard = {
    name,
    sex,
    address
};
```

常规的对象中声明方法我们需要使用function，而ES6中可以省略function方法体，这样写起来就非常的简单明了

```js
const name = "Hui Lee", sex = 'Man', address = 'HeNan China';
let IdCard = {
    name,
    sex,
    address，
    getProfile(){...}
};
```

getProfile方法可以简约到这种程度，非常直观

## 迭代

迭代指的是字符，数组，对象的循环遍历

## For循环系列

常见的for循环遍历，一般包括两个条件计数器和退出条件，常见的模式如下

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

另外一种使用方法for...in循环

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const index in digits) {
    //迭代器中的index每次会被重置，可以声明为const
    console.log(index);
    console.log(digits[index]);
}
```

for...in的用法比较局限，可用于数组对象循环，索引方式取值，提升的空间有限

### For...Of循环

for...of的出现是为了优化提升上一个版本的for和for...in的缺陷，for...of循环用于访问任何可迭代的数据类型，其操作方式和for...in一样，不需要使用键值索引了

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
	  if(digit == 3){
	  		continue;
	  }
    console.log(digit);
}
```

干净清爽的一塌糊涂

牛刀小试

```js
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 
'thursday', 'friday', 'saturday'];

for(let day of days){
    day = day.charAt(0).toUpperCase() + day.slice(1)
    console.log(day);
}
```

## 展开...运算符

三个连续的...能够将字面量对象展开为多个元素，其作用是展开元素

```js
const books = ["Python", "DevOps", "BigData", "Kafka"];
console.log(...books);
```

展开运算符的另一个作用是拼接数组，之前使用的是concat方法，请看下面demo

```js
const fruits = ["apples", "bananas", "pears"];

const vegetables = ["corn", "potatoes", "carrots"];

//const older = fruits.concat(vegetables);

const produce = [...fruits,...vegetables];

console.log(produce);
```

拼接数组实在是简单至极

## ...剩余参数

剩余参数也用三个连续的点 ( ... ) 表示，使你能够将不定数量的元素表示为数组，在使用数组赋值或声明数组参数时作用比较突出

```js
const order = ['Zhengzhou', 'BeiJing', 'ShenZhen', 'NanJin', 'WuHan'];
const [zhengzhou, beijing, ...qita] = order;
console.log(zhengzhou, beijing, qita);
```

举个参数数组列子

```js
function getCity(...cities) {
    for (city of cities) {
        console.log(city);
    }
}
getCity(order);
```

本小节与优达学城同步结束 :smile: :smile:






