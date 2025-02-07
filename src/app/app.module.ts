import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildResumeComponent } from './build-resume/build-resume.component';
import { PersonalDetailsComponent } from './build-resume/resume-details/personal-details/personal-details.component';
import { SidebarComponent } from './build-resume/sidebar/sidebar.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ResumeDetailsComponent } from './build-resume/resume-details/resume-details.component';
import { ResumeTemplateViewerComponent } from './build-resume/resume-template-viewer/resume-template-viewer.component';
import { ResumeTemplateComponent } from './build-resume/resume-template-viewer/resume-template/resume-template.component';
import { NgxPrintModule } from 'ngx-print';
import { SetScaleDirective } from './build-resume/resume-template-viewer/resume-template/set-scale.directive';
import { ScaleTemplateDirective } from './build-resume/resume-template-viewer/scale-template.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BuildResumeComponent,
    SidebarComponent,
    ResumeDetailsComponent,
    ResumeTemplateViewerComponent,
    ResumeTemplateComponent,
    PersonalDetailsComponent,
    SetScaleDirective,
    ScaleTemplateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    FormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
