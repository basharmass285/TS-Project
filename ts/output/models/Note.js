export class Note {
    constructor(id, title, text, imageAddress) {
        this.id = id;
        this.creationDate = new Date();
        this.title = title;
        this.text = text;
        this.imageAddress = imageAddress;
    }
}
