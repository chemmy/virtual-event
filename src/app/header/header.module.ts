import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NavDesktopComponent } from './components/nav-desktop/nav-desktop.component';
import { StatusDisplayComponent } from './components/status-display/status-display.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    NavDesktopComponent,
    StatusDisplayComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
