import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlimModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
