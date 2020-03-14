import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor() { }

  @HostBinding('style.color') col;

  @HostListener('click')apply(){
    this.col = 'blue';
  }

  @HostListener('mouseover')apply2(){
    this.col = 'red';
  }

  @HostListener('mouseleave')apply3(){
    this.col = 'green';
  }

}
