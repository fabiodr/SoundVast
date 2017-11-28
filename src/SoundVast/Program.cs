using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using SoundVast.Data;

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
                .UseStartup<Startup>()
                .UseUrls("http://localhost:8080")
                .Build();
    }
}
