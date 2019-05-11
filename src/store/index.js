import reducer from '../reducers'
import {createStore} from 'redux';

const initialState = {
	username: "Lahiru",
	totalAmount: 12345678
};

export const store = createStore(reducer, initialState);
