import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ResumeformComponent } from './resumeform/resumeform.component';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';

const routes: Routes = [

  { path: 'register', component: RegistrationComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'editresume', component: ResumeformComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'template', component: ResumeTemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
