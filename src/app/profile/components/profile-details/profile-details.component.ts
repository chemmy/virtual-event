import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
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
  storeVisibility$ = this.store.select(selectVisibility);
  visibility: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.storeVisibility$.subscribe((data) => {
      this.visibility = data;
    });
  }

  getVisibilityMessage(): string {
    const visibility = this.visibility ? '' : 'not ';
    return `You are currently ${visibility}visible to other attendees.`;
  }

  onVisibilityChange() {
    const visibility = this.visibility;
    this.store.dispatch(updateVisibility({ visibility }));
  }
}
