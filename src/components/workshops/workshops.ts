/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   19-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 20-09-2017
 */

import { Component } from '@angular/core';
import { Row } from 'ionic-angular';
import { Observable } from "rxjs/Observable";

import { TAppConfig } from "../../app/app.config";
import { WpFormationsProvider } from "../../providers/wp-formations/wp-formations";

/**
 * Generated class for the WorkshopsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'workshops',
  templateUrl: 'workshops.html'
})
export class WorkshopsComponent {

  public workshops:Observable<any[]>
  public pageInfo:Observable<any>

  constructor(private wpApi:WpFormationsProvider) {
    console.log('deh')
    this.workshops = this.wpApi.getArray({path:'workshop'})
	    .map(res => res.json().sort((wk:any)=> wk.wk_position).reverse())
  }

}
