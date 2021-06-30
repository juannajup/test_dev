using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TesteDev.Models;
using TesteDev.Persistence.Interfaces;

namespace TesteDev.Persistence
{
    public class PropostaRepository : IPropostaRepository
    {
        private readonly VendaVeiculoDbContext _context;

        public PropostaRepository(VendaVeiculoDbContext context)
        {
            _context = context;
        }

        public async Task<IList<Proposta>> Propostas()
        {
            var result = await _context.Proposta
                .Include(nameof(Proposta.Veiculo))
                .ToListAsync();

            return result;
        }

        public async Task<Proposta> ObterPorId(Guid id)
        {
            var query = _context.Proposta
                .Include(nameof(Proposta.Veiculo))
                .AsQueryable();

            query = query.Where(x => x.Id == id);

            var result = await query.SingleAsync();

            return result;
        }

        public async Task<Proposta> AddProposta(Proposta proposta)
        {
            proposta.Id = new Guid();
            proposta.DataProposta = DateTime.UtcNow;
            _context.Proposta.Add(proposta);
            await _context.SaveChangesAsync();

            var result = await ObterPorId(proposta.Id);

            return result;
        }

        public async Task<Proposta> Atualizar(Proposta proposta)
        {
            _context.Update(proposta);
            await _context.SaveChangesAsync();

            var result = await ObterPorId(proposta.Id);

            return result;
        }

        public async Task Excluir(Proposta proposta)
        {
            _context.Proposta.Remove(proposta);
            await _context.SaveChangesAsync();
        }
    }
}
