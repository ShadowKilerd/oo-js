
import Person from './person';

export default class Worker extends Person {
    introduce() {
        return `${super.introduce()} I am a Worker. I have a job.`;
    }
}
