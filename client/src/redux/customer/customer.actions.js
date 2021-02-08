import api from '../../utils/api';

import {
    GET_CUSTOMERS,
    GET_DEBTS,
    GET_CUSTOMER_DEBTS,
    DELETE_DEBT_USER,
    DELETE_DEBT
} from './customer.types';


const postUser = async (id, name, email) => {
  await api.post('http://localhost:5000/api/users', { id: id, name: name, email: email });
}

export const uploadUsers = () => async dispatch => {
  try {
    const res = await api.get('https://jsonplaceholder.typicode.com/users');

    res.data.forEach(user => {
      postUser(user.id, user.name, user.email);
    });
    
    
    dispatch({
      type: GET_CUSTOMERS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
}

// get favorites
export const getUsers = () => async dispatch => {
  try {
    const res = await api.get('http://localhost:5000/api/users');
    
    dispatch({
      type: GET_CUSTOMERS,
      payload: res.data
    });

  } catch (err) {
    console.log(err);
  }
};

export const getDebts = () => async dispatch => {
  try {
    const res = await api.get(`http://localhost:5000/api/debt`);
    dispatch({
      type: GET_DEBTS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
}

export const addDebt = ( customerId, reason, amount ) => async dispatch => {
  try {
    const res = await api.post('http://localhost:5000/api/debt', { customerId, reason, amount });
    
    dispatch({
      type: GET_CUSTOMERS,
      payload: res.data
    });
  } catch (error) {
   console.log(error);
  }
}

export const editDebt = ( form ) => async dispatch => {
  const { reason, amount, id } = form;
  console.log(reason, amount, id);
  try {
    await api.put(`http://localhost:5000/api/debt/${id}`, { reason, amount});
    const res = await api.get(`http://localhost:5000/api/debt`);
    dispatch({
      type: GET_DEBTS,
      payload: res.data
    });
  } catch (error) {
   console.log(error);
  }
}

export const returnDebtsFromUser = ( id ) => async dispatch => {
  try {
    const res = await api.get(`http://localhost:5000/api/debt/${id}`);

    dispatch({
      type: GET_CUSTOMER_DEBTS,
      payload: res.data
    });
  } catch (error) {
    
  }
}

export const deleteDebt = ( id, debtPage ) => async dispatch => {
  try {
    if(debtPage) {
      await api.delete(`http://localhost:5000/api/debt/${id}`);
      dispatch({
        type: DELETE_DEBT,
        payload: id
      });
    } else {
      await api.delete(`http://localhost:5000/api/debt/${id}`);
      dispatch({
        type: DELETE_DEBT_USER,
        payload: id
      })
    }
  } catch (error) {
    console.log(error);
  }
}