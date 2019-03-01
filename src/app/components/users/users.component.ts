import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() users: User[];
  @Output() userSelected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }
}
