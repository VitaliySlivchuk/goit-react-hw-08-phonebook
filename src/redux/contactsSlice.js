import { createSlice } from '@reduxjs/toolkit';

import { addContact, fetchContacts } from 'redux/operations';

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
  extraReducers: {
    [fetchContacts.pending]: hendlePanding,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: hendleRejected,
    [addContact.pending]: hendlePanding,
    [addContact.fulfilled](state, action) {
      console.log(action);
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [addContact.rejected]: hendleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
