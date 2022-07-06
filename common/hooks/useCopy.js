import {toast} from 'react-toastify';

export function useCopy(text, message) {
	var input = document.createElement('input');
	input.setAttribute('value', text);
	document.body.appendChild(input);
	input.select();
	var result = document.execCommand('copy');
	document.body.removeChild(input);
	toast.info(message || 'Copy success');
	return result;
}
