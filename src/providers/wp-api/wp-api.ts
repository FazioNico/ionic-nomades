/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 04-10-2017
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { APP_CONFIG } from "../../app/app.config";

/*
  Generated class for the WpFormationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WpApiProvider{

  constructor(public http: Http) {
  }

  getArray(datas:{path:string}):Observable<any> {
    console.log('deh deh')
		return  this.http.get( `${APP_CONFIG.apiEndPoint}/${datas.path}?per_page=100`)
	    .map(res => res)
	}

  getObjectID(req:{path:string,id:string|number}):Observable<any> {
		return  this.http.get( `${APP_CONFIG.apiEndPoint}/${req.path}/${req.id}`)
	    .map(res => res)
	}
}
