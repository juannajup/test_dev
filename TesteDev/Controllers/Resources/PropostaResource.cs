using System;
using TesteDev.Models;

namespace TesteDev.Controllers.Resources
{
    public class PropostaResource
    {
        public Guid Id { get; set; }

        public string NomeCliente { get; set; }

        public DateTime DataProposta { get; set; }

        public decimal Valor { get; set; }

        public Guid VeiculoId { get; set; }

        public virtual Veiculo Veiculo { get; set; }
    }
}
