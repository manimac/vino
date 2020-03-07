import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!args[0]){
      return value;
    }
    return value.filter(item => item.age == (parseInt(args[0])));
  }

}
