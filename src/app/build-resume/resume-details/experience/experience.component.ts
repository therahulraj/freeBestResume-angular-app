import { Component, OnInit } from '@angular/core';
import { ResumeDetailsService } from '../../services/resume-details.service';
import { Experience } from '../../model/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    experiences: Experience[] = [];

  constructor(private resumeDetailsService: ResumeDetailsService) { }

  ngOnInit(): void {
    // console.log(this.resumeDetailsService.resume);
    if (this.resumeDetailsService.resume?.experiences) {
        this.experiences = this.resumeDetailsService.resume.experiences;
        console.log(this.experiences, "experience details");
    }
    

  }

}