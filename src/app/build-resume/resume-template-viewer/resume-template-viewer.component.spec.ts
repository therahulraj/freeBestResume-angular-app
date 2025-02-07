import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplateViewerComponent } from './resume-template-viewer.component';

describe('ResumeTemplateViewerComponent', () => {
  let component: ResumeTemplateViewerComponent;
  let fixture: ComponentFixture<ResumeTemplateViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTemplateViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTemplateViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
