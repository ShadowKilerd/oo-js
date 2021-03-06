import Person from './person';

export default class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klasses = klass || null;
    }

    classInformation() {
        return this.klasses ? `Class ${this.klasses}` : 'No Class';
    }

    introduceWith(student) {
        const isTeaching = this.klasses === student.klass ? '' : 'don\'t ';
        return `${super.introduce()} I am a Teacher. I ${isTeaching}teach ${student.name}.`;
    }

    introduce() {
        return `${super.introduce()} I am a Teacher. I teach ${this.classInformation()}.`;
    }
}
