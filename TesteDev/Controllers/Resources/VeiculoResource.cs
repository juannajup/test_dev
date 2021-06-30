using System;
using System.Collections.Generic;
using TesteDev.Models;

namespace TesteDev.Controllers.Resources
{
    public class VeiculoResource
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
