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
  public showUploader: boolean = false;
  public imageUrl: string = '';
  public uploading: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectImage).subscribe((data) => {
      this.imageUrl = data;
      this.showUploader = !this.imageUrl;
    });

    this.store.select(selectUploading).subscribe((data) => {
      this.uploading = data;
    });
  }

  onEditClick() {
    this.showUploader = true;
  }

  cancelUpload() {
    this.showUploader = false;
  }

  uploadNewImage(file: File) {
    this.store.dispatch(setUploading({ uploading: true }));
    this.store.dispatch(uploadImage({ file }));
  }

  getImageSource(): string {
    return this.imageUrl || DEFAULT_USER_ICON_SRC;
  }
}
