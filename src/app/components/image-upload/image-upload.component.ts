import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  @Output() onCancel = new EventEmitter();

  slimOptions = {
    ratio: '1:1',
    size: '200,200',
    initialImage: '../../../assets/images/default-user.jpg',
    labelLoading: 'Uploading...',
    maxFileSize: 2,
    service: this.slimService.bind(this),
    didInit: this.slimInit.bind(this)
  };

  constructor() { }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.onCancel.emit()
  }

  onSaveClick() {
    console.log("Save clicked");
  }

  // called when slim has initialized
  slimInit(data:any, slim:any) {
    // slim instance reference
    console.log(slim);

    // current slim data object and slim reference
    console.log(data);
  };

  // called when upload button is pressed or automatically if push is enabled
  slimService(formdata:any, progress:any, success:any, failure:any, slim:any) {
    // form data to post to server
    // set serviceFormat to "file" to receive an array of files
    console.log(formdata);

    // call these methods to handle upload state
    console.log(progress, success, failure);

    // reference to Slim instance
    console.log(slim);
  };
}
