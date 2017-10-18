/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   18-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-10-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InscriptionPage } from './inscription';
import { WpApiProvider } from "../../../providers/wp-api/wp-api";
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    InscriptionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(InscriptionPage),
  ],
  providers: [WpApiProvider]
})
export class InscriptionPageModule {}
