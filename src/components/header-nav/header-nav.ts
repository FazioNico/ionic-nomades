/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   05-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 09-10-2017
 */

import { Component, Input, QueryList, ViewChildren, ElementRef, Output, EventEmitter } from '@angular/core';

interface HTMLLinkElementFull extends HTMLLinkElement {
  hash: string
}
interface EventClickLink extends MouseEvent {
  target: EventTarget & HTMLLinkElementFull
}

/**
 * Generated class for the HeaderNavComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-nav',
  templateUrl: 'header-nav.html'
})
export class HeaderNavComponent {

  @Input('baseUrl') readonly baseUrl:string;
  @ViewChildren('link', { read: ElementRef }) links: QueryList<ElementRef>
  @Output() navTo: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngAfterViewInit():void{
    this.links.map((link:ElementRef) => {
      link.nativeElement.onclick = this.navigateTo()
      return link
    })
  }

  navigateTo():(e:Event)=>EventClickLink{
    return (e:EventClickLink)=> {
      e.preventDefault()
      console.log(e.target.hash.slice(1,e.target.hash.length))
      this.navTo.emit(e.target.hash.slice(1,e.target.hash.length))
      return e;
    }
  }
}
