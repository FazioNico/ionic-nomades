/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   18-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-10-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkshopsBackPage } from './workshops-back';
import { WpApiProvider } from "../../../../providers/wp-api/wp-api";
import { PipesModule } from "../../../../pipes/pipes.module";

@NgModule({
  declarations: [
    WorkshopsBackPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(WorkshopsBackPage),
  ],
  providers: [WpApiProvider]
})
export class WorkshopsBackPageModule {}
