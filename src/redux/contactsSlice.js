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
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, handleReject)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, handleReject)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(contact => contact.id === action.payload.id);
        if (index !== -1) {
          state.items.splice(index, 1);
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, handleReject);
  },
  })


export const contactsReducer = sliceContact.reducer;
