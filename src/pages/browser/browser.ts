/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 17-10-2017
 */

import { Component, ViewChild , ElementRef} from '@angular/core';
import { IonicPage, Content } from 'ionic-angular';
import { APP_CONFIG, TAppConfig } from "../../app/app.config";
//import { WpFormationsProvider } from "../../providers/wp-formations/wp-formations";

/**
 * Generated class for the BrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'BrowserPage',
  segment: 'index'
})
@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html',
})
export class BrowserPage {

  public readonly appConfig:TAppConfig;
  private wksList:any[];
  private nav:HTMLElement;
  @ViewChild(Content) content: Content;

  constructor(
    private elRef:ElementRef
  ) {
    this.appConfig = APP_CONFIG;
  }

  ngAfterViewInit():void{
    this.nav =  this.elRef.nativeElement.querySelector('nav')
  }

  handleWksDatas($event:any[]):void{
    //console.log('$event->', $event)
    this.wksList = $event
  }

  navTo(event:any){
    let el:HTMLElement = this.elRef.nativeElement.querySelector(event);
    //console.log(event, el );
    (el)? this.content.scrollTo(0, el.offsetTop, 450): null;
  }

  isScrolling(event:any){
    //console.log('isScrolling-> ',event.scrollTop);
    (event.scrollTop >= 70)? this.nav.classList.add('fixed'): this.nav.classList.remove('fixed')
  }

}
