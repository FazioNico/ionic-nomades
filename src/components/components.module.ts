/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 18-09-2017
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { HeaderPeopleComponent } from './header-people/header-people';
import { FormationsComponent } from './formations/formations';
import { WorkshopsComponent } from './workshops/workshops';

@NgModule({

	declarations: [
		HeaderPeopleComponent,
    FormationsComponent,
    WorkshopsComponent
	],
	imports: [
		CommonModule,
		IonicPageModule.forChild(FormationsComponent)
	],
	exports: [
		HeaderPeopleComponent,
    FormationsComponent,
    WorkshopsComponent
	]
})
export class ComponentsModule {}
