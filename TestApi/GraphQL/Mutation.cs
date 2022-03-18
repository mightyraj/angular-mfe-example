using System;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Data;
using TestApi.Data;
using TestApi.GraphQL.Users;
using TestApi.Models;

namespace TestApi.GraphQL
{
    public class Mutation
    {
        [UseDbContext(typeof(AppDbContext))]
        public async Task<UserDetail> AddUserAsync(
            AddUserInput input,
            [ScopedService] AppDbContext context
        )
        {
            var user = new User { Name = input.Name, Password = input.Password };

            context.Users.Add(user);
            await context.SaveChangesAsync();

            return new UserDetail(user);
        }

        [UseDbContext(typeof(AppDbContext))]
        public async Task<UserDetail> EditUserAsync(
            EditUserInput input,
            [ScopedService] AppDbContext context
        )
        {
            var user = context.Users.First(i => i.Id == input.Id);
            user.Name = input.Name;
            user.Password = user.Password;

            await context.SaveChangesAsync();

            return new UserDetail(user);
        }

        [UseDbContext(typeof(AppDbContext))]
        public async Task<UserDetail> DeleteUserAsync(
            DeleteUserInput input,
            [ScopedService] AppDbContext context
        )
        {
            var user = context.Users.First(i => i.Id == input.Id);
            context.Users.Remove(user);
            await context.SaveChangesAsync();

            return new UserDetail(user);
        }
    }
}
