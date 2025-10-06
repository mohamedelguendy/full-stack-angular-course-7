import { Component } from '@angular/core';
import { UserService } from '../user-service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true, 
  imports: [CommonModule, FormsModule],  
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  newUser: string = '';
  users: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  addUser() {
    if (this.newUser.trim()) {
      this.userService.addUser(this.newUser);
      this.users = this.userService.getUsers();
      this.newUser = '';
    }
  }

  removeUser(index: number) {
    this.userService.removeUser(index);
    this.users = this.userService.getUsers();
  }
}