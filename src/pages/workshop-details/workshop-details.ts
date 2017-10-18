/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   20-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-10-2017
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the WorkshopDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'WorkshopDetailsPage',
  segment: 'workshops/:id',
  defaultHistory: ['MobilePage']
})
@Component({
  selector: 'page-workshop-details',
  templateUrl: 'workshop-details.html',
})
export class WorkshopDetailsPage {

  public readonly wk:any;
  private _color:string;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
    this.wk = this.navParams.get('wk')
  }

  get color():string{
    switch(this.wk.parcours[0]){
      case 7:
      case 8:
      case 9:
        this._color = '#387c2b'
        break;
      case 10:
      case 11:
      case 12:
        this._color = '#0078ae'
        break;
      case 13:
      case 14:
      case 15:
        this._color = '#f6a01a'
        break;
      default:
        this._color = '#c33a32'
    }
    return this._color
  }

  goInscription(){
    this.viewCtrl.dismiss(true);
  }
}
