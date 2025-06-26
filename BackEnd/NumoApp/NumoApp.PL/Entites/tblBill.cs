using System;
using System.ComponentModel.DataAnnotations;
using NumoApp.PL.Entites;

namespace NumoApp.PL.Entities
{
    public class tblBill : IEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public Guid UserId { get; set; }

        [Required]
        public string Payee { get; set; }

        [Required]
        public decimal Amount { get; set; }

        [Required]
        public DateTime DueDate { get; set; }

        [Required]
        public string Frequency { get; set; }

        [Required]
        public string Status { get; set; }
    }
}
