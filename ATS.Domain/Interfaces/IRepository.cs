namespace ATS.Domain.Interfaces
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity GetByFilter(TEntity entity);
        IEnumerable<TEntity> GetAll();
    }
}