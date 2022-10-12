import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DEFAULT_USER_ICON_SRC } from 'src/app/constants/image';
import { AppState } from 'src/app/state/app.state';
import { selectImage, selectVisibility } from 'src/app/state/user/user.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  storeVisibility$ = this.store.select(selectVisibility);
  storeImage$ = this.store.select(selectImage);
  visibility: boolean = false;
  imageUrl: string = '';

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
