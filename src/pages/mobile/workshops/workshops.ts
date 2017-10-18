/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   16-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-10-2017
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkshopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'WorkshopsPage',
  segment: 'workshops',
  defaultHistory: ['MobilePage']
})
@Component({
  selector: 'page-workshops',
  templateUrl: 'workshops.html',
})
export class WorkshopsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  goWorkshops(page:string){
    console.log(page)
    this.navCtrl.push(page)
  }
}
