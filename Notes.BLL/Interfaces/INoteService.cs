using Notes.BLL.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Notes.BLL.Interfaces
{
    public interface INoteService
    {
        GetAllNotesViewModel GetAll();
        GetNoteViewModel GetById(string id);
        string Create(CreateNoteViewModel note);
        void Update(UpdateNoteViewModel note);
        void Delete(DeleteNoteViewModel note);
    }
}
