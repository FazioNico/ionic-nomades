/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   28-09-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 04-10-2017
*/

import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

/**
* Generated class for the WorkshopFormComponent component.
*
* See https://angular.io/api/core/Component for more info on Angular
* Components.
*/

const pureEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const regexValidators = {
  email: pureEmail,
};

@Component({
  selector: 'workshop-form',
  templateUrl: 'workshop-form.html'
})
export class WorkshopFormComponent {

  public form: FormGroup;
  @Input('wksList') wksList:any[];

  constructor(
    @Inject(FormBuilder) fb: FormBuilder
  ) {
    this.form = fb.group({
      infos: fb.group({
        first: ['', Validators.compose([
          Validators.required,
          Validators.minLength(2)
        ])],
        last: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        bday: [''],
        work: [''],
        email: ['',Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(regexValidators.email)
        ])],
        street: [''],
        npaCity: [''],
      }),
      wks: fb.group({
        wks1: [''],
        wks2: [''],
        wks3: [''],
        wks4: [''],
      }),
      dates: fb.group({
        ops1: [''],
        ops2: [''],
        ops3: [''],
        ops4: [''],
      }),
      ecolage: fb.group({
        ops1: [''],
        ops2: [''],
        ops3: [''],
        ops4: [''],
      }),
      final: fb.group({
        msg:[''],
        copy:['']
      }),
      totalEcolage: ['']
    });
    let wksGroup = this.form.get('wks')
    if(!wksGroup)return;
    wksGroup.valueChanges.subscribe(formValues=> {
      let wk1 = (formValues.wks1.length <=0)? {} : JSON.parse(formValues.wks1)
      if(wk1.ecolage_wk){
        let date1 = this.form.controls['dates'].get('ops1');
        (date1)? date1.patchValue(wk1.date_session_1_du): null;
        let ecolage1 = this.form.controls['ecolage'].get('ops1');
        (ecolage1)? ecolage1.patchValue(wk1.ecolage_wk): console.log('err');
      }

      let wk2 = (formValues.wks2.length <=0)? {} : JSON.parse(formValues.wks2)
      if(wk2.ecolage_wk){
        let date2 = this.form.controls['dates'].get('ops2');
        (date2)? date2.patchValue(wk2.date_session_1_du): null;
        let ecolage2 = this.form.controls['ecolage'].get('ops2');
        (ecolage2)? ecolage2.patchValue(wk2.ecolage_wk): console.log('err');
      }

      let wk3 = (formValues.wks3.length <=0)? {} : JSON.parse(formValues.wks3)
      if(wk3.ecolage_wk){
        let date3 = this.form.controls['dates'].get('ops3');
        (date3)? date3.patchValue(wk3.date_session_1_du): null;
        let ecolage3 = this.form.controls['ecolage'].get('ops3');
        (ecolage3)? ecolage3.patchValue(wk3.ecolage_wk): console.log('err');
      }

      let wk4 = (formValues.wks4.length <=0)? {} : JSON.parse(formValues.wks4)
      if(wk4.ecolage_wk){
        let date4 = this.form.controls['dates'].get('ops4');
        (date4)? date4.patchValue(wk4.date_session_1_du): null;
        let ecolage4 = this.form.controls['ecolage'].get('ops4');
        (ecolage4)? ecolage4.patchValue(wk4.ecolage_wk): console.log('err');
      }

      // calcul total:
      let total = 0;

      let p1 = 0
      let eco1 = this.form.controls['ecolage'].get('ops1');
      (eco1)? p1 = +eco1.value : null;

      let p2 = 0
      let eco2 = this.form.controls['ecolage'].get('ops2');
      (eco2)? p2 = +eco2.value : null;

      let p3 = 0
      let eco3 = this.form.controls['ecolage'].get('ops3');
      (eco3)? p3 = +eco3.value : null;

      let p4 = 0
      let eco4 = this.form.controls['ecolage'].get('ops4');
      (eco4)? p4 = +eco4.value : null;

      // total logic
      total = p1 + p2 + p3 + p4;
      let t = this.form.controls['totalEcolage'];
      (t)
        ? t.patchValue(`CHF ${total}.-`)
        : null;
      console.log(total)
    })
  }

  onSubmit(){
    //console.log(this.form.value)
    let datasReady = {
      prenom: this.form.value.infos.first,
      nom: this.form.value.infos.last,
      naissance: this.form.value.infos.bday,
      profession: this.form.value.infos.work,
      cp: this.form.value.infos.npaCity,
      email: this.form.value.infos.email,
      adresse: this.form.value.infos.street,
      message_pre_inscription: this.form.value.final.msg,
      recevoir_copie: true,
      workshop_1: this.form.value.wks.wks1,
      workshop_2: this.form.value.wks.wks2,
      workshop_3: this.form.value.wks.wks3,
      workshop_4: this.form.value.wks.wks4,
      date_select_1: this.form.value.dates.ops1,
      date_select_2: this.form.value.dates.ops2,
      date_select_3: this.form.value.dates.ops3,
      date_select_4: this.form.value.dates.ops4,
      prix_wks_1: this.form.value.ecolage.ops1,
      prix_wks_2: this.form.value.ecolage.ops2,
      prix_wks_3: this.form.value.ecolage.ops3,
      prix_wks_4: this.form.value.ecolage.ops4,
      total_workshop: this.form.value.totalEcolage,
    }
    console.log(datasReady)
  }

}
