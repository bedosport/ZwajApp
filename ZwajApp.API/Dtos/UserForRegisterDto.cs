using System.ComponentModel.DataAnnotations;

namespace ZwajApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [StringLength(8,MinimumLength=4,ErrorMessage="The max Lengh is 8 characters and min lengh is 4 characters...")]
        public string Password { get; set; }
    }
}