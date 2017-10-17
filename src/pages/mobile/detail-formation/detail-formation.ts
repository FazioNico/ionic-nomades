/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   17-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 17-10-2017
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
* Generated class for the DetailFormationPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage({
  name:'DetailFormationPage',
  segment: 'formations/:cat/:name'
})
@Component({
  selector: 'page-detail-formation',
  templateUrl: 'detail-formation.html',
})
export class DetailFormationPage {

  private formation:any;
  private cat:string;
  private hexaCat:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    if(!this.navParams.get('formation')) {
      this.navCtrl.setRoot('MobilePage')
      console.log('popToRoot')
      return
    }
    this.formation = this.navParams.get('formation');
    this.cat = (this.navParams.get('cat')==='front-end')? 'front':'back';
    this.hexaCat = (this.navParams.get('cat')==='front-end')? '#397c2c':'#0078ae';
    console.log(this.cat, this.formation)
  }

  dowloadPDF(url:string){
      console.log(url)
      window.open(url)
  }

  goInscription(){
    // TODO: page inscription
    alert('TODO: page inscription')
  }
}
