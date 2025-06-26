using System.Collections.Generic;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;
using NumoApp.PL.Entities;

namespace NumoApp.PL.Data
{
    public class NumoAppContext : DbContext
    {
        public NumoAppContext(DbContextOptions<NumoAppContext> options) : base(options) { }

        public virtual DbSet<tblUser> tblUsers { get; set; }
        public virtual DbSet<tblPortfolio> tblPortfolios { get; set; }
        public virtual DbSet<tblAccount> tblAccounts { get; set; }
        public virtual DbSet<tblTransaction> tblTransactions { get; set; }
        public virtual DbSet<tblCategory> tblCategories { get; set; }
        public virtual DbSet<tblBudget> tblBudgets { get; set; }
        public virtual DbSet<tblBill> tblBills { get; set; }
        public virtual DbSet<tblStock> tblStocks { get; set; }
        public virtual DbSet<tblCrypto> tblCryptos { get; set; }
        public virtual DbSet<tblCryptoTransaction> tblCryptoTransactions { get; set; }
    }
}
