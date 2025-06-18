using System;
using System.ComponentModel.DataAnnotations;
using NumoApp.PL.Entites;

namespace NumoApp.PL.Entities
{
    public class tblCryptoTransaction : IEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public Guid CryptoAssetId { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public decimal CryptoAmount { get; set; }

        [Required]
        public decimal FiatValue { get; set; }

        [Required]
        public string TransactionType { get; set; }

        [Required]
        public string Exchange { get; set; }

        public string WalletAddress { get; set; }
    }
}
