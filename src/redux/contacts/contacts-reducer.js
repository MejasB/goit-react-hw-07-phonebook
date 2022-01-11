import {createReducer} from '@reduxjs/toolkit';

import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError
} from './contacts-actions';

const initialState = [];

export const contacts = createReducer(initialState, {
  [fetchSuccess]: (_, {payload}) => payload,
  [addSuccess]: (state, {payload}) => [...state, payload],
  [deleteSuccess]: (state, {payload}) => state.filter(({id}) => id !== payload)
});

export const loading = createReducer(false, {
  [fetchRequest]: () => true,
  [fetchSuccess]: () => false,
  [fetchError]: () => false,

  [addRequest]: () => true,
  [addSuccess]: () => false,
  [addError]: () => false,

  [deleteRequest]: () => true,
  [deleteSuccess]: () => false,
  [deleteError]: () => false
});

// Решение до Redux Toolkit
// const contactsReducer = (state = initialState, {type, payload}) => {
//   console.log({type, payload});
//   switch (type) {
// case types.ADD:
//   return {
//     ...state,
//     contacts: [...state.contacts, {id: uuid(), ...payload}]
//   };

//     case types.DELETE:
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== payload)
//       };

//     default:
//       console.log(state);
//       return state;
//   }
// };
