using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TesteDev.Models;

namespace TesteDev.Persistence.Interfaces
{
    public interface IPropostaRepository
    {
        Task<IList<Proposta>> Propostas();

        Task<Proposta> AddProposta(Proposta proposta);

        Task<Proposta> ObterPorId(Guid id);

        Task<Proposta> Atualizar(Proposta proposta);

        Task Excluir(Proposta proposta);
    }
}