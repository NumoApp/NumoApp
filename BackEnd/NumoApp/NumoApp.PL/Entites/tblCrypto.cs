using System;
using System.ComponentModel.DataAnnotations;
using NumoApp.PL.Entites;

namespace NumoApp.PL.Entities
{
    public class tblCrypto : IEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public Guid PortfolioId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Ticker { get; set; }

        [Required]
        public string Type { get; set; }
    }
}
