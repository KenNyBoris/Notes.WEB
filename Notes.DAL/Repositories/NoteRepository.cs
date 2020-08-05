using Notes.DAL.Context;
using Notes.DAL.Entities;
using Notes.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Notes.DAL.Repositories
{
    public class NoteRepository : INoteRepository
    {
        public string Create(Note entity)
        {
            entity.Id = Guid.NewGuid();
            NoteContext.Notes.Add(entity);
            return entity.Id.ToString();
        }

        public void Delete(string id)
        {
            var note = NoteContext.Notes
                .FirstOrDefault(s => s.Id.Equals(Guid.Parse(id)));
            if (note != null)
            {
                note.IsDeleted = true;
                Update(note);
            }
        }

        public List<Note> GetAll()
        {
            return NoteContext.Notes.Where(s => s.IsDeleted == false).ToList();
        }

        public Note GetById(string id)
        {
            return NoteContext.Notes.FirstOrDefault(s => s.Id == Guid.Parse(id) && s.IsDeleted == false);
        }

        public void Update(Note entity)
        {
            var index = NoteContext.Notes.FindIndex(s => s.Id == entity.Id);
            NoteContext.Notes[index] = entity;
        }
    }
}
