import { ToastrService } from './../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';

declare let toastr;

@Component({
	selector: 'events-list',
	templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
	events: any[];

	constructor(private eventService: EventService, private toastrService: ToastrService) {
		// Not a good idea to call methods in the constructor
		//this.events = this.eventService.getEvents();
	}

	ngOnInit() {
		this.events = this.eventService.getEvents();
	}

	handleThumbnailClick(eventName) {
		this.toastrService.success(eventName);
	}
}
