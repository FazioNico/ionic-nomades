/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   16-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 17-10-2017
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";

import { TAppConfig, APP_CONFIG } from "../../../app/app.config";
import { WpApiProvider } from "../../../providers/wp-api/wp-api";

/**
* Generated class for the BackEndPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage({
  name:'BackEndFormationPage',
  segment: 'formations/back-end'
})
@Component({
  selector: 'page-back-end',
  templateUrl: 'back-end.html',
})
export class BackEndPage {

  private appConfig: TAppConfig
  private formations:Observable<any>
  private backEndFormations:Observable<any[]>
  private pageInfo:Observable<any>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private wpApi: WpApiProvider
  ) {
    this.appConfig = APP_CONFIG;
    this.formations = this.wpApi.getArray({path:'formation'})
    .map(res => res.json());
  }

  ngOnInit(){
    if(!this.formations)return;
    this.pageInfo = this.wpApi.getObjectID({path:'pages', id:23}).map(res => res.json());
    this.backEndFormations = this.formations.map(formations=> formations.filter((f:any)=>f.cursus[0] === 3).sort((f:any)=>f.formation_position))
  }

  displayProg(formation:any):void{
    // console.log(formation)
    this.navCtrl.push('DetailFormationPage', {
      cat: 'back-end', // used for url navigation
      name: this.convertToSlug(formation.title.rendered), // used for url navigation
      formation: formation
    })
  }

  convertToSlug(text:string):string{
    return text.toLowerCase()
    .replace(/[^\w ]+/g,'')
    .replace(/ +/g,'-')
  }
}
