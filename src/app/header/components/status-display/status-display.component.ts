import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DEFAULT_USER_ICON_SRC } from 'src/app/constants/image';
import { AppState } from 'src/app/state/app.state';
import { selectImage, selectVisibility } from 'src/app/state/user/user.selectors';

@Component({
  selector: 'app-status-display',
  templateUrl: './status-display.component.html',
  styleUrls: ['./status-display.component.scss']
})
export class StatusDisplayComponent implements OnInit {
  public storeVisibility$ = this.store.select(selectVisibility);
  public storeImage$ = this.store.select(selectImage);
  public visibility: boolean = false;
  public imageUrl: string = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.storeVisibility$.subscribe((data) => {
      this.visibility = data;
    });

    this.storeImage$.subscribe((data) => {
      this.imageUrl = data;
    });
  }

  getImageSource(): string {
    return this.imageUrl || DEFAULT_USER_ICON_SRC;
  }
}
