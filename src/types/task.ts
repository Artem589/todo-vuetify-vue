export default class Task {
	id: string;
	title: string;
	done: boolean;
	constructor(id: string, title: string, done: boolean = false) {
		this.id = id;
		this.title = title;
		this.done = done;
	}
}
