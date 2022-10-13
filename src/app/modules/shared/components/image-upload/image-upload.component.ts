import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMAGE_UPLOAD_TYPE } from 'src/app/constants/image';
import { convertCanvasToFile } from 'src/app/utilities/image';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  @Input() uploading: boolean = false;
  @Output() onCancel = new EventEmitter();
  @Output() onUpload: EventEmitter<any> = new EventEmitter();
  private slim: any;
  public imageUploadType: string = IMAGE_UPLOAD_TYPE;

  slimOptions = {
    ratio: '1:1',
    size: '200,200',
    maxFileSize: 2,
    didInit: this.slimInit.bind(this),
  };

  constructor() { }

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.onCancel.emit()
  }

  onSaveClick(): void {
    const canvas = this.slim?.data?.output?.image ?? "";
    if (!canvas) return;

    convertCanvasToFile(canvas).then((file) => {
      this.onUpload.emit(file);
    });
  }

  slimInit(_: never, slim: any): void {
    this.slim = slim;
  };

  disableSave() {
    return this.uploading || !this.slim?.data?.input?.file;
  }
}
