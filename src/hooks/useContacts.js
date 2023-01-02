import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectIsError,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return { contacts, filter, isLoading, isError };
};
