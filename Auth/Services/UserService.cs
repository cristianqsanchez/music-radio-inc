using Auth.Models;

namespace Auth.Services
{
    public class UserService
    {
        private readonly List<User> _users = new List<User>();

        public bool Register(User user)
        {
            if (_users.Any(u => u.Username == user.Username))
            {
                return false;
            }
            
            _users.Add(user);
            return true;
        }

        public User Login(string username, string password)
        {
          return _users.FirstOrDefault(u => u.Username == username && u.Password == password)!;
        }

        public List<User> GetAllUsers()
        {
          return _users;
        }
    }
}

