/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   25-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 25-10-2017
 */

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ReplaceByPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'replaceBy',
})
export class ReplaceByPipe implements PipeTransform {
  /**
   * Takes a value and replace "toReplace" by "newValue".
   * And clean WP API special charaters encoded
   */
  transform(value: string, toReplace:string='', newValue:string= '') {

    return value.replace(toReplace, newValue)
                // &
                .replace("&amp;", "&")
                .replace("#038;", "")
                // '
                .replace("&r", "")
                .replace("squo;", "'")
                .replace("&#;", "")
                .replace("039;", "'")
                // -
                .replace("&#", "")
                .replace("8211;", "-")
  }
}
