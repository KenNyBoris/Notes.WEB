export class GetAllNotesModelViewModel {
    notes: GetAllNotesNoteModelViewModel[];
    constructor(){
        this.notes = [];
    }
}

export class GetAllNotesNoteModelViewModel {
    id: string;
    title: string;
    text: string;
}
