/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   16-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-10-2017
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";

import { TAppConfig, APP_CONFIG } from "../../../app/app.config";

/**
 * Generated class for the FormationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'FormationsPage',
  segment: 'formations',
  defaultHistory: ['MobilePage']
})
@Component({
  selector: 'page-formation',
  templateUrl: 'formation.html',
})
export class FormationPage {

  private appConfig: TAppConfig

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.appConfig = APP_CONFIG;
  }

  goTo(formation:string):void{
    this.navCtrl.push(formation)
  }

}
