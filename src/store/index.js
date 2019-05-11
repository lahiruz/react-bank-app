import reducer from '../reducers'
import {createStore} from 'redux';

const initialState = {
	username: "Lahiru",
	totalAmount: 20000
};

export const store = createStore(reducer, initialState);
