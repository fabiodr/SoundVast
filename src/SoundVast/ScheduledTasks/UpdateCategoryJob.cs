using System;
using System.Threading.Tasks;
using Quartz;

namespace SoundVast.ScheduledTasks
{
	public class UpdateGenreJob : IJob
	{
	    public Task Execute(IJobExecutionContext context)
	    {
	        //.ToList() to execute the query and stop the queries dead locking inside the loop
	        // foreach (var item in _Context.Genres.ToList())
	        //  {
	        //FileStreamGenreViewModel uploadedFileStreamGenre = _Context.FileStreamGenres.FirstOrDefault(x => x.GenreId == item.Id);

	        ////Query to check fileStream genre ids vs genre ids, returns null if there is none
	        //if (uploadedFileStreamGenre != null)
	        //{
	        //    item.ImagePath = _AppDatabase.UploadedFileStreams.Single(x => x.Id == uploadedFileStreamGenre.UploadedFileStreamId).ImagePath;
	        //    _AppDatabase.SaveChanges();
	        //}
	        //   }
            throw new NotImplementedException();
        }
    }
}