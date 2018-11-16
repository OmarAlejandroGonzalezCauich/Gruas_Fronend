import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCarPage } from './edit-car';

@NgModule({
  declarations: [
    EditCarPage,
  ],
  imports: [
    IonicPageModule.forChild(EditCarPage),
  ],
})
export class EditCarPageModule {}
