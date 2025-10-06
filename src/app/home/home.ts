import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { Service } from '../service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  template: '<h1>{{ message }}</h1>',
  templateUrl: './home.html',
  standalone: true,
  styleUrls: ['./home.css'],
  styles: [`
    h1 { 
      color: black; /* changed to black as you wanted */
      text-align: center; /* centers the text */
    }
  `]
})
export class HomeComponent implements OnInit {
  message = '';

  constructor(
  private service: Service,
  private router: Router
) {}

  ngOnInit(): void {
    this.service.getMessage().subscribe((data: string) => {
      this.message = data;
    });
  }
}
