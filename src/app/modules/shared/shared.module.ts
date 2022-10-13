import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavToggleHoverDirective } from './directives/nav-toggle-hover.directive';

@NgModule({
  declarations: [
    NavToggleHoverDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavToggleHoverDirective,
  ]
})
export class SharedModule { }
