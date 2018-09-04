import Person from './person';

export default class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    isLeaderOrNot() {
        if (this.klass.leader === this) {
            return `Leader of ${this.klass.getDisplayName()}`;
        }
        return `at ${this.klass.getDisplayName()}`;
    }

    introduce() {
        return `${super.introduce()} I am a Student. I am ${this.isLeaderOrNot()}.`;
    }
}
