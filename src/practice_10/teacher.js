import Person from './person';

export default class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses || [];
    }

    classInformation() {
        const classesInfor = this.klasses.map(item => item.number).join(', ');
        return this.klasses.length !== 0 ? `Class ${classesInfor}` : 'No Class';
    }

    introduceWith(student) {
        const isTeaching = this.klasses === student.klass ? '' : 'don\'t ';
        return `${super.introduce()} I am a Teacher. I ${isTeaching}teach ${student.name}.`;
    }

    isTeaching(student) {
        return this.klasses.map(klass => klass.isIn(student)).includes(true);
    }

    introduce() {
        return `${super.introduce()} I am a Teacher. I teach ${this.classInformation()}.`;
    }
}
