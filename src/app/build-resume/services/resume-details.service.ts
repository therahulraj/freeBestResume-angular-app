import { Injectable } from "@angular/core";
import { Resume } from "../model/resume.model";

@Injectable({providedIn: 'root'})
export class ResumeDetailsService {
    resumeJson: string = `{
    "personal": {
        "firstName": "Rahul",
        "lastName": "Raj",
        "otherFields": [
            {
                "isLink": true,
                "link": {
                    "title": "email",
                    "link": {
                        "linkUrl": "rahulraj16mar@gmail.com",
                        "linkText": "Email"
                    }
                }
            },
            {
                "isLink": false,
                "text": {
                    "title": "phoneNumber",
                    "text": "+91 7484898911"
                }
            }
        ]
    }
}`;

    resume: Resume = new Resume();

    constructor() {
        console.log(this.isNotEmpty(this.resume));
        Object.assign(this.resume, JSON.parse(this.resumeJson));
        console.log(this.isNotEmpty(this.resume));
        console.log(this.resume);
    }



    isNotEmpty(value: any): boolean {
        return !(value == null || value.length <= 0 || Object.keys(value).length == 0);
      }


}