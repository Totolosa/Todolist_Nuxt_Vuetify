export default class Todo {
	title: string;
	description: string;
	date: Date;
	constructor(title?: string, description?: string, date?: Date) {
		this.title = title ? title : "";
		this.description = description ? description : "";
		this.date = date ? new Date(date) : new Date();
	}
}