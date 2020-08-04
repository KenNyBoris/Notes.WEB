import { Component, OnInit, Output } from '@angular/core';
import { NoteService } from '../services/note.service';
import { EventEmitter } from 'protractor';
import { GetAllNotesModelViewModel } from '../models/note/get-all-notes.model';
import {MatDialog} from "@angular/material/dialog";
import {NoteDetailsComponent} from "../note-details/note-details.component";
import {CreateNoteModel} from "../models/note/create-note.model";
import {CreateNoteComponent} from "../create-note/create-note.component";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  //@Output() noteIdChanged = new EventEmitter();
  displayedColumns: string[] = ['title', 'text', 'options'];

  notes: GetAllNotesModelViewModel;
  constructor(private noteService: NoteService,
              private dialog: MatDialog) {
    this.notes = new GetAllNotesModelViewModel();
   }
  ngOnInit(): void {
    this.getAllNotes();
  }

  private getAllNotes(): void {
    this.noteService.getAll().subscribe(response =>{
      this.notes = response;
    })
  }

  create(): void {
    const dialogRef = this.dialog.open(CreateNoteComponent, {
      height: '550px',
      width: '500px',
    })
    dialogRef.afterClosed().subscribe(id => {
      if(id) {
        this.getNoteDetails(id,true);
      }
    });
  }

  getNoteDetails(id: string, afterCreated?: boolean): void {
    const dialogRef = this.dialog.open(NoteDetailsComponent, {
      data: { noteId: id, afterCreated: afterCreated },
      height: '600px',
      width: '500px',
    })
    dialogRef.afterClosed().subscribe(response => {
      if(response) {
        this.getAllNotes();
      }
    });
  }

}
