export default (state, action) => {
	if (action.type === 'WITHDRAW_MONEY') {
		return getBankAmount(state, action)
	}

	return state;
}

function getBankAmount(state, action) {
	let cashInBank = state.totalAmount;
	let withdrawMoney = parseInt(action.payload.money,10);

	if (cashInBank > withdrawMoney) {
		cashInBank = cashInBank - withdrawMoney
	}

	return {
		username: state.username,
		totalAmount: cashInBank
	};
}
