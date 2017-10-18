/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   16-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-10-2017
 */

import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { APP_CONFIG, TAppConfig } from "../../../app/app.config";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ContactPage',
  segment: 'contact',
  defaultHistory: ['MobilePage']
})
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  public readonly appConfig:TAppConfig;

  constructor() {
    this.appConfig = APP_CONFIG;
  }

}
