export default class Class {
    constructor(number) {
        this.number = number;
        this.leader = null;
        this.students = [];
        this.leaderListeners = [];
        this.assignListeners = [];
    }

    toString() {
        return this.number;
    }

    assignLeader(student) {
        if (this === student.klass) {
            this.leader = student;
            this.leaderListeners.map(person => person.getNotice(student, this, true));
        } else {
            console.log('It is not one of us.');
        }
    }

    appendMember(student) {
        student.klass = this;
        if (!this.students.includes(student)) {
            this.students.push(student);
            this.assignListeners.map(person => person.getNotice(student, this, false));
        }
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    isIn(student) {
        return this === student.klass;
    }

    registerAssignLeaderListener(teacher) {
        this.leaderListeners.push(teacher);
    }

    registerJoinListener(teacher) {
        this.assignListeners.push(teacher);
    }
}
