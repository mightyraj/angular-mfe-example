using System.ComponentModel.DataAnnotations;

namespace TestApi.Models
{
    public class User {
        [Key]
        public int Id { get; set; }
        [Required]
         public string Name { get; set; }
         public string Password { get; set; }
    }
}