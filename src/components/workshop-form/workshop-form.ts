/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   28-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 28-09-2017
 */

import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the WorkshopFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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
        first: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        last: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        bday: [''],
        work: [''],
        email: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        street: [''],
        npaCity: [''],
      }),
      wks: fb.group({
        wks1: [],
        wks2: [],
        total: [],
      }),
      final: fb.group({
        msg:[],
        copy:[]
      })
    });


  }

}
