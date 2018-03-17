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

