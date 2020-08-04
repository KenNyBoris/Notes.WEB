using Notes.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Notes.DAL.Context
{
    public class NoteContextInitializer
    {
        public static void Load()
        {
            NoteContext.Notes = new List<Note>()
            {
                new Note(){ Id = Guid.NewGuid(), Title = "Hello world", Text = "Hello my dear friend, how are you?" },
                new Note(){Id =  Guid.NewGuid(), Title = "My first note", Text = "This is second note for testing my app"},
                new Note(){ Id =  Guid.NewGuid(), Title = "Bye bye world", Text = "This is last note for this app =("}
            };
        }
    }
}
