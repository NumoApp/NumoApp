using System;
using System.ComponentModel.DataAnnotations;
using NumoApp.PL.Entites;

namespace NumoApp.PL.Entities
{
    public class tblPortfolio : IEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public Guid UserId { get; set; }

        [Required]
        public string Name { get; set; }
    }
}
