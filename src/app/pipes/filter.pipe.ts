import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText: any): any {
    if (!value){
      return[];
    }
    if(!filterText){
      return value;
    }
    filterText = filterText(val => {
      return val.name.toLowerCase().includex(filterText);
    });
  }
}
