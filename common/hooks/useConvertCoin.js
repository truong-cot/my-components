export const useConvertCoin = (coin) => {
	return coin.toLocaleString('en-GB', {maximumFractionDigits: 4});
};
