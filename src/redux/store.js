import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const persistedState = localStorage.getItem('reduxState') 
    ? JSON.parse(localStorage.getItem('reduxState')) 
    : undefined;

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
    },
    preloadedState: persistedState, 
});

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
