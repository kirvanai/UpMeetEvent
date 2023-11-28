import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Events } from '../events';
import { ActivatedRoute } from '@angular/router';

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