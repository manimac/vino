import { Component, OnInit, Input } from '@angular/core';
import { CustomService}from '../custom.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() student;
  @Input() employee;


  staffName = 'Dinesh kumar';
  service;

  constructor(private test: CustomService) { 
    this.service = this.test.getValue();
  }

  ngOnInit() {
  }

}
