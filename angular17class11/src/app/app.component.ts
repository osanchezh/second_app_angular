import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { subscriptionMultipleOperators } from './operators/multiple-operator/multiple-operator';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular17class11';
  constructor() {
    subscriptionMultipleOperators();
  }

}
