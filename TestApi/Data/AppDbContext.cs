using TestApi.Models;
using Microsoft.EntityFrameworkCore;

namespace TestApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) :base(options)
        {

        }

        public virtual DbSet<User> Users { get; set; }
        
    }
}