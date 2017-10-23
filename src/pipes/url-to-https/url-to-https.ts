/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   23-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 23-10-2017
 */

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the UrlToHttpsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'urlToHttps',
})
export class UrlToHttpsPipe implements PipeTransform {
  /**
   * Takes a value and replace http to https
   */
  transform(value: string) {
    return value.replace(/^http:\/\/www./i, 'https://')
  }
}
