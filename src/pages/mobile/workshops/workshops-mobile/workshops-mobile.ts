/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   18-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-10-2017
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { Observable } from "rxjs/Observable";

import { TAppConfig } from "../../../../app/app.config";
import { WpApiProvider } from "../../../../providers/wp-api/wp-api";

/**
* Generated class for the WorkshopsMobilePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage({
  name: 'WorkshopsMobilePage',
  segment: 'workshops/mobile',
  defaultHistory: ['WorkshopsPage']
})
@Component({
  selector: 'page-workshops-mobile',
  templateUrl: 'workshops-mobile.html',
})
export class WorkshopsMobilePage {

  public workshops:Observable<any[]>
  private _modal:Modal


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private wpApi:WpApiProvider,
    private modalCtrl: ModalController
  ) {
    this.workshops = this.wpApi.getArray({path:'workshop'})
    .map(res => res.json().sort((wk:any)=> wk.wk_position).reverse())
  }

  displayDetail(wks:any){
    console.log('wks->', wks)
    this._modal = this.modalCtrl.create(
      'WorkshopDetailsPage', { wk: wks }
    );
    this._modal.present();
    this._modal.onDidDismiss(data => {

      //(data)? this.scrollToContact() : null;
    });
  }
}
