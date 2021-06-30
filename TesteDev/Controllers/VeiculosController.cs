using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TesteDev.Controllers.Resources;
using TesteDev.Models;
using TesteDev.Persistence.Interfaces;

namespace TesteDev.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VeiculosController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IVeiculoRepository _veiculoRepository;

        public VeiculosController(IVeiculoRepository veiculoRepository, IMapper mapper)
        {
            _veiculoRepository = veiculoRepository;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<VeiculoResource> ObterVeiculoPorId(Guid id)
        {
            var result = await _veiculoRepository.ObterPorId(id);

            return _mapper.Map<Veiculo, VeiculoResource>(result);
        }

        [HttpPost]
        public async Task<VeiculoResource> AddVeiculo([FromBody] Veiculo veiculo)
        {

            var result = await _veiculoRepository.AddVeiculo(veiculo);

            return _mapper.Map<Veiculo, VeiculoResource>(result);
        }

        [HttpPut]
        public async Task<VeiculoResource> AtualizarVeiculo([FromBody] Veiculo veiculo)
        {

            var result = await _veiculoRepository.Atualizar(veiculo);

            return _mapper.Map<Veiculo, VeiculoResource>(result);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletarVeiculo(Guid id)
        {

            var veiculo = await _veiculoRepository.ObterPorId(id);

            if (veiculo == null)
            {
                return NotFound();
            }

            await _veiculoRepository.Excluir(veiculo);

            return Ok(id);
        }
    }
}