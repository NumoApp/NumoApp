using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NumoApp.BL.Models
{
    public class Bills
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Amount { get; set; }
        public DateOnly DueDate { get; set; }
        public string Frequency { get; set; }
        public string Status { get; set; }
        public int UserId { get; set; }
    }
}
