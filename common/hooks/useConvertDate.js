export const useConvertDate = (date) => {
	const newDate = new Date(date);
	let h = newDate.getHours();
	let m = newDate.getMinutes();
	let s = newDate.getSeconds();
	let yyyy = newDate.getFullYear();
	let mm = newDate.getMonth() + 1;
	let dd = newDate.getDate();

	return {
		getDate() {
			return `${yyyy}-${checkTime(mm)}-${checkTime(dd)}`;
		},
		getTime() {
			return `${checkTime(h)}:${checkTime(m)}`;
		},
		getFullTime() {
			return `${checkTime(h)}:${checkTime(m)}:${checkTime(s)}`;
		},
	};
};

function checkTime(i) {
	if (Math.abs(i) < 10) {
		i = '0' + i;
	}
	return i;
}
