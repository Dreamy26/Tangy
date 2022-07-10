using System;
using Microsoft.EntityFrameworkCore;

namespace Tangy_DataAccess.Data
{
    public class ApplicationDbContext : DbContext
    {
        // ctor, receives DbContext options_class ApplicationDbContext passed to the baseclass of DbContext
        // default configuration
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Category> Categories { get; set; } // DbSet_Class Categories / Categories table inside database
    }


}

