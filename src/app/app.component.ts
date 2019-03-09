import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { GetConfig } from './store/actions/config.actions';
import { selectConfig } from './store/selectors/config.selector';
import { AppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngrx';
  config = this.store.pipe(select(selectConfig));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetConfig());
  }
}
