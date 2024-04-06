import { Note } from "./Note.js"
import { isSportsLeisure } from "../interfaces/isSportsLeisure.js"

export class SportsLeisure extends Note implements isSportsLeisure {
    location: string;
    eventDate: Date;
    time: string;
    equipmentRequired: string[];

    constructor(id: number, title: string, text: string, imageAddress: string, location: string, eventDate: Date, time: string, equipmentRequired: string[]) {
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
