/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   19-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 03-10-2017
 */

import { Component, EventEmitter, Output } from '@angular/core';
import { ModalController, Modal } from 'ionic-angular';
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
  private _modal:Modal
  @Output() wksDatas = new EventEmitter();

  constructor(
    private wpApi:WpFormationsProvider,
    private modalCtrl: ModalController
  ) {
    console.log('deh')
    this.workshops = this.wpApi.getArray({path:'workshop'})
	    .map(res => res.json().sort((wk:any)=> wk.wk_position).reverse())
      .map(datas => {
        this.wksDatas.emit(datas)
        return datas
      })
  }

  displayDetail(workshop:any):void {
    this._modal = this.modalCtrl.create(
      'WorkshopDetailsPage', { wk: workshop }
    );
    this._modal.present();
    this._modal.onDidDismiss(data => {

     (data)? this.scrollToContact() : null;
   });
  }

  scrollToContact(){
    // TODO scroll to contact section...
    console.log('scrollToContact...');
  }

  normalizeTXT(data:any):any{
    // parcour each proprety and remave with regex into value: &#038
    return data
  }
}
