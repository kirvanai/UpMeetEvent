import { Component, Input } from '@angular/core';
import { Events } from '../events';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {

  viewDetails: boolean = false;


  @Input() event: Events = {} as Events;

  constructor(){ 

  }
   

  switchViewDetails(){
    this.viewDetails = ! this.viewDetails;
  }
}