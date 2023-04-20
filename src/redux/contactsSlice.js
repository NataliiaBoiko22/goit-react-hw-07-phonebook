import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contactsApi';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const sliceContact = createSlice({
  name: 'contacts', 
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
      
    },
    [fetchContacts.rejected]: handleReject,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
      state.error = null;
      
    },
    [addContact.rejected]: handleReject,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(index, 1);
      state.isLoading = false;
      state.error = null;
     
    },
    [deleteContact.rejected]: handleReject,
  },
});

export const contactsReducer = sliceContact.reducer;
