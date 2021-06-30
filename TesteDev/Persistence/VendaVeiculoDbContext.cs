using Microsoft.EntityFrameworkCore;
using TesteDev.Models;

namespace TesteDev.Persistence
{
    public class VendaVeiculoDbContext : DbContext
    {
        public DbSet<Veiculo> Veiculo { get; set; }

        public DbSet<Proposta> Proposta { get; set; }

        public VendaVeiculoDbContext(DbContextOptions options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Proposta>()
                .HasOne(x => x.Veiculo)
                .WithMany(x => x.Proposta)
                .HasForeignKey(x => x.VeiculoId);

            modelBuilder.Entity<Veiculo>()
                .HasMany(x => x.Proposta)
                .WithOne(x => x.Veiculo)
                .HasForeignKey(x => x.VeiculoId);
        }
    }
}
