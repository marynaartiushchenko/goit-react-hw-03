import css from './SearchBox.module.css'

export default function Filter({ value, onFilter }) {
  return (
    <div>
      <p className={css.searchLabel}>Find contacts by name</p>
      <input
        type="name"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}