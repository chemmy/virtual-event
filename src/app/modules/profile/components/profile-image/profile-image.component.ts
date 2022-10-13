import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
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
  private subscriptions: Subscription[] = [];

  constructor(private store: Store<AppState>) { }

  async ngOnInit(): Promise<void> {
    this.subscriptions.push(this.store.select(selectImage).subscribe((data) => {
      this.imageUrl = data || DEFAULT_USER_ICON_SRC;
    }));

    this.subscriptions.push(this.store.select(selectUploading).subscribe((data) => {
      this.uploading = data;
    }));
  }

  onEditClick(): void {
    this.showUploader = true;
  }

  cancelUpload(): void {
    this.showUploader = false;
  }

  uploadImage(file: File): void {
    this.store.dispatch(setUploading({ uploading: true }));
    this.store.dispatch(uploadImage({ file }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
