using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NumoApp.BL.Models
{
    public class Budgets
    {
        public int Id { get; set; }
        public float Amount { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set;}
        public int UserId { get; set; }
        public int CategoryId { get; set; }

    }
}
