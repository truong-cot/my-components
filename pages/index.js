import React from 'react';

import Button from '../components/controls/Button';
import {IoIosAdd} from 'react-icons/io';
import {AiOutlineSearch} from 'react-icons/ai';

import styles from '../styles/Home.module.scss';
import Input from '../components/controls/Input';
function Home() {
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
		</div>
	);
}

export default Home;
