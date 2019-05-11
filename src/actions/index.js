import {store} from '../store';

function setMoneyUpdateAction(money) {
	return {
		type: 'WITHDRAW_MONEY',
		payload: {money}
	};
}

export function dispatchBtnAction(e) {
	const amount = e.target.dataset.amount;
	store.dispatch(setMoneyUpdateAction(amount));
}
