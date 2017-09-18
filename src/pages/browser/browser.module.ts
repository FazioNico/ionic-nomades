/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 15-09-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { BrowserPage } from './browser';
import { WpFormationsProvider } from '../../providers/wp-formations/wp-formations';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    BrowserPage,
  ],
  providers: [
    WpFormationsProvider
  ],
  imports: [
    HttpModule,
    ComponentsModule,
    IonicPageModule.forChild(BrowserPage),
  ],
})
export class BrowserPageModule {}
