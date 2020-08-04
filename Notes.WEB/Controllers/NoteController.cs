using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Notes.BLL.Interfaces;
using Notes.BLL.ViewModels;

namespace Notes.WEB.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private readonly INoteService _noteService;
        public NoteController(INoteService noteService)
        {
            _noteService = noteService;
        }

        [HttpGet]
        [ActionName("get-all")]
        public GetAllNotesViewModel GetAll()
        {
            var notes = _noteService.GetAll();
            return notes;
        }

        [HttpGet]
        [ActionName("get-by-id")]
        public GetNoteViewModel GetById(string id)
        {
            var notes = _noteService.GetById(id);
            return notes;
        }

        [HttpPost]
        [ActionName("create")]
        public CreateNoteResponse Create(CreateNoteViewModel note)
        {
            var id = _noteService.Create(note);
            var response = new CreateNoteResponse() { Id = id };
            return response;
        }

        [HttpPut]
        [ActionName("update")]
        public IActionResult Update(UpdateNoteViewModel note)
        {
            _noteService.Update(note);
            return Ok();
        }

        [HttpDelete]
        [ActionName("delete")]
        public IActionResult Delete(DeleteNoteViewModel note)
        {
            _noteService.Delete(note);
            return Ok();
        }
    }
}
