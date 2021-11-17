import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // Pure is used if you want to render the changes performed while filteration. for e.g searching for something and adding the
  // something in the array at the same time. Can lead to performance issues.
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];

    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
