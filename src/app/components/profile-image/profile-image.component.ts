import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { uploadImage } from 'src/app/state/user/user.actions';
import { UserState } from 'src/app/state/user/user.reducer';
import { selectImage } from 'src/app/state/user/user.selectors';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {
  showUploader: boolean = false;
  storeImage$ = this.store.select(selectImage);
  storeImageUrl: string = '';

  constructor(private store: Store<AppState>) { }

  async ngOnInit(): Promise<void> {
    this.storeImage$.subscribe((data) => {
      this.storeImageUrl = data;
    });
  }

  onEditClick() {
    this.showUploader = true;
  }

  cancelUpload() {
    this.showUploader = false;
  }

  uploadImage(file: File) {
    console.log("uploadTry", file);
    this.store.dispatch(uploadImage({ file }));
  }
}
