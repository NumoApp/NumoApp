using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NumoApp.PL.Data;
using NumoApp.PL.Entites;

namespace NumoApp.BL
{      
    public abstract class GenericManager<T> where T : class, IEntity
    {
        protected DbContextOptions<NumoAppContext> options;
        public GenericManager(DbContextOptions<NumoAppContext> options)
            {
                this.options = options;
            }

        public GenericManager()
        {

        }

        public List<T> Load()
        {
            try
            {
                return new NumoAppContext(options)
                    .Set<T>()
                    .ToList<T>()
                    .OrderBy(x => x.SortField)
                    .ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }




        

    }

}
