import {createSelector} from 'reselect';
import {getFilter} from '../filter/filter-selectors';

export const getLoading = state => state.loading;
export const getContacts = state => state.contacts;

//Селектор до использования мемоизации (оставлено для примера)
// export const getFilteredContacts = state => {
//   console.log('Перерендер интерфейса');
//   const allContacts = getContacts(state);
//   const filter = getFilter(state);

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase().trim())
//   );
// };

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) => {
    console.log('Перерендер интерфейса');
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
