import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../components/model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgIf, TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
 todoService= inject(TodosService);
  todoItems = Array<Todo>();
  searchTerm = '';
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

 updateTodoItem(todoItem:Todo){
  
  
  /*
  this.todoItems.push({
    userId: 2,
    completed: true,
    title: 'limpiar',
    id: 220
  });
  */
 let temporal = Array<Todo>();
 var arrayLength = this.todoItems.length;
 for (var i = 0; i < arrayLength; i++) {
  console.log(this.todoItems[i]);
  if (this.todoItems[i].id === todoItem.id) {
    this.todoItems[i].completed = !this.todoItems[i].completed;
    temporal.push(this.todoItems[i]);
  }else{
    temporal.push(this.todoItems[i]);
  }
}
this.todoItems=[];
this.todoItems.push(...temporal);
temporal=[];
/*
 this.todoItems.push((todos) => {
  return todos.map((todo) => {
    if (todo.id === todoItem.id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });
});*/
 }
}
