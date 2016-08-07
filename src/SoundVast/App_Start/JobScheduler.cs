using Quartz;
using Quartz.Impl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SoundVast
{
    public class JobScheduler
    {
        public static void Start()
        {
            //IScheduler scheduler = StdSchedulerFactory.GetDefaultScheduler();
            //scheduler.Start();

            //IJobDetail job = JobBuilder.Create<UpdateRating>().Build();

            //ITrigger trigger = TriggerBuilder.Create()
            //    .WithDailyTimeIntervalSchedule
            //      (s => s.WithIntervalInSeconds(24)
            //             .OnEveryDay()
            //             .StartingDailyAt(TimeOfDay.HourAndMinuteOfDay(0, 0)))
            //             .Build();

            //scheduler.ScheduleJob(job, trigger);
        }
    }
}