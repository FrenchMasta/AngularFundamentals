import { ToastrService } from './common/toastr.service';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';
import { EventsListComponent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';

@NgModule({
	declarations: [ EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent ],
	imports: [ BrowserModule ],
	providers: [ EventService, ToastrService ],
	bootstrap: [ EventsAppComponent ]
})
export class AppModule {}
