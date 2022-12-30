export const selectContacts = state => state.data.contacts.items;
export const selectIsLoading = state => state.data.contacts.isLoading;
export const selectIsError = state => state.data.contacts.error;
export const selectFilter = state => state.data.filter;
