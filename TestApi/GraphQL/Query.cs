using System.Linq;
using HotChocolate;
using HotChocolate.Data;
using TestApi.Data;
using TestApi.Models;
using TestApi.GraphQL.Users;

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
        public IQueryable<User> GetUsers([ScopedService] AppDbContext context, int? id)
        {
            if (id == 0 || id == null)
            {
                return context.Users;
            }
            else
            {
                return context.Users.Where(x => x.Id == id);
            }
        }
    }

}
