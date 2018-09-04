export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.introduce = this.introduce.bind(this);
    }


    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}
