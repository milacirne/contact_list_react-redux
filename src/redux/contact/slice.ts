import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../../models/types'

type ContactsState = {
  contacts: Contact[]
}

const initialState: ContactsState = {
  contacts: []
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload)
      state.contacts.sort((a, b) => a.name.localeCompare(b.name))
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      )
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.contacts[contactIndex] = action.payload
      }
    }
  }
})

export const { addContact, removeContact, editContact } = contactsSlice.actions
export default contactsSlice.reducer
