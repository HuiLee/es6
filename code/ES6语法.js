function goHome(tool) {
    if (tool) {
        var car = 'By Car';
        console.log(car)
    } else {
        var cookie = 'FYI';
        console.log(car)
    }
}


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

goHome();

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

goSchool();

function sleep() {
    let timer = '12:30';
    console.log(`I go to bed at ${timer}`);
}

sleep();

function getHtml(code) {
    let style = '1px solid ###ccc';
    let html = `<div style="${style}">
    <p>This is ${code} code, which is greet!</p>
</div>`;
    return html;
}

console.log(getHtml('HTML'));

const array = ['Name', 'Sex', 'Address'];
const x = array[0];
const y = array[1];
const z = array[2];
console.log(x, y, x);

const [x1, y1, z1] = ['Name', 'Sex', 'Address'];
console.log(x1, y1, z1);

let things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];
const [one, , , two, , , , three] = things;
const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;
console.log(colors);

const name = "Hui Lee", sex = 'Man', address = 'HeNan China';
const IdCard = {
    name: name,
    sex: sex,
    address: address
};

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const index in digits) {
    console.log(index);
    console.log(digits[index]);
}

const order = ['Zhengzhou', 'BeiJing', 'ShenZhen', 'NanJin', 'WuHan'];
const [zhengzhou, beijing, ...qita] = order;
console.log(zhengzhou, beijing, qita);

function getCity(...cities) {
    for (city of cities) {
        console.log(city);
    }
}

getCity(order);