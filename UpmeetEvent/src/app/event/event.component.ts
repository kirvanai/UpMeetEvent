import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Events } from '../events';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Events[] = [];

  constructor(private eventsService: EventsService){ }
  
  
  ngOnInit(): void {
    this.eventsService.GetEvents().subscribe(
      (eventsResult)=>{
        this.events = eventsResult;        
        console.log(this.events);
      }      
    )
  }



}
