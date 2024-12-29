import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildResumeComponent } from './build-resume/build-resume.component';
import { PersonalDetailsComponent } from './build-resume/personal-details/personal-details.component';
import { SidebarComponent } from './build-resume/sidebar/sidebar.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    BuildResumeComponent,
    PersonalDetailsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
