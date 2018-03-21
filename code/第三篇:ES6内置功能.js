const demo = Symbol('demo');
console.log(demo);

const me = {
    'me': {name: 'lee', sex: 'man'},
    'me': {name: 'Hui', sex: 'man'},
};
console.log(me);


const programmers = {
    [Symbol('php')]: {name: 'ThinkPHP', address: 'China'},
    [Symbol('java')]: {name: 'Spring', address: 'World'},
    [Symbol('python')]: {name: 'Django', address: 'World'},
    [Symbol('php')]: {name: 'Laravel', address: 'America'},
};
console.log(programmers);

const digits = [0, 1, 2, 3, 4, 5, 6];
for (const digit of digits) {
    console.log(digit);
}

const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

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

for (const game of games) {
    console.log(game);
}

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

const projects = new Map();
projects.set('php', {year: 20, desc: 'Top7'});
projects.set('java', {year: 30, desc: 'Top1'});
projects.set('python', {year: 23, desc: 'Top3'});
projects.set('nodejs', {year: 8, desc: 'Top6'});
console.log(projects);
console.log(projects.keys());
console.log(projects.values());
// console.log(projects.next());
for (const project of projects) {
    const [category, content] = project;
    console.log(category, content);
}
projects.forEach(function (value, key, map) {
    console.log(value, key, map);
});

const promise = new Promise(function (resolve, reject) {
    // setTimeout(function () {
    //     const success = {name: 'Hui Lee', address: 'ErQi'};
    //     resolve(success);
    // }, 1000);

    setTimeout(function () {
        const error = {msg: 'Ops, you had a problem'};
        reject(error);
    }, 3000);
});

promise.then(function (result) {
    console.log(result);
}, function (error) {
    console.log(error);
});

function* superMan() {
    const superStars = ['LiAn', 'FengXiaogang', 'ZhangYimou'];
    for (const star of superStars) {
        // console.log(star);
        yield star;
    }
}

// 获取迭代器，迭代次数为size+1
const superLeer = superMan();

console.log(superLeer.next());
console.log(superLeer.next());

function* createSundae() {
    const toppings = [];
    //step1
    toppings.push(yield);
    //step2
    toppings.push(yield);
    //step3
    toppings.push(yield);

    return toppings;
}

const it = createSundae();
//第一次迭代yield返回undefined，传入的数据无法存入生成器中
console.log(it.next('Hui Lee'));
//第二次迭代yield返回undefined,会执行第一次断点代码保存数据
console.log(it.next('sprinkles'));
//第三次迭代yield返回undefined，会执行第二次断点的代码保存数据
console.log(it.next('whipped cream'));
//第四次迭代yield返回undefined，会执行第三次断电的代码保存数据
console.log(it.next());
//迭代结束，数组结果是['sprinkles','whipped cream','undefined']

function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}
const iterator = displayResponse();
//遇到yield返回undefined，并保持断点；
iterator.next();
//继续断点位置，往下执行，穷尽迭代
iterator.next('Okay');











