import { useSelector } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";
import { Contact } from "components/Contact";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const items = useSelector(selectContacts);

  return (
    <ul className={css.list}>
      {items.map((item) =>
        (<Contact key={item.id} {...item} />)
      )}
    </ul>
  );
};
