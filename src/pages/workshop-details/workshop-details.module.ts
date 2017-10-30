/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   20-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 25-10-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkshopDetailsPage } from './workshop-details';
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    WorkshopDetailsPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(WorkshopDetailsPage),
  ],
})
export class WorkshopDetailsPageModule {}
