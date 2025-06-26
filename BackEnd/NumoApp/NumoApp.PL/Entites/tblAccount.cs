using System;
using System.ComponentModel.DataAnnotations;
using NumoApp.PL.Entites;

namespace NumoApp.PL.Entities
{
    public class tblAccount : IEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public Guid UserId { get; set; }

        [Required]
        public string AccountType { get; set; }

        public string Institution { get; set; }

        [Required]
        public decimal Balance { get; set; }
    }
}
