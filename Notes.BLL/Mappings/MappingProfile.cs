using AutoMapper;
using Notes.BLL.ViewModels;
using Notes.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Notes.BLL.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Note, GetAllNotesNoteModelViewModel>();
            CreateMap<Note, GetNoteViewModel>();
            CreateMap<CreateNoteViewModel, Note>();
            CreateMap<UpdateNoteViewModel, Note>();
        }
    }
}
