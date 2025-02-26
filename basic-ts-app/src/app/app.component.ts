import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import './topics/01-basic-types';
//import './topics/02-objects';
//import './topics/03-arrays';
//import './topics/04-functions';
//import './topics/05-destructuring';
//import './topics/06-impexp';

import './topics/07-classes';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic-ts-app';
}
