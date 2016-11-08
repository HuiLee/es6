# Import和export

## Import

import语句 用于从外部模块、其他脚本中导入函数、对象或者原型，这些被导入的模型必须在其他的模块或者脚本中被导出的。

> 注意：这个特性目前没有在所有浏览器中原生实现。它有许多转译器实现，如 Traceur Compiler ， Babel 或者 Rollup。

### 语法

```
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

```
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



[MIT License](https://opensource.org/licenses/mit-license.html). ©  [Running Lee](mailto:lihui870920@gmail.com)