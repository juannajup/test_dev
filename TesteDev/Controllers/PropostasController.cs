using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TesteDev.Controllers.Resources;
using TesteDev.Helpers;
using TesteDev.Models;
using TesteDev.Persistence.Interfaces;

namespace TesteDev.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PropostasController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IPropostaRepository _propostaRepository;
        private readonly IVeiculoRepository _veiculoRepository;

        public PropostasController(IPropostaRepository propostaRepository, IMapper mapper, IVeiculoRepository veiculoRepository)
        {
            _propostaRepository = propostaRepository;
            _mapper = mapper;
            _veiculoRepository = veiculoRepository;
        }

        [HttpGet]
        public async Task<List<PropostaResource>> ListaPropostas()
        {
            var result = await _propostaRepository.Propostas();

            return _mapper.Map<IList<Proposta>, List<PropostaResource>>(result);

        }

        [HttpGet("{id}")]
        public async Task<PropostaResource> ObterPropostaPorId(Guid id)
        {
            var result = await _propostaRepository.ObterPorId(id);

            return _mapper.Map<Proposta, PropostaResource>(result);
        }

        [HttpPost]
        public async Task<IActionResult> AddProposta([FromBody])
        {
            var veiculo = await _veiculoRepository.ObterPorId(proposta.VeiculoId);

            if (veiculo.Vendido == true)
            {
                return BadRequest(Errors.AddErrorToModelState("resposta", "O veículo foi vendido. Não é possível adicionar uma proposta.", ModelState));
            }

            propostaTemp = await _propostaRepository.ObterPorId(propostaTemp.Id);

            var result = _mapper.Map<Proposta, PropostaResource>(propostaTemp);

            return Ok(result);
        }

        [HttpPut]
        public async Task<PropostaResource> AtualizarProposta([FromBody] Proposta proposta)
        {

            var result = await _propostaRepository.Atualizar(proposta);

            return _mapper.Map<Proposta, PropostaResource>(result);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletarProposta(Guid id)
        {

            var proposta = await _propostaRepository.ObterPorId(id);

            if (proposta == null)
            {
                return NotFound();
            }

            await _propostaRepository.Excluir(proposta);

            return Ok(id);
        }
    }
}