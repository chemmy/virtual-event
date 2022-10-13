import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectUserDetails } from 'src/app/state/user/user.selectors';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user!: User;
  private subscription!: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store.select(selectUserDetails).subscribe((data) => {
      this.user = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
