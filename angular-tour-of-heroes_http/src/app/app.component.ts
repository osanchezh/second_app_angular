import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MessagesComponent,
    RouterModule,
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
