import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(
    private http: HttpClient
  ) { }

  addTodo(todo: {title:string, description:string}): Observable<any>{ 
    return this.http.post<any>('http://jsengine.herokuapp.com/todo/create', todo )
    
  }
}
