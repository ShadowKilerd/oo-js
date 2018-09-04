
import Person from './person';

export default class Worker extends Person {
    introduce() {
        return `${super.introduce()} I am a Teacher. I have a job.`;
    }
}
