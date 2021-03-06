/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 06-11-2017
 */

import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Row } from 'ionic-angular';
import { Observable } from "rxjs/Observable";

import { TAppConfig } from "../../app/app.config";
import { WpApiProvider } from "../../providers/wp-api/wp-api";

/**
 * Generated class for the FormationsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'formations',
  templateUrl: 'formations.html'
})
export class FormationsComponent implements OnInit{
  colWidth:any = '10'
  point:any;
  public formations:Observable<any[]>
  public frontEndFormations:Observable<any[]>
  public backEndFormations:Observable<any[]>
  public pageInfo:Observable<any>
  @Input('appConfig') readonly appConfig: TAppConfig;
  @ViewChild('rowSvg') rowSvg:ElementRef

  constructor(private wpApi:WpApiProvider) {
    this.formations = this.wpApi.getArray({path:'formation'})
	    .map(res => res.json());
  }

  ngOnInit(){
    //console.log(this.rowSvg.nativeElement.clientWidth)
    this.colWidth = (this.rowSvg.nativeElement.clientWidth / 4) -20
    this.point = `0,3 0,13 ${this.colWidth},13`;

    if(!this.formations)return;
    this.pageInfo = this.wpApi.getObjectID({path:'pages', id:23}).map(res => res.json());
    this.frontEndFormations = this.formations.map(formations=> formations.filter(f=>f.cursus[0] === 2).sort(f=>f.formation_position))
    this.backEndFormations = this.formations.map(formations=> formations.filter(f=>f.cursus[0] === 3).sort(f=>f.formation_position))

  }
}
