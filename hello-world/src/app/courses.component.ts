import { Component } from '@angular/core';
import { CoursesService } from './courses.service'

@Component({
	selector: 'courses',
	template: `
				<input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
			`
})
export class CoursesComponent	{
	
	title = "List of Courses";
	isActive = true;
	courses;
	email = "arsha@email.com";
	
	constructor(service: CoursesService)	{
		
		//let service = new CoursesService();
		this.courses = service.getCourses();
	}
	
	onSave()	{
		console.log("Button was clicked");
	}
	
	onDivClicked($event: MouseEvent)	{
		console.log("Div was clicked", $event);
	}
	
	onKeyUp()	{
		console.log("Email: ", this.email);
	}
}