import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DEFAULT_USER_ICON_SRC } from 'src/app/constants/image';
import { AppState } from 'src/app/state/app.state';
import { selectImage, selectVisibility } from 'src/app/state/user/user.selectors';

@Component({
  selector: 'app-status-display',
  templateUrl: './status-display.component.html',
  styleUrls: ['./status-display.component.scss']
})
export class StatusDisplayComponent implements OnInit {
  public visibility: boolean = false;
  public imageUrl: string = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectVisibility).subscribe((data) => {
      this.visibility = data;
    });

    this.store.select(selectImage).subscribe((data) => {
      this.imageUrl = data || DEFAULT_USER_ICON_SRC;
    });
  }
}
