import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCarPage } from './create-car';

@NgModule({
  declarations: [
    CreateCarPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateCarPage),
  ],
})
export class CreateCarPageModule {}
