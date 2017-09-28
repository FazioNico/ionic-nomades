/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   20-09-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 28-09-2017
*/

import { Component, Input, OnInit, ViewChild, ElementRef, Renderer, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  private form:FormGroup;
  private readonly peoples:{name:string,txt:string}[];
  private annimTranslate:number = 0;
  private annimStep:number = 0;
  private annimDirection:boolean = true;
  @Input('baseUrl') private readonly baseUrl:string;
  @ViewChild('sliderContainer') private sliderContainer:ElementRef;

  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    private renderer:Renderer
  ) {
    this.form = fb.group({
      first: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      last: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      obj: ['', Validators.minLength(4)],
      msg: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    });

    this.peoples = [
      {name:'Pierre-Marie_V2.png', txt:`<p>Mes clients sont des sociétés qui demandent des applications web développées avec les techniques les plus avancées.</p>
      <p><strong>Bien sûr, je peux le faire ...</strong></p>`},
      {name:'tania.png', txt: `<p>Je conseille les entreprises sur leur relation-clients. Une plateforme web interactive est l’un des investissements les plus efficaces pour optimiser et fidéliser leur relation avec les clients.</p>
      <p><strong>Je sais le faire ...</strong></p>`},
      {name:'Eda.png', txt:`<p>Je contrôle la gestion de plusiurs organisations internationales. Aussi je leur conseille sur leur stratégie de communication sur le web. Moins coûteuse que le print et d’une portée plus large. Avec mes connaissances dans les technologies web,</p>
      <p><strong>Je peux le faire ...</strong></p>`},
      {name:'Walid.png', txt:`<p>Je n’ai pas fait un master à l’EPFL pour passer mon temps à développer des logiciels bancaires ... Merci. J’ai envie de réaliser mes propres projets, des applications et des services sur les terminaux mobiles</p>
      <p><strong>A présent, je vais le faire ...</strong></p>`},
      {name:'Eleonore.png', txt: `<p>Dans mon job on a besoin d’une plateforme de  communication sur le web</p>
      <p><strong>Maintenant je peux le faire ...</strong></p>`}
    ].sort(_ => Math.random() - 0.15)
  }

  ngOnInit():void{
    this.initPoepleSlider()
  }

  initPoepleSlider():void{
    //this.renderer.setElementStyle(this.sliderContainer.nativeElement, 'margin-bottom', `-500px`)
    setInterval(_=> {
      //console.log(this.annimStep, this.peoples.length-1)
      if(this.annimDirection === true){
        // ++
        if(this.annimStep >= this.peoples.length-1){
          this.annimDirection = false;
          return
        }
        this.annimTranslate = this.annimTranslate + (655);
        this.annimStep = this.annimStep + 1;
      }
      else {
        // --
        if(this.annimStep === 0){
          this.annimDirection = true;
          return
        }
        this.annimTranslate = this.annimTranslate - (655);
        this.annimStep = this.annimStep - 1;
      }
      this.renderer.setElementStyle(this.sliderContainer.nativeElement, 'transform', `translateX(-${this.annimTranslate}px)`)
    }, 5800)
  }

}
