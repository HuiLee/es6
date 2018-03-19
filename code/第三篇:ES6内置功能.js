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

for(const game of games){
    console.log(game);
}




