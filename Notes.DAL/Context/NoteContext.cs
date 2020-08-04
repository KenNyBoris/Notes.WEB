using Notes.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Notes.DAL.Context
{
    public static class NoteContext
    {
        public static List<Note> Notes { get; set; }
    }
}
