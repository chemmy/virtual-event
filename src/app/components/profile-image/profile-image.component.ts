import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { OccamlabApiService } from 'src/app/services/occamlab-api.service';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {
  showUploader: boolean = false;

  constructor(private occamlabApi: OccamlabApiService) { }

  async ngOnInit(): Promise<void> {
  }

  onEditClick() {
    this.showUploader = true;
  }

  cancelUpload() {
    this.showUploader = false;
  }

  async uploadImage(file: File) {
    this.occamlabApi.uploadImage(file).subscribe((a) => console.log({ a }));
  }
}
