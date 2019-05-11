export default (state, action) => {
	if (action.type === 'WITHDRAW_MONEY') {
		return getBankAmount(state.money, action.payload.money)
	}

	return state;
}

function getBankAmount(bankAmount, withdrawMoney) {
	let cashInBank = bankAmount;

	if (bankAmount > withdrawMoney) {
		cashInBank = bankAmount - withdrawMoney
	}

	return {
		name: state.name,
		money: cashInBank
	};
}
