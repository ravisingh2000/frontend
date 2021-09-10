import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ResumeformComponent } from './resumeform/resumeform.component';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';

const appRoute:Routes=[

]
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    ResumeformComponent,
    ResumeTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
