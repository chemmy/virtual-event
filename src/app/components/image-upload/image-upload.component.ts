import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IMAGE_UPLOAD_TYPE } from 'src/app/constants/image';
import { convertCanvasToFile } from 'src/app/utilities/image';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  @Output() onCancel = new EventEmitter();
  @Output() onUpload: EventEmitter<any> = new EventEmitter();
  slim: any;
  profile: any;
  imageUploadType: string = IMAGE_UPLOAD_TYPE;

  slimOptions = {
    ratio: '1:1',
    size: '200,200',
    labelLoading: 'Uploading...',
    maxFileSize: 2,
    didInit: this.slimInit.bind(this),
  };

  constructor() { }

  ngOnInit(): void {
  }

  onCancelClick() {
    this.onCancel.emit()
  }

  async onSaveClick() {
    const canvas = this.slim?.data?.output?.image ?? "";
    if (!canvas) {
      
      return console.log("Invalid image");
      // TODO SHOW ERROR!!
    }

    convertCanvasToFile(canvas).then((file) => {
      this.onUpload.emit(file);
    });
  }

  slimInit(_: never, slim:any) {
    this.slim = slim;
  };
}