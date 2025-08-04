using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NumoApp.BL.Models;
using NumoApp.PL;
using NumoApp.PL.Entities;


namespace NumoApp.BL
{
    public class AccountManager
    {
        public AccountManager() 
        { }

        private const string Message = "Row does not exist.";

        public int Insert(Accounts Accounts, bool rollback = false)
        {
            try
            {
                try
                {
                    tblAccount row = new tblAccount();
                    row.Id = Guid.NewGuid();
                    row.AccountType = Accounts.AccountType;
                    row.Institution = Accounts.Institution;
                    row.Balance = Accounts.Balance;
                    row.UserId = Accounts.UserId;
                    return base.Insert(row, rollback);

                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        

    }
}
