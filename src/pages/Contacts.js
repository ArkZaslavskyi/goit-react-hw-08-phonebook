import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from 'redux/contacts/selectors';
import { getContacts } from 'redux/contacts/operations';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      {/* {!isLoading "Requesting contacts..." />} */}
      <ContactList />
    </>
  );
};

export default Contacts;
