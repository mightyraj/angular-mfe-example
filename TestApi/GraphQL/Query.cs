using System.Linq;
using HotChocolate;
using HotChocolate.Data;
using TestApi.Data;
using TestApi.Models;
using System;

namespace TestApi.GraphQL
{
    public class Query
    {
        // [UseDbContext(typeof(AppDbContext))]
        // public IQueryable<User> GetUsers([ScopedService] AppDbContext context)
        // {
        //     return context.Users;
        // }



        [UseDbContext(typeof(AppDbContext))]
        public IQueryable<User> GetUsers([ScopedService] AppDbContext context, string name, string password)
        {
            Console.WriteLine(name, password);
            
            return context.Users.Where(x => x.Name == name && x.Password == password);
        }
    }

}
