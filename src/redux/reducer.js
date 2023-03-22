import { createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { addContact, deleteContact, findContact } from './actions';

const initialContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];
const initialFilter = '';

export const contactsReducer = createReducer(initialContacts, {
  [addContact]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});

export const filterReduce = createReducer(initialFilter, {
  [findContact]: (state, action) => (state = action.payload),
});
