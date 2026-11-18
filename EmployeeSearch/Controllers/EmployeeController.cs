using EmployeeSearch.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmployeeSearch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        public EmployeeContext _context;
        public EmployeeController(EmployeeContext con)
        {
            _context=con;
        }

        [HttpGet("GetAllEmployees")]
        public IActionResult GetAllEmployees()
        {
            var emp = _context.Employees.ToList();
            return Ok(emp);
        }


        [HttpGet("SearchName")]
        public IActionResult SearchEmployees(string name)
        {
            var emp = _context.Employees.AsNoTracking()
                .Where(e => e.name.Contains(name)).ToList();
            return Ok(emp);
        }
        
    }
}
