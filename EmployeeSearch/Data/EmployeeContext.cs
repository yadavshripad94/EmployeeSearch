using EmployeeSearch.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeSearch.Data
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions options) : base(options)
        {
        }

       DbSet<Employee> Employees { get; set; }
    }
}
