export default class Class {
    constructor(number) {
        this.number = number;
        this.leader = null;
    }

    toString() {
        return this.number;
    }

    assignLeader(student) {
        if (this === student.klass) {
            this.leader = student;
        }
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }
}
