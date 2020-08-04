using AutoMapper;
using Notes.BLL.Interfaces;
using Notes.BLL.ViewModels;
using Notes.DAL.Entities;
using Notes.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Notes.BLL.Services
{
    public class NoteService : INoteService
    {
        private readonly INoteRepository _noteRepository;
        private readonly IMapper _mapper;
        public NoteService(INoteRepository noteRepository, IMapper mapper)
        {
            _noteRepository = noteRepository;
            _mapper = mapper;
        }

        public string Create(CreateNoteViewModel noteModel)
        {
            var note = _mapper.Map<Note>(noteModel);
            return _noteRepository.Create(note);
        }

        public void Delete(DeleteNoteViewModel note)
        {
            _noteRepository.Delete(note.Id);
        }

        public GetAllNotesViewModel GetAll()
        {
            var noteList = _noteRepository.GetAll();
            var notes = new GetAllNotesViewModel();
            notes.Notes = _mapper.Map<IEnumerable<GetAllNotesNoteModelViewModel>>(noteList);
            return notes;
        }

        public GetNoteViewModel GetById(string id)
        {
            var note = _noteRepository.GetById(id);
            var resultNote = _mapper.Map<GetNoteViewModel>(note);
            return resultNote;
        }

        public void Update(UpdateNoteViewModel noteModel)
        {
            var note = _mapper.Map<Note>(noteModel);
            _noteRepository.Update(note);
        }
    }
}
