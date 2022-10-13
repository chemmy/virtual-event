import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { FooterDesktopComponent } from './components/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from './components/footer-mobile/footer-mobile.component';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  declarations: [
    FooterComponent,
    FooterDesktopComponent,
    FooterMobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterModule { }
