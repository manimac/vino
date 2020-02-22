import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  private a: any = 5;
  private b: any = 10;
  username = '<b>Dinesh kumar</b>';
  student = {
    name: 'Dinesh',
    age:20,
    mobile: 984589569
  }

  students = [
    {
      name: 'Dinesh',
      age:20,
      mobile: 984589569
    },
    {
      name: 'Rajesh',
      age:20,
      mobile: 984589569
    },
    {
      name: 'Vicky',
      age:20,
      mobile: 984589569
    } 
  ]

  ngOnInit(){
   this.save(10); 
   this.arrayFunctions();
  }
  save(val=2){
    this.a = val;
    if(this.a < this.b){
      console.log("B is greater than A")
    }
    else if(this.a > this.b){
      console.log("A is greater than B")
    }
    else{
      // console.log("Both are same")
    }


    for(var i = 0;i < this.students.length;i++){
      if(this.students[i].name == 'Rajesh'){
        // console.log(this.students[i])
      }
    }

    this.students.forEach(element=>{
      if(element.name == 'Vicky'){
        // console.log(element);
      }
    })
  }

  arrayFunctions(){
    // let user = {
    //   name: 'Rajeev',
    //   age:25,
    //   mobile: 95836908604
    // }
    // this.students.push(user);
    // this.students.unshift(user);
    // this.students.splice(1,0, user);
    // this.students.splice(1,1, user);

    // this.students.shift();
    // this.students.pop();
    // this.students.splice(1,1);
    console.log(this.students)
  }
}
