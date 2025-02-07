import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-resume',
  templateUrl: './build-resume.component.html',
  styleUrls: ['./build-resume.component.css']
})
export class BuildResumeComponent implements OnInit {

  demosrc = "assets/images/untitled-10.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
