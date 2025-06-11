using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NumoApp.BL.Models
{
    public class Stocks
    {
        public int Id { get; set; }
        public string Ticker { get; set; }
        public float Quantity { get; set; }
        public DateOnly PurchaseDate { get; set; }
        public float PurchasePrice { get; set; }
        public int PortfolioId { get; set; }
    }
}
