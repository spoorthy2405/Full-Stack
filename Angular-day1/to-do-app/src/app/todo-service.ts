
//observabledesign pattern is used to handle asynchronous data streams in angular 

//notes: rxjs  - to improve async functionality and callback funsctions in js
// observables- an observable is a data stream that can emit multiple values over time.
// observers- an observer is an object that defines callback functions to handle the values emitted by an observable.
// subscriptions- a subscription represents the execution of an observable and allows you to unsubscribe from it when no longer needed.
//data streams- a data stream is a sequence of data that can be observed and processed over time.
//next- the next function is called whenever the observable emits a new value.
//error- the error function is called if the observable encounters an error.
//complete- the complete function is called when the observable has finished emitting values.

import { HttpClient } from '@angular/common/http'; // used to connect to backend api
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private apiUrl = 'http://localhost:3000/todos'; // json-server API

  constructor(private http: HttpClient) {}

  // GET all todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  // ADD new todo
  addTodo(todo: Omit<Todo, 'id'>): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }

  // UPDATE existing todo
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${todo.id}`, todo);
  }

  // DELETE todo
  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
