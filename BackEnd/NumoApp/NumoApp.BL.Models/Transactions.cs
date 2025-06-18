using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NumoApp.BL.Models
{
    public class Transactions
    {
        public int Id { get; set; }
        public DateTime TransactionDate { get; set; }
        public float Amount { get; set; }
        public string TransactionType { get; set; }
        public int UserId { get; set; }
        public int CategoryId { get; set; }

    }
}
