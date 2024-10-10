using Microsoft.AspNetCore.Mvc;
using Auth.Models;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Authorization;

namespace Auth.Controllers
{
  [ApiController]
  [Route("api/")]
  public class AlbumController : ControllerBase
  {
    [Authorize]
    [HttpGet]
    [Route("albums")]
    public IActionResult GetAlbums()
    {

      string jsonData = System.IO.File.ReadAllText("DB/db.json");

      List<Album> albums = JsonConvert.DeserializeObject<List<Album>>(jsonData)!;
      return Ok(albums);
    }
  }
}
