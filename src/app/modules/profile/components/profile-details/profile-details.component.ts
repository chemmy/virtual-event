import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { updateVisibility } from 'src/app/state/user/user.actions';
import { selectVisibility } from 'src/app/state/user/user.selectors';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  @Input() user!: User;
  public visibility: boolean = false;
  private subscription!: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store.select(selectVisibility).subscribe((data) => {
      this.visibility = data;
    });
  }

  onVisibilityChange(): void {
    const visibility = this.visibility;
    this.store.dispatch(updateVisibility({ visibility }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
