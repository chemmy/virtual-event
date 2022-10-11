import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {
  showUploader: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick() {
    this.showUploader = true;
  }

  cancelUpload() {
    this.showUploader = false;
  }
}
