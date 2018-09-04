export default class Class {
    constructor(number) {
        this.number = number;
    }

    toString() {
        return this.number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }
}
