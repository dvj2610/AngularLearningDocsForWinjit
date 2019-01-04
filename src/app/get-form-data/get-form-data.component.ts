import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-form-data',
  templateUrl: './get-form-data.component.html',
  styleUrls: ['./get-form-data.component.css']
})
export class GetFormDataComponent implements OnInit {

  formdata :FormData;
  constructor() { }

  ngOnInit() {
    debugger;
    debugger;
    console.log(this.formdata.getAll('addressPropertyName').toString());    
  }

}
