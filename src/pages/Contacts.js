import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/operations';

import { useContacts } from 'hooks';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const css = {
  fontWeight: 700,
  color: 'red',
};

const Contacts = () => {
  const dispatch = useDispatch();

  const { isLoading } = useContacts();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && <div style={css}>Requesting contacts...</div>}
      <ContactList />
    </>
  );
};

export default Contacts;
