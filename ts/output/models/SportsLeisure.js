import { Note } from "./Note.js";
export class SportsLeisure extends Note {
    constructor(id, title, text, imageAddress, location, eventDate, time, equipmentRequired) {
        super(id, title, text, imageAddress);
        this.location = location;
        this.eventDate = eventDate;
        this.time = time;
        this.equipmentRequired = equipmentRequired;
    }
    alert() {
        alert(`Event Date: ${this.eventDate}\nTitle: ${this.title}\nLocation: ${this.location}\nTime: ${this.time}\nEquipment Required: ${this.equipmentRequired.join(', ')}`);
    }
}
// export default SportsLeisureNote
