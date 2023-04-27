import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FeatureTextComponent } from './feature-text/feature-text.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FeatureImagesComponent } from './feature-images/feature-images.component';
import { FeatureTitlesComponent } from './feature-titles/feature-titles.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ContactIconsComponent } from './contact-icons/contact-icons.component';
import { FullscreenImageViewerComponent } from './fullscreen-image-viewer/fullscreen-image-viewer.component';
import { CommonModule } from '@angular/common';
import { AdminPortalModule } from './admin-portal/admin-portal.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactFormComponent,
    SlideshowComponent,
    ContactPageComponent,
    FeatureTextComponent,
    AboutPageComponent,
    FeatureImagesComponent,
    FeatureTitlesComponent,
    PortfolioPageComponent,
    MatTableComponent,
    ContactIconsComponent,
    FullscreenImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    AdminPortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
