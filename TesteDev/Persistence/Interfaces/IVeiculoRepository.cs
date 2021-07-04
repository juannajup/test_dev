using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TesteDev.Models;

namespace TesteDev.Persistence.Interfaces
{
    public interface IVeiculoRepository
    {
        Task<IList<Veiculo>> Veiculos();

        Task<Veiculo> AddVeiculo(Veiculo veiculo);

        Task<Veiculo> ObterPorId(Guid id);

        Task<Veiculo> Atualizar(Veiculo veiculo);

        Task Excluir(Veiculo veiculo);
    }
}
