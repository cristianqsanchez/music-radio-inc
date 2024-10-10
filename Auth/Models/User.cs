namespace Auth.Models
{
    public class User
    {
        public required string Id { get; set; }
        public required string Username { get; set; }
        public required string Password { get; set; }
        public required string Email { get; set; }
        public required string Address { get; set; }
        public required string City { get; set; }
        public required string Phone { get; set; }
    }

    public class LoginRequest
    {
      public required string Username { get; set; }
      public required string Password { get; set; }
    }
}
