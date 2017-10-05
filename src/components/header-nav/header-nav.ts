/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   05-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 05-10-2017
 */

import { Component, Input } from '@angular/core';

/**
 * Generated class for the HeaderNavComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-nav',
  templateUrl: 'header-nav.html'
})
export class HeaderNavComponent {

  @Input('baseUrl') readonly baseUrl:string;

  constructor() {
  }

}
