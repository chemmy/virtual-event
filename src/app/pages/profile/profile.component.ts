import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectUserDetails } from 'src/app/state/user/user.selectors';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  storeImage$ = this.store.select(selectUserDetails);
  user!: User;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.storeImage$.subscribe((data) => {
      this.user = data;
    });
  }
}
