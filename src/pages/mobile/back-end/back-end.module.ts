import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackEndPage } from './back-end';

@NgModule({
  declarations: [
    BackEndPage,
  ],
  imports: [
    IonicPageModule.forChild(BackEndPage),
  ],
})
export class BackEndPageModule {}
