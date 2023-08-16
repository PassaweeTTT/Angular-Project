import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Somchai'
    },
    {
      id: 2,
      name: 'Ana'
    },
    {
      id: 3,
      name: 'Chris Evan'
    }
  ];
}
