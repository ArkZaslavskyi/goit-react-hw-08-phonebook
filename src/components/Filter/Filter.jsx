import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/contacts/selectors";
import { setFilter } from "redux/contacts/slice";
import css from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    const { value } = e.target;
    return dispatch(setFilter(value));
  };

  return (
    <>
      <label className={css.label}>
        Find contacts by name
        <input className={css.input}
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
        />
      </label>
    </>
  );
};