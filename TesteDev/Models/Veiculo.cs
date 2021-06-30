using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace TesteDev.Models
{
    [Table("Veiculo")]
    public class Veiculo
    {
        public Guid Id { get; set; }

        public string Marca { get; set; }

        public string Modelo { get; set; }

        public int Ano { get; set; }

        public decimal Preco { get; set; }

        public bool Vendido { get; set; }

        public virtual IList<Proposta> Proposta { get; set; }
    }
}
