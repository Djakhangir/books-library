import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchBook: any): any [] {
    if (!items) return [];
    if (!searchBook) return items;

    searchBook = searchBook.toLowerCase();

    return items.filter (it =>{ 
      return it.toLowerCase().includes(searchBook);
     });
  }
}
