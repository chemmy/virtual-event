import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { SlimModule } from '../assets/lib/slim/slim.angular.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ButtonComponent } from './components/button/button.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './state/user/user.reducer';
import { UserEffects } from './state/user/user.effects';
import { NavToggleHoverDirective } from './directives/nav-toggle-hover.directive';
import { StatusDisplayComponent } from './components/status-display/status-display.component';
import { NavDesktopComponent } from './components/nav-desktop/nav-desktop.component';
import { FooterDesktopComponent } from './components/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from './components/footer-mobile/footer-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ProfileComponent,
    ImageUploadComponent,
    ProfileImageComponent,
    ProfileDetailsComponent,
    ButtonComponent,
    NavToggleHoverDirective,
    StatusDisplayComponent,
    NavDesktopComponent,
    FooterDesktopComponent,
    FooterMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlimModule,
    StoreModule.forRoot({ user: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
