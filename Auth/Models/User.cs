using System.ComponentModel.DataAnnotations;
namespace Auth.Models
{

  public class User
  {
    [Required(ErrorMessage = "The field Id is required")]
    [StringLength(15, ErrorMessage = "The Id field must not exceed 15 characters.")]
    public required string Id { get; set; }

    [Required(ErrorMessage = "The Username field is required")]
    [StringLength(50, ErrorMessage = "The Username must not exceed 50 characters.")]
    public required string Username { get; set; }

    [Required(ErrorMessage = "The Password field is required")]
    [StringLength(20, ErrorMessage = "The Password must not exceed 20 characters.")]
    public required string Password { get; set; }

    [Required(ErrorMessage = "The Email field is required")]
    [StringLength(50, ErrorMessage = "The Email must not exceed 50 characters.")]
    [EmailAddress(ErrorMessage = "The Email format is invalid.")]
    public required string Email { get; set; }

    [Required(ErrorMessage = "The Address field is required")]
    [StringLength(300, ErrorMessage = "The Address must not exceed 300 characters.")]
    public required string Address { get; set; }

    [StringLength(20, ErrorMessage = "The City must not exceed 20 characters.")]
    public string? City { get; set; }

    [StringLength(20, ErrorMessage = "The Phone number must not exceed 20 characters.")]
    public string? Phone { get; set; }
  }


    public class LoginRequest
    {
      public required string Username { get; set; }
      public required string Password { get; set; }
    }
}
