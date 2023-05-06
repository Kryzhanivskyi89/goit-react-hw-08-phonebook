import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsReducer';

export const reducer = combineReducers({
  contacts: contactsReducer,
});