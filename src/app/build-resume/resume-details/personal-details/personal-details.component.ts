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

  resumePersonalDetails: Personal = new Personal();
  emptyString: string = "";
  firstName: string = "";

  constructor(private resumeDetailsService: ResumeDetailsService) { }
  personalDetailsForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    if (this.resumeDetailsService.resume?.personal) {
      this.resumePersonalDetails = this.resumeDetailsService.resume?.personal;
      console.log(this.resumePersonalDetails, "personal details");
    }
    console.log("personal");

    this.personalDetailsForm = new FormGroup({
      'firstName': new FormControl(this.resumePersonalDetails?.firstName),
      'lastName': new FormControl(this.resumePersonalDetails?.lastName),
      'otherFields': new FormArray([])
      
    })

    if (this.resumeDetailsService.isNotEmpty(this.resumeDetailsService.resume)) {


    }

  }

  isNullOrUndefined(value: any): boolean {
    return value == null;
  }

  setNotNullValue(value: any): any {
    if(value == null) {
      return null;
    } else {
      value;
    }
  }

  removeOtherField(index: number) {
    if (index >= 0 && index < this.resumePersonalDetails.otherFields.length) {
      this.resumePersonalDetails.otherFields.splice(index, 1);
    }
  }

  addField() {
    this.resumePersonalDetails.otherFields.push({
      isLink: true,
      link: {
        title: '',
        link: {
          linkUrl: '',
        linkText: ''
        }
        
      }, text: {
        title: '',
        text: ''
      }
    })
  }

}
