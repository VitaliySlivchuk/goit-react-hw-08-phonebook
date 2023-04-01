import { createSelector } from '@reduxjs/toolkit';

//атомарні
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContactId = state => state.contacts.items.id;
export const selectValue = state => state.filter.value;
//складові
export const selectFilteredContacts = createSelector(
  [selectContacts, selectValue],
  (contacts, value) => {
    const lowCaseFilter = value.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowCaseFilter)
    );
  }
);
