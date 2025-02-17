import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
 count=0;
 increment(){
    this.count=this.count+1;
 }

 reset(){
  this.count=0;
 }

 decrement(){
  this.count=this.count-1;
 }
}
