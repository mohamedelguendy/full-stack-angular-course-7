import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home';
import { UserListComponent } from './user-list.component/user-list.component';


@Component({
  selector: 'app-root',
  standalone: true,    
  imports: [RouterOutlet, HomeComponent, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
