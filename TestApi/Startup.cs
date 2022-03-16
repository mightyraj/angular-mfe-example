using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using TestApi.Data;
using Microsoft.EntityFrameworkCore;
using TestApi.GraphQL;

namespace TestApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // services.AppDbContext<AppDbContext>(
            //     options => options.UseSqlServer(Configuration.GetConnectionString("TestDBconn"))
            // );
            // services.AppPooledDbContext<AddDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("TestDBconn")));.AddMutationType<Mutation>()
            // services.AddDbContext<AppDbContext>(
            //     options => options.UseSqlServer(Configuration.GetConnectionString("TestDBconn"))
            // );

            services.AddDbContextFactory<AppDbContext>(
                options => options.UseSqlServer(Configuration.GetConnectionString("TestDBconn")),
                ServiceLifetime.Scoped
            );
            services.AddCors().AddGraphQLServer().AddQueryType<Query>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(
                endpoints =>
                {
                    endpoints.MapGraphQL();
                }
            );
        }
    }
}
