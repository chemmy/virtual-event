import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavToggleHoverDirective } from './directives/nav-toggle-hover.directive';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { SlimModule } from './lib/slim/slim.angular.module';
@NgModule({
  declarations: [
    NavToggleHoverDirective,
    ImageUploadComponent,
  ],
  imports: [
    CommonModule,
    SlimModule,
  ],
  exports: [
    NavToggleHoverDirective,
    ImageUploadComponent
  ]
})
export class SharedModule { }
