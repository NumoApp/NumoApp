using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NumoApp.BL.Models
{
    public class Crypto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Ticker { get; set; }
        public string Type { get; set; }
        public int PortfolioId {  get; set; }
    }
}
