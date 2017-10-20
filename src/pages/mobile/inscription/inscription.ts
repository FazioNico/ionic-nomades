/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   18-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 20-10-2017
 */

import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { Observable } from "rxjs/Observable";

import { TAppConfig } from "../../../app/app.config";
import { WpApiProvider } from "../../../providers/wp-api/wp-api";

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'InscriptionPage',
  segment: 'inscription',
  defaultHistory: ['MobilePage']
})
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {

  public workshops:Observable<any[]>

  constructor(
    public navCtrl: NavController,
    private wpApi:WpApiProvider
  ) {
    this.workshops = this.wpApi.getArray({path:'workshop'})
    .map(res => res.json().sort((wk:any)=> wk.wk_position).reverse())
  }

}
