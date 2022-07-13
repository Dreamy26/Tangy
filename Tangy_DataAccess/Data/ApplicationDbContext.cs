using System;
using Microsoft.EntityFrameworkCore;


namespace Tangy_DataAccess.Data;

public class ApplicationDbContext : DbContext
//public class ApplicationDbContext : IdenttityDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {

    }

    public DbSet<Category> Categories { get; set; } // inside Db, creates a table name Categories
}

