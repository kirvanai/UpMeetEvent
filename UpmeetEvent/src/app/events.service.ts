import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from './events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  baseUrl: string = "https://localhost:7090/api/Events"


  constructor(private http:HttpClient) { }

  GetEvents():Observable<Events[]>{
    return this.http.get<Events[]>(this.baseUrl);
  }

  AddEvent(newEvent: Event):Observable<void>{
    return this.http.post<void>(this.baseUrl, newEvent);
  }

  DeleteEvent(id: number):Observable<void>{
    return this.http.delete<void>(this.baseUrl+"/"+id);
  }
  EditEvent(id: number, editEvent: Event):Observable<void>{
    return this.http.put<void>(this.baseUrl+"/"+id, editEvent);
  }

}
