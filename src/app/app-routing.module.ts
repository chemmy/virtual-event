import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './modules/welcome-page/components/welcome/welcome.component';
import { WelcomePageModule } from './modules/welcome-page/welcome-page.module';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    WelcomePageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
