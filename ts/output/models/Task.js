import { Note } from "./Note.js";
export class Task extends Note {
    constructor(id, title, text, imageAddress, deadlineDate) {
        super(id, title, text, imageAddress);
        this.deadlineDate = deadlineDate;
    }
    alert() {
        alert(`Note created on: ${this.creationDate}\nDeadline: ${this.deadlineDate}`);
    }
}
// export default Task;
