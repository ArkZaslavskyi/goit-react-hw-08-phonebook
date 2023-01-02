import { useContacts } from "hooks";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/slice";
import css from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useContacts();

  const handleChange = (e) => {
    const { value } = e.target;
    return dispatch(setFilter(value));
  };

  return (
    <form className={css.form}>
      <label className={css.label}>
        Find contacts by name:
        <input className={css.input}
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
        />
      </label>
    </form>
  );
};