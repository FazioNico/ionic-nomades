/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 20-09-2017
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { HeaderPeopleComponent } from './header-people/header-people';
import { FormationsComponent } from './formations/formations';
import { WorkshopsComponent } from './workshops/workshops';
import { ContactComponent } from './contact/contact';
import { StudentsProjectsComponent } from './students-projects/students-projects';

@NgModule({

	declarations: [
		HeaderPeopleComponent,
    FormationsComponent,
    WorkshopsComponent,
    ContactComponent,
    StudentsProjectsComponent,
	],
	imports: [
		CommonModule,
		IonicPageModule.forChild(HeaderPeopleComponent),
		IonicPageModule.forChild(FormationsComponent),
		IonicPageModule.forChild(WorkshopsComponent),
		IonicPageModule.forChild(ContactComponent),
		IonicPageModule.forChild(StudentsProjectsComponent)
	],
	exports: [
		HeaderPeopleComponent,
    FormationsComponent,
    WorkshopsComponent,
    ContactComponent,
    StudentsProjectsComponent,
	]
})
export class ComponentsModule {}
