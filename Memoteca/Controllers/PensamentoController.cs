using Memoteca.Context;
using Memoteca.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Memoteca.Controllers;
[ApiController]
[Route("[controller]")]
public class PensamentoController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public PensamentoController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet()]
    public async Task<ActionResult<IEnumerable<Pensamento[]>>> ObterTodos() =>
        Ok(await _context.Pensamentos.ToListAsync());

    [HttpPost()]
    public async Task<ActionResult<Pensamento>> NovoPensamento(Pensamento model)
    {
        try
        {
            if (model == null)
                return BadRequest("Dados inseridos inválidos.");

            var novoPensamento = new Pensamento
            {
                Conteudo = model.Conteudo,
                Autoria = model.Autoria,
                Modelo = model.Modelo
            };

            if (novoPensamento == null)
                return BadRequest("Novos dados inválidos.");

            _context.Pensamentos.Add(novoPensamento);
            await _context.SaveChangesAsync();

            return Ok(model);
        }
        catch (Exception)
        {

            throw;
        }
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult<Pensamento>> AtualizarPensamento(Pensamento model, int id)
    {
        try
        {
            if (model == null)
                return BadRequest("Dados inseridos inválidos.");

            var pensamento = await _context.Pensamentos.FindAsync(id);

            if (pensamento == null)
                return NotFound($"Pensamento de ID {id} não existe.");

            pensamento.Conteudo = model.Conteudo;
            pensamento.Autoria = model.Autoria;
            pensamento.Modelo = model.Modelo;

            _context.Pensamentos.Update(pensamento);
            await _context.SaveChangesAsync();

            return Ok(model);
        }
        catch (Exception)
        {
            throw;
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeletarPensamento(int id)
    {
        try
        {
            var pensamento = await _context.Pensamentos.FindAsync(id);

            if (pensamento == null)
                return NotFound($"Pensamento de ID {id} não existe.");

            _context.Pensamentos.Remove(pensamento);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        catch (Exception)
        {
            
            throw;
        }
    }
}
