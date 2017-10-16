/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   16-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 16-10-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormationPage } from './formation';


@NgModule({
  declarations: [
    FormationPage,
  ],
  imports: [
    IonicPageModule.forChild(FormationPage),
  ]
})
export class FormationPageModule {}
