import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkshopDetailsPage } from './workshop-details';

@NgModule({
  declarations: [
    WorkshopDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkshopDetailsPage),
  ],
})
export class WorkshopDetailsPageModule {}
