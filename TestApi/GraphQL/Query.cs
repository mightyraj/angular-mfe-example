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
        public IQueryable<User> GetUsers(
            [ScopedService] AppDbContext context,
            string type,
            int? id,
            string? name,
            string? password
        )
        {
            switch (type)
            {
                case "id":
                    return context.Users.Where(x => x.Id == id);
                case "chk": 
                    return context.Users.Where(x => x.Name == name && x.Password == password);
                case "all":
                    return context.Users;
                default:
                    return context.Users;
            }
        }
    }
}
