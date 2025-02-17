import { Component, inject, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../components/model/todo.type';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
 todoService= inject(TodosService);
  todoItems = Array<Todo>();
 ngOnInit():void{
  //console.log("Test:"+this.todoService.todoItems);
  //this.todoService.getTodosFromApi();
  //this.todoItems.push(...this.todoService.todoItems);

  this.todoService
  .getTodosFromApi()
  .pipe(
    catchError((err) => {
      console.log(err);
      throw err;
    })
  )
  .subscribe((todos) => {
    this.todoItems.push(...todos);
  });
 }
}
