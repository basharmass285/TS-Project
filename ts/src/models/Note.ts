import { isNote } from "../interfaces/isNote.js"

export abstract class Note implements isNote {
    id: number;
    creationDate: Date;
    title: string;
    text: string;
    imageAddress: string;

    constructor(id: number, title: string, text: string, imageAddress: string) {
        this.id = id;
        this.creationDate = new Date();
        this.title = title;
        this.text = text;
        this.imageAddress = imageAddress;
    }
}
