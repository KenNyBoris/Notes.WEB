using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Notes.BLL.ViewModels
{
    public class GetAllNotesViewModel
    {
        public GetAllNotesViewModel()
        {
            Notes = new List<GetAllNotesNoteModelViewModel>();
        }
        public IEnumerable<GetAllNotesNoteModelViewModel> Notes { get; set; }
    }

    public class GetAllNotesNoteModelViewModel
    {
        public string Id { get; set; }

        public string Title { get; set; }

        public string Text { get; set; }
    }
}
