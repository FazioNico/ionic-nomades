/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   20-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 05-10-2017
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
                              .map(items =>
                                items.filter((i:{mention:string}) => i.mention >= '2')
                                     .sort((a:{project_year:any},b:{project_year:any})=> +a.project_year - +b.project_year)
                                     .reverse()
                              )
  }

}
