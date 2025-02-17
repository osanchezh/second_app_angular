import { Component } from '@angular/core';
import { GreetingsComponent } from '../components/greetings/greetings.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingsComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 message="hello there";
 keyUpHandler(event:KeyboardEvent){
  //alt +96
  console.log(`user typed something: ${event.key}`)
 }
}
