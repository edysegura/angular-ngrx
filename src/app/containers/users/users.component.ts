import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { GetUsers } from '../../store/actions/user.actions';
import { selectUserList } from '../../store/selectors/user.selector';
import { AppState } from '../../store/state/app.state';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = this.store.pipe(select(selectUserList));

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this.router.navigate([ 'user', id ])
  }

}
