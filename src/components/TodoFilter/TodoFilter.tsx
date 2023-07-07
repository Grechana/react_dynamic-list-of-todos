type Props = {
  changeCompleted : () => void
  changeActive: () => void
  changeAll:() => void
  qwery: string
  findQwery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetQwery: () => void
};

enum FilterOption {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}
export const TodoFilter : React.FC<Props> = ({
  changeCompleted,
  changeActive,
  changeAll,
  qwery,
  findQwery,
  resetQwery,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    switch (selectedValue) {
      case FilterOption.All:
        changeAll();
        break;
      case FilterOption.Active:
        changeActive();
        break;
      case FilterOption.Completed:
        changeCompleted();
        break;
      default:
        break;
    }
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={handleSelectChange}
          >
            <option value={FilterOption.All}>All</option>
            <option value={FilterOption.Active}>Active</option>
            <option value={FilterOption.Completed}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={qwery}
          onChange={findQwery}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {qwery && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={resetQwery}
            />
          )}
        </span>
      </p>
    </form>
  );
};
