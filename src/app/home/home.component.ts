import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

import{CustomService} from '../custom.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(HeaderComponent, {static:true}) child;

  userName = '<b>Manikandan</b>';

  showDiv = false;

  studentName = 'testjkdnfjnjkn';

  studentsForm:FormGroup

  serviceText;

  changeDiv(){
    this.showDiv = !this.showDiv;
  }

  constructor(private service: CustomService) { 
    this.serviceText = this.service.getValue();
  }

  ngOnInit() {
    this.studentsForm = new FormGroup({
      name: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
      email: new FormControl('',Validators.compose([Validators.required])),
      mobile: new FormControl('',Validators.compose([Validators.required])),
    })

    this.studentName = this.child.staffName;
  }

  getvalue1(val){
    alert(val);
  }

  getvalue2(){
    alert(this.studentName);
  }


  login(data){
    console.log(data);
  }

  reactive(){
    console.log(this.studentsForm.valid);
    console.log(this.studentsForm.value);
  }

}
