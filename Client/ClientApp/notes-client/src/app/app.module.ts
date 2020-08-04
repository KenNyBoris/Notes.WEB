import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NoteDetailsComponent } from './note-details/note-details.component';
import {CommonModule} from "@angular/common";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { CreateNoteComponent } from './create-note/create-note.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteDetailsComponent,
    CreateNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NoopAnimationsModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    NgbModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    MatInputModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
