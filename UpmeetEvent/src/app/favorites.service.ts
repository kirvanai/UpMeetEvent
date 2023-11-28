import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
<<<<<<< HEAD
  baseUrl: string = "https://localhost:7248/api/Favorites"
  constructor(private http:HttpClient) {}

    getEvent(id: number):Observable<Event>{
      return this.http.get<Event>(this.baseUrl+"/"+id);
    }

    getUser(id: number):Observable<User>{
      return this.http.get<User>(this.baseUrl+"/"+id);
    }
  
  // AddFavorite(userId: number, eventId: number):Observable<void>{
=======
  baseUrl: string = "https://localhost:7248/api/Favorite"
  constructor(private http:HttpClient) {}

  // GetUser():Observable<Event[]>{
  //   return this.http.get<User[]>(this.baseUrl);
  // }
  // AddUser(newUser: User):Observable<void>{
>>>>>>> ec0d430a9c2ab73b2e03b1cd64d4fd65ff6a6dd9
  //   return this.http.post<void>(this.baseUrl, newUser);
  // }

  // DeleteUser(id: number):Observable<void>{
  //   return this.http.delete<void>(this.baseUrl+"/"+id);
  // }
  // EditUser(id: number, editUser: Event):Observable<void>{
  //   return this.http.put<void>(this.baseUrl+"/"+id, editUser);
  // }
<<<<<<< HEAD
}
=======
}
>>>>>>> ec0d430a9c2ab73b2e03b1cd64d4fd65ff6a6dd9
