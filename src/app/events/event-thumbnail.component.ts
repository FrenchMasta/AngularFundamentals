import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'event-thumbnail',
	templateUrl: './event-thumbnail.component.html',
	styles: [
		'.pad-left { margin-left: 10px; } .well-div {color: #BBB;} .green { color: #00FF00 !important; } .bold { font-weight: bold; }'
	]
})
export class EventThumbnailComponent {
	// This 'event' will be imported from another component
	@Input() event: any;

	/**
   * Used 'getStartTimeStyle()' method instead
   */
	// getStartTimeClass() {
	// 	const isEarlyStart = this.event && this.event.time === '8:00 am';
	// 	return { green: isEarlyStart, bold: isEarlyStart };
	// }

	getStartTimeStyle(): any {
		if (this.event && this.event.time == '8:00 am') {
			// font-weight had to be in quotes because it had a hyphen
			return { color: '#00FF00', 'font-weight': 'bold' };
		}
		// Else return an empty object
		return {};
	}
}
