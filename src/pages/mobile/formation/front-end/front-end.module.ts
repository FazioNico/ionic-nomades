/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   16-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-10-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrontEndPage } from './front-end';

import { HttpModule } from '@angular/http';
import { WpApiProvider } from "../../../../providers/wp-api/wp-api";

@NgModule({
  declarations: [
    FrontEndPage,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(FrontEndPage),
  ],
  providers: [WpApiProvider]
})
export class FrontEndPageModule {}
