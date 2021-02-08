  
import { combineReducers } from 'redux';

import customerReducer from './customer/customer.reducer';


export default combineReducers({
    customer: customerReducer
});