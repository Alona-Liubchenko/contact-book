import { configureStore } from '@reduxjs/toolkit';
import { authReduser } from './auth/authSlice';

import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    auth: authReduser,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
