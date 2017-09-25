/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   20-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 25-09-2017
 */

import { Component, Input, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the ContactComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contact',
  templateUrl: 'contact.html'
})
export class ContactComponent implements OnInit{

  peoples:string[];
  annimTranslate:number = 0;
  annimMaxStep:number = 0;
  annimDirection:boolean = true;
  @Input('baseUrl') readonly baseUrl:string;
  @ViewChild('sliderContainer') sliderContainer:ElementRef;

  constructor(
    private renderer:Renderer
  ) {
    this.peoples = [
      'Pierre-Marie_V2.png',
      'tania.png',
      'Eda.png',
      'Walid.png',
      'Eleonore.png'
    ]
  }



  ngOnInit(){
    console.log(this.sliderContainer)
    //this.renderer.setElementStyle(this.sliderContainer.nativeElement, 'margin-bottom', `-500px`)
    setInterval(_=> {
      console.log(this.annimMaxStep, this.peoples.length)
      if(this.annimDirection === true){
        // ++
        if(this.annimMaxStep >= this.peoples.length-1){
          this.annimDirection = false;
          this.annimMaxStep = 0;
          return
        }
        this.annimTranslate = this.annimTranslate + (600 +( (this.annimMaxStep=== 0)?30:this.annimMaxStep*30));
        this.annimMaxStep = this.annimMaxStep + 1;
      }
      else {
        // --
        if(this.annimMaxStep >= this.peoples.length-1){
          this.annimDirection = true;
          this.annimMaxStep = 0;
          return
        }
        this.annimTranslate = this.annimTranslate - (600 +( (this.annimMaxStep=== 0)?30:this.annimMaxStep*30));
        this.annimMaxStep = this.annimMaxStep + 1;

      }
      this.renderer.setElementStyle(this.sliderContainer.nativeElement, 'transform', `translateX(-${this.annimTranslate}px)`)
    }, 800)
  }
}
