import { inject, Injectable } from '@angular/core';
import { Todo } from '../components/model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);
  /*
  todoItems: Array<Todo>=[{
    userId: 0,
    completed: true,
    title: 'limpiar',
    id: 0
  }, {
    userId: 1,
    completed: true,
    title: 'barrer',
    id: 1
  }
  ];*/
  todoItems: Array<Todo>=[];
  getTodosFromApi2(){
    const url=`https://jsonplaceholder.typicode.com/todos`;
    this.http.get<Array<Todo>>(url).subscribe((response:Array<Todo>)=>{
      this.todoItems.push(...response);
    });
  }
  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
  constructor() { }
}
