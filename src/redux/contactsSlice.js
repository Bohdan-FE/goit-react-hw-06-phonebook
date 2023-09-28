import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action) {
            state.push({ ...action.payload, id: nanoid() })
        },
        removeContact(state, action) {
            state = state.filter(contact => contact.id !== action.payload)
        }
    }
})

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;