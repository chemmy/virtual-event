import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/components/profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { WelcomeComponent } from './welcome/component/welcome.component';
import { WelcomeModule } from './welcome/welcome.module';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    WelcomeModule,
    ProfileModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
