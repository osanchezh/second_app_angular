import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {


 inputMessage='Ingresa tus nombres';
 disabledButton:boolean = true;

 constructor() {
    setTimeout(()=>{
      this.disabledButton = false;
    }, 3000);
  }

  clickSavedData() {
    console.log('guardar datos');
  }
  input($event: Event) {
    const inputEvent= $event as InputEvent;
   //console.log($event);  
   console.log(inputEvent.data);  
  }
}
