import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    
    this.getValues();
  }
   getValues(){

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyIiwidW5pcXVlX25hbWUiOiJtb2hhbWVkIiwibmJmIjoxNjA5MjI2OTM3LCJleHAiOjE2MDkzMTMzMzcsImlhdCI6MTYwOTIyNjkzN30.JQA6a2XLeli_VTFvRjQ-Q-tZrnaY8xEg2LW38_QJnwAdYhwgEj7Xy69zpxWgYQzNtxcf17LbD20RpFeSpZ9Q2Q'

    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
     this.http.get('https://localhost:5001/api/values',requestOptions).subscribe(
       response=>{this.values=response;},
       error=>{console.log(error);}
     )
   }
}
