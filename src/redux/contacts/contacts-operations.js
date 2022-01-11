import axios from "axios";
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
} from "./contacts-actions";

axios.defaults.baseURL = "https://61dd8a2df60e8f00176688eb.mockapi.io";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const { data } = await axios.get("/contacts");
    console.log(data);

    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const addNewContact = (inputData) => (dispatch) => {
  dispatch(addRequest());
  axios
    .post("/contacts", inputData)
    .then(({ data }) => dispatch(addSuccess(data)))
    .catch((error) => dispatch(addError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteSuccess(id)))
    .catch((error) => dispatch(deleteError(error)));
};

// export default {addNewContact, deleteContact};
