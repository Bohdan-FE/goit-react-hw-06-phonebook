import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const contactsInitialState = {contacts: []};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action) {
            state.contacts.push({ ...action.payload, id: nanoid() })
        },
        removeContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        }
    }
})

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
}
 
export const persistedReducer = persistReducer(persistConfig, contactsReducer)