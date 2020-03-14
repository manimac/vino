import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  search;
  posts;
  // url = 'assets/1.jpg';
  constructor(private http:HttpClient, private router: Router) { 
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      (response)=>{
        this.posts = response;
      },
      (error)=>{
        console.log(error)
      }
    )
    console.log(this.router.url)
  }

  ngOnInit() {
  }

  price1 = 100;
  price2 = 200;
  price3 = 300;

  studentName = "Mani";


  students=[
    {
      name:'Raj',
      age:20
    },
    {
      name:'Dinesh',
      age:24
    },
    {
      name:'Vicky',
      age:20
    },
    {
      name:'Aravind',
      age:23
    }
  ]

}
