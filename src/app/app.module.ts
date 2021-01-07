import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingPageComponent,
    SocialMediaBarComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
