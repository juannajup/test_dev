using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TesteDev.Models;
using TesteDev.Persistence.Interfaces;

namespace TesteDev.Persistence
{
    public class VeiculoRepository : IVeiculoRepository
    {
        private readonly VendaVeiculoDbContext _context;

        public VeiculoRepository(VendaVeiculoDbContext context)
        {
            _context = context;
        }

        public async Task<IList<Veiculo>> Veiculos()
        {
            var result = await _context.Veiculo
                .Include(nameof(Veiculo.Proposta))
                .ToListAsync();

            return result;
        }

        public async Task<Veiculo> ObterPorId(Guid id)
        {
            var query = _context.Veiculo
                .Include(nameof(Veiculo.Proposta))
                .AsQueryable();

            query = query.Where(x => x.Id == id);

            var result = await query.SingleAsync();

            return result;
        }

        public async Task<Veiculo> AddVeiculo(Veiculo veiculo)
        {
            _context.Veiculo.Add(veiculo);
            await _context.SaveChangesAsync();

            var result = await ObterPorId(veiculo.Id);

            return result;
        }

  

        public async Task Excluir(Veiculo veiculo)
        {
            _context.Veiculo.Remove(veiculo);
            await _context.SaveChangesAsync();
        }

        public Task<Veiculo> Atualizar(Veiculo veiculo)
        {
            throw new NotImplementedException();
        }
    }
}
