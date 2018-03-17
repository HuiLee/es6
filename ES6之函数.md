# ES6 函数

ES6重新定义了函数和类，增加了默认参数，类扩展，使得JS与其他语言有了真正意义的面向对象语法

## 默认值和解构数组

ES6之前声明函数参数式不可以使用默认参数的，同样声明的参数需要罗列出来，这样会使得参数很臃肿，
新版本ES6很好的处理这些问题

```js
function getUser([name = 'Hui Lee', age = 30] = []) {
    console.log(`${name} is ${age} years old.`);
}

getUser();

getUser(['Crazy Lee', 28]);
```

数组声明变量，等号赋值

## 默认值和结构对象

函数可以让对象成为一个默认参数，可以使用对象解构：

```js
function getProfile({name = 'Hui Lee', age = 30} = {}) {
    console.log(`${name} is ${age} years old.`);
}

getProfile();

getProfile({name:'Bruce Lee', age:30});
```
对象声明变量，等号赋值，传入的是对象参数

数组需要注意顺序，对象无关乎顺序

```js
function buildHouse({floors=1,color='red',walls='brick'} = {}){
    return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`;
}

console.log(buildHouse());

console.log(buildHouse({}));

console.log(buildHouse({floors: 3, color: 'yellow'}));
```

## JavaScript 类

ES6以前的JS类其实就是原型的扩展，与其他高级语言的面向对象相比比较奇异，那在ES6中讲原型包装打扮之后已经乔装成现代流行语言了，目前统一网红脸了，包装了以下主要几个特性：

* 构造函数使用`new`关键字被调用
* 构造函数以大写字母命名
* 构造函数控制被创建的对象的数据的设置
* 继承的方法放在构造函数的原型对象上


```js
class Person {
    constructor(sex) {
        this.sex = sex;
    }

    who() {
        let sex = this.sex;
        console.log(`this is a ${sex}`);
    }
}

const person = new Person('girl');
person.who();
```


