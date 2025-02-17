import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent],
  template: `
    <app-header />
    <main>  
      <router-outlet />
    </main>
    
    
  `,
  styles: [
    ` 
    p {
      color: red
    }
    main {
      padding: 20px;
    }
    `
  ],
})
export class AppComponent {
  title = 'first-ng-app';
}
