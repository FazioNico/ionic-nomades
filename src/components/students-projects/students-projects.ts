/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   20-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 04-10-2017
 */

import { Component } from '@angular/core';
import { WpApiProvider } from "../../providers/wp-api/wp-api";
/**
 * Generated class for the StudentsProjectsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'students-projects',
  templateUrl: 'students-projects.html'
})
export class StudentsProjectsComponent {

  public projects:any

  constructor(private wpApi:WpApiProvider) {
    this.getDatas()
  }

  getDatas(){
    this.projects = this.wpApi.getProjects({path:'projet'})
                              .map(items => items.filter((i:any) => i.mention == '3'))
  }

}
