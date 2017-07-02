using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Security.Policy;
using System.Text;
using System.Text.RegularExpressions;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using SoundVast.Utilities;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace SoundVast.CustomHelpers
{
    public static class ExtensionMethod
    {
        public static IQueryable<T> ThenInclude<T>(this IQueryable<T> query, params Expression<Func<T, object>>[] paths)
            where T : class
        {
            return paths.Aggregate(query, (current, path) => current.Include(path));
        }

        public static string FormatTime(this TimeSpan timeSpan)
        {
            if (timeSpan.Days > 0)
            {
                return timeSpan.Days.SingularOrPlural("day", false) + " ago";
            }

            if (timeSpan.Hours > 0)
            {
                return timeSpan.Hours.SingularOrPlural("hour", false) + " ago";
            }

            if (timeSpan.Minutes > 0)
            {
                return timeSpan.Minutes.SingularOrPlural("minute", false) + " ago";
            }

            return timeSpan.Seconds.SingularOrPlural("second", false) + " ago";
        }

        public static string SingularOrPlural(this int integer, string singularText, bool useApostrophe)
        {
            singularText = integer + " " + singularText;

            if (integer == 1)
            {
                return singularText;
            }

            if (useApostrophe)
            {
                return singularText + "'s";
            }

            return singularText + "s";
        }

        public static string ToUrlFriendlyString(this string url)
        {
            return Regex.Replace(url, @"\s+", "-").ToLowerInvariant();
        }

        public static void Each<T>(this IEnumerable<T> source, Action<T> action)
        {
            foreach (var item in source)
                action(item);
        }

        /// <summary>
        /// Determines whether the specified HTTP request is an AJAX request.
        /// </summary>
        /// 
        /// <returns>
        /// true if the specified HTTP request is an AJAX request; otherwise, false.
        /// </returns>
        /// <param name="request">The HTTP request.</param><exception cref="T:System.ArgumentNullException">The <paramref name="request"/> parameter is null (Nothing in Visual Basic).</exception>
        public static bool IsAjaxRequest(this HttpRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException(nameof(request));
            }

            return request.Headers["X-Requested-With"] == "XMLHttpRequest";
        }
        private static void IgnoreUnmappedProperties(TypeMap map, IMappingExpression expr)
        {
            foreach (string propName in map.GetUnmappedPropertyNames())
            {
                if (map.SourceType.GetProperty(propName) != null)
                {
                    expr.ForSourceMember(propName, opt => opt.Ignore());
                }
                if (map.DestinationType.GetProperty(propName) != null)
                {
                    expr.ForMember(propName, opt => opt.Ignore());
                }
            }
        }

        public static void IgnoreUnmapped(this IProfileExpression profile)
        {
            profile.ForAllMaps(IgnoreUnmappedProperties);
        }

        public static void IgnoreUnmapped(this IProfileExpression profile, Func<TypeMap, bool> filter)
        {
            profile.ForAllMaps((map, expr) =>
            {
                if (filter(map))
                {
                    IgnoreUnmappedProperties(map, expr);
                }
            });
        }

        public static void IgnoreUnmapped(this IProfileExpression profile, Type src, Type dest)
        {
            profile.IgnoreUnmapped((TypeMap map) => map.SourceType == src && map.DestinationType == dest);
        }

        public static void IgnoreUnmapped<TSrc, TDest>(this IProfileExpression profile)
        {
            profile.IgnoreUnmapped(typeof(TSrc), typeof(TDest));
        }
    }
}