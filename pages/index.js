import React, {useState} from 'react';
import {IoIosAdd} from 'react-icons/io';
import {AiOutlineSearch} from 'react-icons/ai';

import Button from '../components/controls/Button';
import Input from '../components/controls/Input';
import Checkbox from '../components/controls/Checkbox';
import Calendar from '../components/Calendar';

import styles from '../styles/Home.module.scss';
function Home() {
	// Khai bao state
	const [showCalender, setShowCalender] = useState(false);

	// Function formatDay
	function formatDMY(d) {
		// Default to today
		d = d || new Date();
		return (
			('0' + d.getDate()).slice(-2) +
			'/' +
			('0' + (d.getMonth() + 1)).slice(-2) +
			'/' +
			('000' + d.getFullYear()).slice(-4)
		);
	}

	// get value calender
	const getDay = (value) => {
		console.log(value);
		console.log(formatDMY(new Date(value)));
	};
	return (
		<div className={styles.container}>
			<h3>my app components</h3>
			{/* My component Button */}
			<Button leftIcon={<IoIosAdd />} rightIcon={<IoIosAdd />} primary>
				My button
			</Button>
			{/* My component Input */}
			<Input
				label='Text'
				placeholder='abc'
				type='email'
				iconLeft={<AiOutlineSearch />}
			/>
			<Input
				label='password'
				placeholder='abc'
				type='password'
				iconLeft={<AiOutlineSearch />}
			/>
			{/* My component Checkbox */}
			<div className={styles.checkbox}>
				<Checkbox label={'Click'} />
				<Checkbox label='Click' />
				<Checkbox label='Click' />
			</div>
			{/* My component Calendar */}
			<Button onClick={() => setShowCalender(!showCalender)}>
				Show calendar
			</Button>
			{showCalender ? <Calendar onClickDay={getDay} /> : ''}
		</div>
	);
}

export default Home;
