import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stuName = 'jbfdhb';
  private a: any = 5;
  private b: any = 10;
  username = '<b>Dinesh kumar</b>';
  student = {
    name: 'Dinesh',
    age:20,
    mobile: 984589569
  }

  showDivision = true;
  showClass = false;


  newObj = {
    name: 'Vignesh',
    mobile: 58997695709
  }

  studentsForm: FormGroup;

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


   this.studentsForm = new FormGroup({
     name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
     email: new FormControl(''),
     mobile: new FormControl(''),
   })

   this.studentsForm.patchValue(this.newObj);
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

  showDiv(){
    this.showDivision = !this.showDivision;
  }

  saveText(val){
    alert(val);
  }

  saveText2(){
    alert(this.stuName);
  }

  saveText3(val){
    console.log(val)
  }

  saveText4(){
    console.log(this.studentsForm.valid);
    console.log(this.studentsForm.value)
    if(!this.studentsForm.value.name){
      console.log("Name is not filled");
    }
  }
}

