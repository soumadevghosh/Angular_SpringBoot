import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  getAllTodos(){
    return this.http.get<Todo[]>(`${API_URL}/users/todos`);
  }

  deleteTodo(id){
    return this.http.delete(`${API_URL}/users/todos/${id}`);
  }

  getTodo(id){
    return this.http.get<Todo>(`${API_URL}/users/todos/${id}`);
  }

  updateTodo(id,todo){
    return this.http.put(`${API_URL}/users/todos`,todo);
  }

  addTodo(todo){
    return this.http.post(`${API_URL}/users/todos`,todo);
  }
}
