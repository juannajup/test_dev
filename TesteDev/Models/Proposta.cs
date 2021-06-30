using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace TesteDev.Models
{
    [Table("Proposta")]
    public class Proposta
    {
        public Guid Id { get; set; }

        public string NomeCliente { get; set; }

        public DateTime DataProposta { get; set; }

        public decimal Valor { get; set; }

        public Guid VeiculoId { get; set; }

        public virtual Veiculo Veiculo { get; set; }
    }
}
