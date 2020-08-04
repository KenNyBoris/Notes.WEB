import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetAllNotesModelViewModel } from '../models/note/get-all-notes.model';
import { GetNoteViewModel } from '../models/note/get-note.model';
import {UpdateNoteModel} from "../models/note/update-note.model";
import {CreateNoteModel} from "../models/note/create-note.model";
import {CreateNoteResponseModel} from "../models/note/create-note-response.model";


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll():Observable<GetAllNotesModelViewModel> {
    return this.http.get<GetAllNotesModelViewModel>(this.apiUrl + 'Note/get-all');
  }

  getById(id: string):Observable<GetNoteViewModel> {
    return this.http.get<GetNoteViewModel>(this.apiUrl + 'Note/get-by-id',{ params: new HttpParams().set("id", id)});
  }

  create(createNoteModel: CreateNoteModel): Observable<CreateNoteResponseModel> {
    return this.http.post<CreateNoteResponseModel>(this.apiUrl + 'Note/create', createNoteModel);
  }

  update(note: UpdateNoteModel): Observable<void> {
    return this.http.put<void>(this.apiUrl + 'Note/update', note);
  }

}
