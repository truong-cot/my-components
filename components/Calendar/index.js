import {memo, useState, useEffect} from 'react';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
import DateItem from './Calendar.dateItem';
import {listMonth, listDay} from '../../constants/mock/calendar';
import style from './Calendar.module.scss';
/*===========> INTERFACE <==========*/

/*===========> MAIN COMPONENT<==========*/
function Calendar({onClickDay}) {
	const [month, setMonth] = useState(new Date().getMonth() + 1);
	const [year, setYear] = useState(new Date().getFullYear());
	const [numberDay, setNumberDay] = useState(0);
	const [listDate, setListDate] = useState([]);

	const [timeSelect, setTimeSelect] = useState(null);

	/********** Chuyển tháng **********/
	const handlePrevMonth = () => {
		setMonth(month - 1);
		if (month === 1) {
			setMonth(12);
			setYear(year - 1);
		}
	};

	const handleNextMonth = () => {
		setMonth(month + 1);
		if (month === 12) {
			setMonth(1);
			setYear(year + 1);
		}
	};
	/********************/

	/********** Lấy số ngày trong tháng **********/
	useEffect(() => {
		if (listMonth.includes(month)) {
			setNumberDay(31);
		} else if (month === 2) {
			if (
				(year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
				(year % 100 === 0 && year % 400 === 0)
			) {
				setNumberDay(29);
			} else {
				setNumberDay(28);
			}
		} else {
			setNumberDay(30);
		}
	}, [month, setNumberDay, year]);
	/********************/

	/********** Hiển thị các ngày ra màn hình **********/
	useEffect(() => {
		const dateCurrent = new Date().toDateString();
		for (let i = 1; i <= numberDay; i++) {
			//=====< Các ngày trong tháng >=====
			/*---------- dạng: yyyy-mm-dd ----------*/
			const date = new Date(`${year},${month}/${i}`);

			const item = {
				time: Number(date),
				date: i,
				day: date.getDay(),
				status:
					date.toDateString() === dateCurrent ? 'current' : 'empty',
			};

			//=====< Thêm các ngày trống trước ngày 1  >=====
			if (i === 1) {
				for (let j = 1; j <= date.getDay(); j++) {
					const timer = Number(date) - 86400000 * j;
					const dateFirst = new Date(timer);
					const itemFisrt = {
						time: Number(dateFirst),
						date: dateFirst.getDate(),
						day: dateFirst.getDay(),
						status: 'outDate',
					};
					setListDate((prev) => [itemFisrt, ...prev]);
				}
			}

			/*---------- Danh sách các ngày trong tháng ----------*/
			setListDate((prev) => [...prev, item]);
		}

		return () => setListDate([]);
	}, [numberDay, month, year, setListDate]);
	/********************/

	return (
		<div className={style.calendar}>
			<div className={style.month}>
				<button className={style.btnMonth} onClick={handlePrevMonth}>
					<MdArrowBackIosNew />
				</button>
				<span>
					Tháng {month < 10 ? `0${month}` : month}/{year}
				</span>
				<button className={style.btnMonth} onClick={handleNextMonth}>
					<MdArrowForwardIos />
				</button>
			</div>
			<div className={style.day}>
				{listDay.map((text) => (
					<div key={text} className={style.itemDay}>
						{text}
					</div>
				))}
			</div>
			<div className={style.listDate}>
				{listDate.map((item) => (
					<DateItem
						key={item.time}
						date={item.date}
						status={item.status}
						time={item.time}
						onClick={onClickDay}
						isActive={timeSelect === item.time}
						onChoose={setTimeSelect}
					/>
				))}
			</div>
		</div>
	);
}

export default memo(Calendar);
