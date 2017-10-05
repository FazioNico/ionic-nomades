/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 05-10-2017
 */

import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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
  private wksList:any[];

  constructor(
  ) {
    this.appConfig = APP_CONFIG;
  }

  handleWksDatas($event:any[]):void{
    console.log('$event->', $event)
    this.wksList = $event
  }

}
