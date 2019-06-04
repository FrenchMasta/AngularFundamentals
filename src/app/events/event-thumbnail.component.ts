import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'event-thumbnail',
	templateUrl: './event-thumbnail.component.html',
	styles: [ '.pad-left { margin-left: 10px; } .well-div {color: #BBB;}' ]
})
export class EventThumbnailComponent {
	// This 'event' will be imported from another component
	@Input() event: any;
}
