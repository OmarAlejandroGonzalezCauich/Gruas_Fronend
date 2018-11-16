import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteCarPage } from './delete-car';

@NgModule({
  declarations: [
    DeleteCarPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteCarPage),
  ],
})
export class DeleteCarPageModule {}
