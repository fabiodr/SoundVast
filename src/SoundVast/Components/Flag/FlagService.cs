//using System.Collections.Generic;
//using SoundVast.Repository;
//using System.Linq;
//using SoundVast.Components.Flag.Models;

//namespace SoundVast.Components.Flag
//{
//    public interface IReportService<T> where T : Flag
//    {
//        ICollection<T> GetReports();
//        T GetReport(int id);
//        bool Add(T report);
//    }

//    public class ReportService<T> : IReportService<T> where T : Flag
//    {
//        private readonly IValidationDictionary _validationDictionary;
//        private readonly IRepository<T> _repository;

//        public ReportService(IValidationDictionary validationDictionary, IRepository<T> repository)
//        {
//            _validationDictionary = validationDictionary;
//            _repository = repository;
//        }

//        protected bool Validate(T report)
//        {
//            return _validationDictionary.IsValid;
//        }
        
//        public ICollection<T> GetReports()
//        {
//            return _repository.GetAll().ToList();
//        }

//        public T GetReport(int id)
//        {
//            return _repository.Get(id);
//        }

//        public bool Add(T report)
//        {
//            if (!Validate(report))
//                return false;

//            _repository.Add(report);

//            return true;
//        }
//    }
//}