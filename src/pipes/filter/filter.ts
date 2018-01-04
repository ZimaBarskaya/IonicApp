import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(items: Array<any>, conditions: {[field: string]: any}): Array<any> {
           return items.filter(item => {
               for (let field in conditions) {
                   if (item[field] !== conditions[field]) {
                       return false;
                   }
               }
               return true;
           });
       }
}
