import { Note } from "./Note.js"
import { isMeeting } from "../interfaces/isMeeting.js"

export class Meeting extends Note implements isMeeting {
    location: string;
    time: string;

    constructor(id: number, title: string, text: string, imageAddress: string, location: string, time: string) {
        super(id, title, text, imageAddress);
        this.location = location;
        this.time = time;
    }

    alert() {
        alert(`Invitation Date: ${this.creationDate}\nTitle: ${this.title}\nText: ${this.text}\nLocation: ${this.location}\nTime: ${this.time}`);
    }
}

// export default Meeting