using System.Collections.Generic;
using System.Linq;
using datingapp.api.Models;
using Newtonsoft.Json;

namespace datingapp.api.Data
{
    public class Seed
    {
        public static void SeedUsers(DataContext _context)
        {
            if (!_context.Users.Any())
            {
                var userdata = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userdata);
                foreach (var user in users)
                {
                    byte[] passwordHash, passwordSalt;
                    CreatePasswordHash("password", out passwordHash, out passwordSalt);

                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    user.Username = user.Username.ToLower();

                    _context.Users.Add(user);

                }
                _context.SaveChanges();
            }

        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}