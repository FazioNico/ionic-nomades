/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-09-2017
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { APP_CONFIG, TAppConfig } from "../../app/app.config";
//import { WpFormationsProvider } from "../../providers/wp-formations/wp-formations";

/**
 * Generated class for the BrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'BrowserPage',
  segment: 'index'
})
@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html',
})
export class BrowserPage {

  public readonly appConfig:TAppConfig;
  public formations:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.appConfig = APP_CONFIG;
  }

  ionViewDidEnter() {
		// this.formations = this.wpApi.getArray()
	  //   .map(res => res.json())
	}

}
