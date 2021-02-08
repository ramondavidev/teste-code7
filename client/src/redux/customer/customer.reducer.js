import {
    GET_CUSTOMERS,
    GET_CUSTOMER,
    CUSTOMER_ERROR,
    GET_DEBTS,
    GET_CUSTOMER_DEBTS,
    DELETE_CUSTOMER,
    DELETE_DEBT_USER,
    ADD_CUSTOMER,
    ADD_DEBT,
    DELETE_DEBT,
    EDIT_DEBT
  } from './customer.types';
  
  const initialState = {
    customers: [],
    customer: null,
    debts: [],
    customerDebts: [],
    loading: true,
    error: {}
  };
  
  const customerReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_CUSTOMERS:
        return {
          ...state,
          customers: payload,
          loading: false
        };
      case GET_CUSTOMER:
        return {
          ...state,
          customer: payload,
          loading: false
        };
      case ADD_CUSTOMER:
        return {
          ...state,
          customers: [payload, ...state.customers],
          loading: false
        };
        case GET_DEBTS:
          return {
            ...state,
            debts: payload,
            loading: false
          };
      case DELETE_DEBT:
        return {
          ...state,
          debts: state.debts.filter(debt => debt._id !== payload),
          loading: false
        };
      case CUSTOMER_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
        case ADD_DEBT:
        return {
          ...state,
          debts: [payload, ...state.debts]
        };
        case GET_CUSTOMER_DEBTS:
          return {
            ...state,
            customerDebts: payload
          }
        case DELETE_DEBT_USER:
          return {
            ...state,
            customerDebts: state.customerDebts.filter(debt => debt._id !== payload)
          }
      default:
        return state;
    }
  }

  export default customerReducer;