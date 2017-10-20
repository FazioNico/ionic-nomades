/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 20-10-2017
 */

import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { APP_CONFIG, TAppConfig } from "../../app/app.config";

/**
 * Generated class for the MobilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'MobilePage',
  segment: 'index'
})
@Component({
  selector: 'page-mobile',
  templateUrl: 'mobile.html',
})
export class MobilePage {

  public readonly appConfig:TAppConfig;

  constructor(public navCtrl: NavController) {
    this.appConfig = APP_CONFIG;
  }

  goPage(page:string):void{
    this.navCtrl.push(page)
  }

}
