import { Component, OnInit } from '@angular/core';
import { ResumeDetailsService } from '../../services/resume-details.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Personal } from '../../model/personal.model';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  resumePersonalDetails?: Personal;
  emptyString: string = "";

  constructor(private resumeDetailsService: ResumeDetailsService) { }
  personalDetailsForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    if (this.resumeDetailsService.resume?.personal) {
      this.resumePersonalDetails = this.resumeDetailsService.resume?.personal;
    }
    this.personalDetailsForm = new FormGroup({
      'firstName': new FormControl(this.resumePersonalDetails?.firstName),
      'lastName': new FormControl(this.resumePersonalDetails?.lastName),
      'otherFields': new FormArray([])
      
    })

    if (this.resumeDetailsService.isNotEmpty(this.resumeDetailsService.resume)) {

    }



  }

}
