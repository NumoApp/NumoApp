using System;
using System.ComponentModel.DataAnnotations;
using NumoApp.PL.Entites;

namespace NumoApp.PL.Entities
{
    public class tblStock : IEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public Guid PortfolioId { get; set; }

        [Required]
        public string Ticker { get; set; }

        [Required]
        public decimal Quantity { get; set; }

        [Required]
        public DateTime PurchaseDate { get; set; }

        [Required]
        public decimal PurchasePrice { get; set; }
    }
}
