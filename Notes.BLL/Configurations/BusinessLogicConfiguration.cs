using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using Notes.BLL.Interfaces;
using Notes.BLL.Mappings;
using Notes.BLL.Services;
using Notes.DAL.Context;
using Notes.DAL.Interfaces;
using Notes.DAL.Repositories;

namespace Notes.BLL.Configurations
{
    public static class BusinessLogicConfiguration
    {
        public static IServiceCollection ConfigureBusinessLogicDependecies(this IServiceCollection services)
        {
            services.AddScoped<INoteRepository, NoteRepository>();
            services.AddScoped<INoteService, NoteService>();
            NoteContextInitializer.Load();
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);
            return services;
        }
    }
}
