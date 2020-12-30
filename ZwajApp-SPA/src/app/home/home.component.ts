import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyIiwidW5pcXVlX25hbWUiOiJtb2hhbWVkIiwibmJmIjoxNjA5MzMwNTg5LCJleHAiOjE2MDk0MTY5ODksImlhdCI6MTYwOTMzMDU4OX0.gWWPwNnuanAzEbx90RuJStPxhAjqvvl_9cyyarbb2H7GmR45r8i0K5TZdd5i1UNVabgcRRt0AMo5dyiRA6O7kg'

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
