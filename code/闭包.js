// 清屏
document.body.innerHTML = '';

var nums = [1,2,3];

// 循环遍历数组中的每一个数
for (var i = 0; i < nums.length; i++) {

    // 这是数组循环中当前的数值...
    var num = nums[i];

    // 我们为这个数创建了一个 DOM 元素
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... 然后当我们点击 (click) 的时候，提示这个数字
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));

    document.body.appendChild(elem);

};