/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   03-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 11-10-2017
 */

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { APP_CONFIG } from "../../app/app.config";
/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  private readonly endPoint:string = APP_CONFIG.apiEndPoint
  private readonly contact:string = '/inc/processFromContact.php'
  private readonly preInscription:string = ''

  constructor(private http: Http) {
  }

  sendContactForm(datas:any):Promise<{}>{
    return new Promise((resolve, reject) => {
      let headers:Headers = new Headers({
        'cache-control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      let options:RequestOptions = new RequestOptions({ headers: headers });
      this.http.post(`${this.endPoint}${this.contact}`, this.toFormUrlencoded(datas||{}), options)
               .map(res=> res.json())
               .subscribe(
                 res => resolve(res),
                 err => reject(err)
               )
    })

  }


  toFormUrlencoded(data:any):string {
    let query:string = "";
    for (let key in data) {
        query += encodeURIComponent(key)+"="+encodeURIComponent(data[key])+"&";
    }
    return query
    //return `nom=${data.nom}&prenom=${data.prenom}&email=${data.email}&objet=${data.objet}&message=${data.message}&txt_sauvegarde=${data.txt_sauvegarde}`
  }
}
