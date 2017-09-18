/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-09-2017
 */

import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the HeaderPeopleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-people',
  templateUrl: 'header-people.html'
})
export class HeaderPeopleComponent {

  @Input('baseUrl') readonly baseUrl:string;

  constructor() {
  }


}
