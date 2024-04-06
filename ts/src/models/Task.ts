import { Note } from "./Note.js"
import { isTask } from "../interfaces/isTask.js"

export class Task extends Note implements isTask {
    deadlineDate: Date;

    constructor(id: number, title: string, text: string, imageAddress: string, deadlineDate: Date) {
        super(id, title, text, imageAddress);
        this.deadlineDate = deadlineDate;
    }

    alert() {
        alert(`Note created on: ${this.creationDate}\nDeadline: ${this.deadlineDate}`);
    }
}

// export default Task;