// TODO: write your code here
import Character from './Character';
import Character from './HitCounter';
import generateFields from './generateFields';

document.addEventListener("DOMContentLoaded", () => {
	const div = document.querySelector('.grid');
	generateFields(div);
	
	const character = new Character();
	character.setParent(div);
	character.init();
	
	let intervalId = setInterval(() => character.nextStep(), 1000);

	const hitCounter = new HitCounter(div, character, function() {
		clearInterval(intervalId);
		alert('Вы проиграли');
	});	
});