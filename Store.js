import { createSlice, configureStore } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts', // Change 'counter' to 'contacts' for the slice name
    initialState: {
        contacts: [],
        loading: false,
        error: false,
    },
    reducers: {
        fetchContactsLoading: (state, action) => {
            state.loading = true;
            state.error = false; // Fix this line (state.error instead of state.loading)
        },
        fetchContactsSuccess: (state, action) => {
            state.contacts = action.payload;
            state.loading = false;
            state.error = false; // Fix this line (state.error instead of error.loading)
        },
        fetchContactsError: (state, action) => {
            state.loading = false;
            state.error = true;
        },
    }
})

export const { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } = contactsSlice.actions;

const store = configureStore({
    reducer: contactsSlice.reducer,
});

export default store;