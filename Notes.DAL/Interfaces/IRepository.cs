using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Notes.DAL.Interfaces
{
    public interface IRepository<T> where T : class
    {
        List<T> GetAll();

        T GetById(string id);

        void Delete(string id);

        void Update(T entity);

        string Create(T entity);
    }
}
