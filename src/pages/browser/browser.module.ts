/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 06-11-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { BrowserPage } from './browser';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    BrowserPage,
  ],
  providers: [
    WpApiProvider
  ],
  imports: [
    HttpModule,
    PipesModule,
    ComponentsModule,
    IonicPageModule.forChild(BrowserPage),
  ],
})
export class BrowserPageModule {}
