import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DEFAULT_USER_ICON_SRC } from 'src/app/constants/image';
import { AppState } from 'src/app/state/app.state';
import { setUploading, uploadImage } from 'src/app/state/user/user.actions';
import { selectImage, selectUploading } from 'src/app/state/user/user.selectors';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {
  storeImage$ = this.store.select(selectImage);
  storeUploading$ = this.store.select(selectUploading);
  showUploader: boolean = false;
  imageUrl: string = '';
  uploading: boolean = false;

  constructor(private store: Store<AppState>) { }

  async ngOnInit(): Promise<void> {
    this.storeImage$.subscribe((data) => {
      this.imageUrl = data;
      this.showUploader = !this.imageUrl;
    });

    this.storeUploading$.subscribe((data) => {
      this.uploading = data;
    });
  }

  onEditClick() {
    this.showUploader = true;
  }

  cancelUpload() {
    this.showUploader = false;
  }

  uploadImage(file: File) {
    this.store.dispatch(setUploading({ uploading: true }));
    this.store.dispatch(uploadImage({ file }));
  }

  getImageSource(): string {
    return this.imageUrl || DEFAULT_USER_ICON_SRC;
  }
}
