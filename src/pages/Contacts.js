import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { getContacts } from 'redux/contacts/operations';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && (
        <div style={{ fontWeight: 700, color: 'red' }}>
          Requesting contacts...
        </div>
      )}
      <ContactList />
    </>
  );
};

export default Contacts;
