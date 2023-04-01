import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
// export const selectId = state => state.contacts.id;
export const selectValue = state => state.filter.value;

// const filterContacts = (items, value) => {
//   const lowCaseFilter = value.toLowerCase();
//   return items.filter(el => el.name.toLowerCase().includes(lowCaseFilter));
// };

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectValue],
//   (contacts, value) => {
//     const lowCaseFilter = value.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(lowCaseFilter)
//     );
//   }
// );
export const selectFilteredContacts = createSelector(
  [selectContacts, selectValue],
  (contacts, value) => {
    const lowCaseFilter = value.toLowerCase();
    return contacts.filter(contact => contact);
  }
);
