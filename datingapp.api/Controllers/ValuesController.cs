using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using datingapp.api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace datingapp.api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public ValuesController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values = await _dataContext.Values.ToListAsync();
            return Ok(values);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetValue(int id)
        {
            var value = await _dataContext.Values.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(value);
        }

        [HttpPost]
        public void post([FromBody] string value)
        {
        }

        [HttpPut]
        public void put(int id, [FromBody] string value)
        {

        }

        [HttpDelete]
        public void delete(int id)
        {

        }
    }
}
