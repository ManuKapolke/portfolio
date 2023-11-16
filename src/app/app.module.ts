import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionAboveTheFoldComponent } from './components/section-above-the-fold/section-above-the-fold.component';
import { SectionAboutMeComponent } from './components/section-about-me/section-about-me.component';
import { SectionSkillsComponent } from './components/section-skills/section-skills.component';
import { SectionPortfolioComponent } from './components/section-portfolio/section-portfolio.component';
import { ProjectComponent } from './components/project/project.component';
import { SectionContactComponent } from './components/section-contact/section-contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ContactIconsComponent } from './components/contact-icons/contact-icons.component';
import { OverlaySendingScreenComponent } from './components/overlay-sending-screen/overlay-sending-screen.component';
import { OverlayMobileMenuComponent } from './components/overlay-mobile-menu/overlay-mobile-menu.component';
import { PageMainComponent } from './components/page-main/page-main.component';
import { PageImprintComponent } from './components/page-imprint/page-imprint.component';
import { PagePrivacyComponent } from './components/page-privacy/page-privacy.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StopPropagationDirective } from './directives/stop-propagation.directive';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionAboveTheFoldComponent,
    SectionAboutMeComponent,
    SectionSkillsComponent,
    SectionPortfolioComponent,
    ProjectComponent,
    SectionContactComponent,
    ContactFormComponent,
    FooterComponent,
    ContactIconsComponent,
    OverlaySendingScreenComponent,
    OverlayMobileMenuComponent,
    PageMainComponent,
    PageImprintComponent,
    PagePrivacyComponent,
    StopPropagationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
