import { useContacts } from "hooks";
import { Contact } from "components/Contact";
import { getFilteredContacts } from "utils/getFilteredContacts";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const { filter, contacts } = useContacts();

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) =>
        (<Contact key={contact.id} {...contact} />)
      )}
    </ul>
  );
};
