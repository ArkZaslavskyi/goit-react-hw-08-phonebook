import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "redux/contacts/selectors";
import { Contact } from "components/Contact";
import { getFilteredContacts } from "utils/getFilteredContacts";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) =>
        (<Contact key={contact.id} {...contact} />)
      )}
    </ul>
  );
};
