import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NoteService} from "../services/note.service";
import {NotificationService} from "../services/notification.service";
import {CreateNoteModel} from "../models/note/create-note.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createNoteModel: CreateNoteModel;
  createNoteForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<CreateNoteComponent>,
              private notificationService: NotificationService,
              private noteService: NoteService) {
    this.createNoteModel = new CreateNoteModel();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.createNoteForm = new FormGroup({
      title: new FormControl(this.createNoteModel.title, Validators.required),
      text: new FormControl(this.createNoteModel.text, Validators.required)
    });
  }
  get getTitleControl() { return this.createNoteForm.controls.title }
  get getTextControl() { return this.createNoteForm.controls.text }

  createNote(): void {
    if(!this.createNoteForm.valid) {
      this.notificationService.showError('Fill required fields!');
      return;
    }
    this.createNoteModel.text = this.getTextControl.value;
    this.createNoteModel.title = this.getTitleControl.value;
    this.noteService.create(this.createNoteModel).subscribe(response => {
      if(!response) {
        this.notificationService.showError('Something went wrong');
        return;
      }
      this.notificationService.showSuccess('Note was created!');
      this.dialogRef.close(response.id);

    })
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
