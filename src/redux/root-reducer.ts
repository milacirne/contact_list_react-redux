import { combineReducers } from 'redux'
import contactsSlice from './contact/slice'

export default combineReducers({
  contacts: contactsSlice
})
