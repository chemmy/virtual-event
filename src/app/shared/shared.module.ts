import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { NavToggleHoverDirective } from '../directives/nav-toggle-hover.directive';
import { SlimModule } from '../slim/slim.angular.module';

@NgModule({
  declarations: [
    ImageUploadComponent,
    ButtonComponent,
    NavToggleHoverDirective,
  ],
  imports: [
    CommonModule,
    SlimModule
  ],
  exports: [
    ImageUploadComponent,
    NavToggleHoverDirective
  ]
})
export class SharedModule { }
