/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   16-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-10-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ContactPage),
  ],
})
export class ContactPageModule {}
