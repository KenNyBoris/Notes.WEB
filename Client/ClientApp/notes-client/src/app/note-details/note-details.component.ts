import {Component, OnInit, Input, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NoteService} from "../services/note.service";
import {GetNoteViewModel} from "../models/note/get-note.model";
import {UpdateNoteModel} from "../models/note/update-note.model";
import * as _ from 'lodash';
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  private noteId: string;
  noteDetails: GetNoteViewModel;
  editMode: boolean;
  noteWasEdited: boolean;
  private openedAfterCreated?: boolean;
  constructor(private dialogRef: MatDialogRef<NoteDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private noteService: NoteService,
              private notificationService: NotificationService) {
    this.noteId = data.noteId;
    this.noteDetails = new GetNoteViewModel();
    this.noteWasEdited = false;
    this.editMode = false;
    this.openedAfterCreated = data.afterCreated;
  }

  ngOnInit(): void {
    this.noteService.getById(this.noteId).subscribe(response => {
      this.noteDetails = response;
    })
  }

  edit(): void {
    this.editMode = true;
    this.noteWasEdited = true;
  }

  cancelEdit(): void {
    this.editMode = false;
    this.noteWasEdited = false;
  }

  close(): void {
    const shouldUpdateListAfterClosed = this.noteWasEdited || this.openedAfterCreated;
    this.dialogRef.close(shouldUpdateListAfterClosed);
  }

  save(): void {
    let noteModel = new UpdateNoteModel();
    noteModel = _.clone(this.noteDetails);
    this.noteService.update(noteModel).subscribe(() => {
      this.notificationService.showSuccess("Note was updated");
      this.editMode = false;
    });
  }
}
