# Import和export

## Import

import语句 用于从外部模块、其他脚本中导入函数、对象或者原型，这些被导入的模型必须在其他的模块或者脚本中被导出的。

> 注意：这个特性目前没有在所有浏览器中原生实现。它有许多转译器实现，如 Traceur Compiler ， Babel 或者 Rollup。

### 语法

```js
import defaultMember from "module-name"; 
import * asname from "module-name"; 
import { member } from "module-name"; 
import { member as alias } from "module-name"; 
import { member1 , member2 } from "module-name"; 
import { member1 , member2 as alias2 , [...] } from "module-name"; 
import defaultMember, { member [ , [...] ] } from "module-name"; 
import defaultMember, * as name from "module-name"; 
import "module-name";
```

***name***

用于接收导入的值的对象名称。

***member, memberN***

要导入的已导出成员名称。

***defaultMember***

导入对象的名称，用于表示被导入模块的导出对象。

***alias, aliasN***

用于接收导入的属性的对象名称。

***module-name***

需要导入的模块名称。这是一个文件名。

### 描述

name参数用于接收导出成员的对象名称。member参数指定独立成员，而name参数导入所有成员。如果模块导出单个默认参数，而不是一系列成员，name也可以是函数。
下面提供一些示例说明语法。

导入整个模块的内容。以下代码将myModule添加到当前作用域，其中包括所有导出绑定。

> import  * as myModule from "my-module";

导入模块的单个成员。以下代码将myMember添加到当前作用域。

> import {myMember} from "my-module";

导入模块的多个成员。以下代码会将foo和bar都添加到当前作用域。

> import {foo, bar} from "my-module";

导入整个模块的内容，其中一些被显式命名。
以下代码将myModule，foo，bar插入到当前作用域。注意，foo和myModule.foo是完全相同的，bar和myModule.bar也是如此。

> import MyModule, {foo, bar} from "my-module";

导入成员并指定一个方便的别名。以下代码将shortName添加到当前作用域。

> import {reallyReallyLongModuleMemberName as shortName} from "my-module";

导入整个模块，具有不导入绑定的副作用。

> import {reallyReallyLongModuleMemberName as shortName, anotherLongModuleName as short} from "my-module";

导入多个模块并且带有别名。

> import "my-module";

### 导入默认

可以导出默认选项，无论是一个对象，一个函数或一个 class。相对地， 也可以使用 import 导入默认成员。

最简单版本，直接导入默认。

> import myDefault from "my-module";

也可以使用上面提到的方式导入命名空间。

> import myDefault, * as myModule from "my-module";
> // myModule used as a namespace

或者导入已有命名的默认项。这两种情况下，默认导入项必须最先声明。

> import myDefault, {foo, bar} from "my-module";
>  // specific, named imports

### 例子

导入另一个文件，以便辅助处理AJAX JSON请求。

```js
// --file.js--
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () { 
    callback(this.responseText) 
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}

// --main.js--
import { getUsefulContents } from "file";
getUsefulContents("http://www.example.com", data => {
  doSomethingUseful(data);
});
```


## Export

export语句用于从给定文件（或模块）导出函数和对象。

## 语法

```js
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```

***nameN***

导出的标识符（用来被其他脚本的 import 导入）

## 描述

有两种不同的导出方式，每种方式对应于上述的一种语法：

* 命名导出：

```js
export { myFunction }; // 导出一个函数声明
export const foo = Math.sqrt(2); // 导出一个常量
```

* 默认导出 (每个脚本只能有一个)：

```js
export default myFunctionOrClass // 或者 'export default class {}'
// 这里没有分号
```

对于只导出一部分值来说，命名导出的方式很有用。在导入时候，可以使用相同的名称来引用对应导出的值。

关于默认导出方式，每个模块只有一个默认导出。一个默认导出可以是一个函数，一个类，一个对象等。当最简单导入的时候，这个值是将被认为是”入口”导出值。

## 示例

### 命名导出

在这个模块里，我们可以这么导出：

```js
// module "my-module.js"
export function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
export { foo };
```

这样的话，在其它脚本 (cf. import)，我们可以这样使用：

```js
import { cube, foo } from 'my-module.js';
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888
```

### 默认导出

如果我们只想导出一个简单的值或者想在模块中保留一个候选值，就可以使用默认导出：

```js
// module "my-module.js"
export default function cube(x) {
  return x * x * x;
}
```

然后，在另一个脚本中，默认的导出值就可以被简单直接的导入：

```js
// module "my-module.js"
import cube from 'my-module';
console.log(cube(3)); // 27​​​​​
```

(完)

[MIT License](https://opensource.org/licenses/mit-license.html). ©  [Running Lee](mailto:lihui870920@gmail.com)