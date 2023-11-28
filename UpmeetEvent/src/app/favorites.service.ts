import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  baseUrl: string = "https://localhost:7248/api/Favorites"
  constructor(private http:HttpClient) {}

    getEvent(id: number):Observable<Event>{
      return this.http.get<Event>(this.baseUrl+"/"+id);
    }

    getUser(id: number):Observable<User>{
      return this.http.get<User>(this.baseUrl+"/"+id);
    }
  
  // AddFavorite(userId: number, eventId: number):Observable<void>{
  //   return this.http.post<void>(this.baseUrl, newUser);
  // }

  // DeleteUser(id: number):Observable<void>{
  //   return this.http.delete<void>(this.baseUrl+"/"+id);
  // }
  // EditUser(id: number, editUser: Event):Observable<void>{
  //   return this.http.put<void>(this.baseUrl+"/"+id, editUser);
  // }
}