# ES6语法

## 变量声明

以前使用var声明变量会有一个变量提升的问题，这样导致变量的作用域不可控，使用let变量声明和const常量声明可以使函数作用域降到块区间，举个变量提升的列子：

```js
function goHome(tool){
	if(tool){
		var car = 'By Car';
		console.log(car)
	}else{
		var cookie = 'FYI';
		console.log(car)
	}
}
```

执行 goHome() 得到 undefined，实际是变量提升所致

```js
function goHome(tool){
   var car，cookie；
	if(tool){
	   car = 'By Car';
		console.log(car)
	}else{
		cookie = 'FYI';
		console.log(car)
	}
}
```

针对以上情况，新的语法中let和const做了严格的块作用域，下面是定义的规则

* let 声明的变量可以重新赋值，同一作用域不可以重复声明该变量，用于动态变量声明
* const 声明的变量必须有初始值，同一作用域不可以重复声明该变量，也不可重新赋值，用于静态变量声明

```js
function goSchool(tool){
	let type;
	const teacher = 'Mrs Hu';
	if(tool == 'Car'){
		type = 'By Car';
	}else{
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
function sleep(){
	let timer = '12:30';
	console.log(`I go to bed at ${timer}`);
}
```
告别字符串加号连接变量时代

```js
function getHtml(code){
	let style = '1px solid ###ccc';
	let html = `<div style="${style}">
					<p>This is ${code} code, which is greet!</p>
				</div>`;
	return html;
}
```

执行getHtml('Html')会返回HTML的DOM文档，这样可以直接输出，不需要换行，字符拼接，快捷高效

## 解构数组

## 对象字面量

## 迭代

## For循环系列

### For...Of循环

## 展开...运算符




