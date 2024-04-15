using Memoteca.Entities;
using Microsoft.EntityFrameworkCore;

namespace Memoteca.Context;
public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Pensamento> Pensamentos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pensamento>().HasKey(e => e.Id);
            base.OnModelCreating(modelBuilder);
        }
    }
