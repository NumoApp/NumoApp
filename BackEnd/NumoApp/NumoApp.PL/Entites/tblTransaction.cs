using System;
using System.ComponentModel.DataAnnotations;
using NumoApp.PL.Entites;

namespace NumoApp.PL.Entities
{
    public class tblTransaction : IEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public Guid UserId { get; set; }

        [Required]
        public Guid AccountId { get; set; }

        [Required]
        public DateTime TransactionDate { get; set; }

        [Required]
        public decimal Amount { get; set; }

        [Required]
        public string TransactionType { get; set; }

        [Required]
        public Guid CategoryId { get; set; }
    }
}
