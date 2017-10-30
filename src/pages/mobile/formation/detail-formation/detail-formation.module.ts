/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   23-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 25-10-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailFormationPage } from './detail-formation';
import { PipesModule } from "../../../../pipes/pipes.module";

@NgModule({
  declarations: [
    DetailFormationPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(DetailFormationPage),
  ],
})
export class DetailFormationPageModule {}
