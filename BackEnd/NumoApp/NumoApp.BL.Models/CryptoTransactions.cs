using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NumoApp.BL.Models
{
    public class CryptoTransactions
    {
        public int Id { get; set; }
        public DateOnly Date {  get; set; }
        public float CryptoAmount { get; set; }
        public float FirstValue { get; set; }
        public string TransactionType { get; set; }
        public string Exchange { get; set; }
        public string WalletAddress { get; set; }
        public int CryptoAssetId { get; set; }
    }
}
