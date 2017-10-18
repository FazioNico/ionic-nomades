/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-10-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobilePage } from './mobile';

@NgModule({
  declarations: [
    MobilePage,
  ],
  imports: [
    IonicPageModule.forChild(MobilePage),
  ],
})
export class MobilePageModule {}
