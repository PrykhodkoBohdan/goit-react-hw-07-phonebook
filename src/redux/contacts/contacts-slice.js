import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, fetchAddContact, fetchDeleteContact } from "./contact-operation";

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, (store) => {
      store.loading = true;
    })
    .addCase(fetchContacts.fulfilled, (store, action) => {
      store.loading = false;
      store.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (store, action) => {
      store.loading = false;
      store.error = action.payload;
    })
    .addCase(fetchAddContact.pending, (store) => {
      store.loading = true;
    })
    .addCase(fetchAddContact.fulfilled, (store, action) => {
      store.loading = false;
      store.items.push(action.payload);
    })
    .addCase(fetchAddContact.rejected, (store, action) => {
      store.loading = false;
      store.error = action.payload;
    })
    .addCase(fetchDeleteContact.pending, (store) => {
      store.loading = true;
    })
    .addCase(fetchDeleteContact.fulfilled, (store, action) => {
      store.loading = false;
      const index = store.items.findIndex(item => item.id === action.payload);
      store.items.splice(index, 1);
    })
    .addCase(fetchDeleteContact.rejected, (store, action) => {
      store.loading = false;
      store.error = action.payload;
    })
  }
})

export const {addContact, deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;