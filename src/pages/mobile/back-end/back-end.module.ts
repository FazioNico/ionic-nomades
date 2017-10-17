/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   16-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 17-10-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackEndPage } from './back-end';

import { HttpModule } from '@angular/http';
import { WpApiProvider } from "../../../providers/wp-api/wp-api";

@NgModule({
  declarations: [
    BackEndPage,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(BackEndPage),
  ],
  providers: [WpApiProvider]
})
export class BackEndPageModule {}
