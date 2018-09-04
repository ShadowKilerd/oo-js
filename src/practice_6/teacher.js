
import Person from './person';

export default class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klasses = klass || null;
    }

    classInformation() {
        return this.klasses ? `Class ${this.klasses}` : 'No Class';
    }

    introduce() {
        return `${super.introduce()} I am a Teacher. I teach ${this.classInformation()}.`;
    }
}
