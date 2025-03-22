import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListModule } from './task-list/task-list.module';
import { TaskListNewSyntaxComponent } from './task-list-new-syntax/task-list-new-syntax.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TaskListModule,TaskListNewSyntaxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular17class8';
}
