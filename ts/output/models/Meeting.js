import { Note } from "./Note.js";
export class Meeting extends Note {
    constructor(id, title, text, imageAddress, location, time) {
        super(id, title, text, imageAddress);
        this.location = location;
        this.time = time;
    }
    alert() {
        alert(`Invitation Date: ${this.creationDate}\nTitle: ${this.title}\nText: ${this.text}\nLocation: ${this.location}\nTime: ${this.time}`);
    }
}
// export default Meeting
