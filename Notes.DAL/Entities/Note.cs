using System;
using System.Collections.Generic;
using System.Text;

namespace Notes.DAL.Entities
{
    public class Note : BaseEntity
    {
        public string Title { get; set; }

        public string Text { get; set; }
    }
}
