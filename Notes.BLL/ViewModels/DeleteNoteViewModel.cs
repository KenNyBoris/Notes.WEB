using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Notes.BLL.ViewModels
{
    public class DeleteNoteViewModel
    {
        public string Id { set; get; }
        /// <summary>
        /// Can contain deleting reason for example
        /// </summary>
        //public string Description { set; get; }
    }
}
