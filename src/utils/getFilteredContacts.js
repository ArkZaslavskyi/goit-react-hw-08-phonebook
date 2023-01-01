export const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.trim().toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
