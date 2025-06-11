using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NumoApp.BL.Models
{
    public class Accounts
    {
        public int Id { get; set; }
        public string AccountType { get; set; }
        public string Institution { get; set; }
        public float Balance { get; set; }

    }
}
