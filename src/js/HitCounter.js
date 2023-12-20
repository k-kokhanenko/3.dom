export default class HitCounter{
	constructor(parent, character, callback) {
		if (parent && character) {
			this.parent = parent;
			this.character = character;
			this.points = 0;
			this.callback = callback;

			this.onUserClick = this.onUserClick.bind(this);
			this.parent.addEventListener("click" , this.onUserClick);	
		}
	}

	onUserClick(e) {		
		if (e.target.localName == 'img') {
			this.points++
		} else {
			const currentPosition = this.character.getCurrentPosition();				

			const hit = currentPosition.x == e.target.dataset.x && currentPosition.y == e.target.dataset.y;
			hit ? this.points++ : this.points--;

			if (this.points == -5) {
				this.callback();
			}
		}
	}
}