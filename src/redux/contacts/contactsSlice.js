import { createSlice } from '@reduxjs/toolkit';

import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from 'redux/contacts/operations';

const hendlePanding = state => {
  state.isLoading = true;
};
const hendleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      //fetch
      .addCase(fetchContacts.pending, hendlePanding)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, hendleRejected)

      //add

      .addCase(addContact.pending, hendlePanding)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, hendleRejected)

      //delete
      .addCase(deleteContact.pending, hendlePanding)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })

      //edit
      .addCase(editContact.pending, hendlePanding)
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const { id, name, number } = action.payload;
        const index = state.items.findIndex(item => item.id === id);
        state.items[index] = { ...state.items[index], name, number };
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
