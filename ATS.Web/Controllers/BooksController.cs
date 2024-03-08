using ATS.Domain.Interfaces;
using ATS.Domain.Models;
using Microsoft.AspNetCore.Mvc;


namespace ATS.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IRepository<Books> _objbookRepository;
      
        public BooksController(IRepository<Books> oRepository)
        {
            _objbookRepository = oRepository;
        }

        [HttpGet("get")]
        public ActionResult GetAllTheBooks()
        {
            try
            {
                var listAll = _objbookRepository.GetAll().OrderBy(b=>b.title).ToList();

                return Ok(listAll);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("getByFilter")]
        public ActionResult<List<Books>> GetByFilter(Books book)
        { 
            try
            {
               var lstBooks = _objbookRepository.GetAll().Where(
                                                                b=> (b.isbn ==  book.isbn || book.isbn == null)
                                                                &&  (b.title == book.title || book.title == null)
                                                                &&  (b.type == book.type || book.type == null) 
                                                                &&  (b.category == book.category || book.category == null)
                                                                &&  (b.first_name == book.first_name || book.first_name == null)
                                                                &&  (b.last_name == book.last_name || book.last_name == null)
                                                                )
                                              .ToList();

                return lstBooks;
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}