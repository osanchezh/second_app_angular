import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import './topics/01-basic-types';
//import './topics/02-objects';
//import './topics/03-arrays';
//import './topics/04-functions';
//import './topics/05-destructuring';
//import './topics/06-impexp';

//import './topics/07-classes';

import './topics/08-generictypes';
import { LikeComponent } from "./like/like.component";
import { UserFormComponent } from "./user-form/user-form.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LikeComponent, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic-ts-app';
}
