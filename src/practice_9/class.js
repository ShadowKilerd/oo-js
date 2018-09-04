export default class Class {
    constructor(number) {
        this.number = number;
        this.leader = null;
        this.students = [];
    }

    toString() {
        return this.number;
    }

    assignLeader(student) {
        if (this === student.klass) {
            this.leader = student;
            if (!this.students.includes(student)) {
                console.log('It is not one of us.');
            }
        }
    }

    appendMember(student) {
        student.klass = this;
        if (!this.students.includes(student)) {
            this.students.push(student);
        }
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }
}
