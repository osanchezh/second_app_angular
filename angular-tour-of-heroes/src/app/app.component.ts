import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MessagesComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
