function getUser([name = 'Hui Lee', age = 30] = []) {
    console.log(`${name} is ${age} years old.`);
}

getUser();

getUser(['Crazy Lee', 28]);

function getProfile({name = 'Hui Lee', age = 30} = {}) {
    console.log(`${name} is ${age} years old.`);
}

getProfile();

getProfile({name: 'Bruce Lee', age: 30});

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



