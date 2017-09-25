/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   25-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 25-09-2017
 */

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterByPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(wks: any[], args:{prop:string, value:string|number}) {

    if(!wks) return null
    return wks.filter(wk=> wk[args.prop][0] === args.value )

  }
}
