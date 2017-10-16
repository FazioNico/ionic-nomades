import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkshopsPage } from './workshops';

@NgModule({
  declarations: [
    WorkshopsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkshopsPage),
  ],
})
export class WorkshopsPageModule {}
