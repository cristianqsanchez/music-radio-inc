using Microsoft.AspNetCore.Mvc;
using Auth.Models;
using Auth.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace Auth.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("signup")]
        public IActionResult Register([FromBody] User user)
        {
            if (_userService.Register(user))
            {
                return Ok(new { message = "User registered successfully." });
            }

            return BadRequest(new { message = "User already exists." });
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login([FromBody] LoginRequest loginRequest)
        {
            var loggedInUser = _userService.Login(loginRequest.Username, loginRequest.Password);

            if (loggedInUser != null)
            {
              var tokenHandler = new JwtSecurityTokenHandler();
              var key = Encoding.ASCII.GetBytes("SuperUltraSecretKeyForJwtToken1234567890");

              var tokenDescriptor = new SecurityTokenDescriptor
              {
                Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.Name, loggedInUser.Username),
                    new Claim(ClaimTypes.Role, "User")
                    }),
                        Expires = DateTime.UtcNow.AddMinutes(60),
                        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
              };

              var token = tokenHandler.CreateToken(tokenDescriptor);
              var tokenString = tokenHandler.WriteToken(token);


                return Ok(new {
                    token = tokenString,
                    id = loggedInUser.Id,
                    username = loggedInUser.Username,
                    email = loggedInUser.Email,
                    address = loggedInUser.Address,
                    city = loggedInUser.City,
                    phone = loggedInUser.Phone
                    });
            }

            return Unauthorized(new { message = "Invalid username or password." });
        }

        [Authorize]
        [HttpGet]
        [Route("list")]
        public IActionResult GetAllUsers()
        {
          var users = _userService.GetAllUsers();
          return Ok(users);
        }
    }
}

public class LoginResponse
{
  public required string Token { get; set; }
  public required User user { get; set; }
}
