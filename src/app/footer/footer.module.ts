import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { FooterDesktopComponent } from './components/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from './components/footer-mobile/footer-mobile.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    FooterDesktopComponent,
    FooterMobileComponent,
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    FooterDesktopComponent,
    FooterMobileComponent,
    AngularSvgIconModule
  ]
})
export class FooterModule { }
