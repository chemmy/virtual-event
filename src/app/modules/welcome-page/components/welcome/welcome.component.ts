import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectUserDetails } from 'src/app/state/user/user.selectors';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public userName: string = '';
  private subscription!: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store.select(selectUserDetails).subscribe((data) => {
      this.userName = data.name;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
