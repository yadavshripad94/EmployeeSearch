using EmployeeSearch.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

        [HttpGet]
        public IActionResult GetEmployees()
        {
            var emp = _context.Employees.ToList();
            return Ok(emp);
        }

        
    }
}
