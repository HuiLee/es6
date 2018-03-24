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

class Leer {
    constructor(sex) {
        this.sex = sex;
    }

    static me() {
        console.log('this is super man.');
    }

    who() {
        let sex = this.sex;
        console.log(`this is a ${sex}`);
    }
}

const leer = new Leer('girl');
leer.who();

console.log(typeof leer);

class CrazyLeer {
    constructor(name) {
        this.name = name;
    }

    static me() {
        return 'this is a super man.';
    }
}

console.log(CrazyLeer.me());

class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    work() {
        return `${this.name} can work well.`
    }

    face() {
        if (this.sex === 'man') {
            return 'handsome';
        } else {
            return 'pretty';
        }
    }
}

class Man extends Person {
    constructor(name, sex, address = 'China') {
        super(name, sex);
        this.address = address;
    }


    work() {
        let face = super.face();
        return `The ${face} ${super.work()}`;
    }
}

const man = new Man('Hui Lee', 'man');

console.log(man.work());


const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNames = names.filter(function(name) {
    return name.length > 6;
});

const longNames = names.filter(name => name.length > 6);

console.log(longNames);