import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PostsComponent } from './components/posts/posts.component';
import { ContactComponent } from './components/contact/contact.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { LanguagesComponent } from './components/resume/components/languages/languages.component';
import { AboutComponent } from './components/resume/components/about/about.component';
import { SkillsComponent } from './components/resume/components/skills/skills.component';
import { HobbiesComponent } from './components/resume/components/hobbies/hobbies.component';
import { SpecialtiesComponent } from './components/resume/components/specialties/specialties.component';
import { BackgroundComponent } from './components/resume/components/background/background.component';
import { EducationComponent } from './components/resume/components/education/education.component';
import { AwardsComponent } from './components/resume/components/awards/awards.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    TestimonialsComponent,
    PostsComponent,
    ContactComponent,
    MessengerComponent,
    MobileComponent,
    LanguagesComponent,
    AboutComponent,
    SkillsComponent,
    HobbiesComponent,
    SpecialtiesComponent,
    BackgroundComponent,
    EducationComponent,
    AwardsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
    , FormsModule

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
