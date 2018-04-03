using System;
using System.IO;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Azure.KeyVault;
using Microsoft.Azure.Services.AppAuthentication;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.AzureKeyVault;
using SoundVast.Data;
using SoundVast.Kestrel;

namespace SoundVast
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var webHost = BuildWebHost(args).SeedData();

            webHost.Wait();

            webHost.Result.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration(ConfigConfiguration)
                .UseStartup<Startup>()
                .UseKestrel(options => options.ConfigureEndpoints())
                .Build();

        private static void ConfigConfiguration(WebHostBuilderContext webHostBuilderContext, IConfigurationBuilder configurationBuilder)
        {
            if (webHostBuilderContext.HostingEnvironment.IsDevelopment()) return;

            configurationBuilder
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddEnvironmentVariables();

            var config = configurationBuilder.Build();
            var azureKeyVaultName = "azureKeyVault";

            configurationBuilder.AddAzureKeyVault(
                config[$"{azureKeyVaultName}:vaultUrl"],
                config[$"{azureKeyVaultName}:clientId"],
                config[$"{azureKeyVaultName}:clientSecret"]
            );
        }
    }
}
