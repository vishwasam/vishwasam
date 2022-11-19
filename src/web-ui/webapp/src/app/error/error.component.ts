import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Hi, This page is in development mode, please try in some days'

  constructor() { }

  ngOnInit(): void {
    console.log(this.errorMessage)
  }

}
