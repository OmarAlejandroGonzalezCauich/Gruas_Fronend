import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NavController, ModalController } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
/*================================
=            Firebase            =
================================*/

/*import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
   apiKey: "AIzaSyA0UN6OD-IfzyogGhMsopxdcSVovTqa_Rc",
   authDomain: "gruas-54f06.firebaseapp.com",
   databaseURL: "https://gruas-54f06.firebaseio.com",
   projectId: "gruas-54f06",
   storageBucket: "gruas-54f06.appspot.com",
   messagingSenderId: "63543179307"
};*/

/*=====  End of Firebase  ======*/

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { UserProvider } from '../providers/user/user';
import { VehiclesProvider } from '../providers/vehicles/vehicles';
import { AssistancePage } from '../pages/assistance/assistance'; 
import { CarsPage } from '../pages/cars/cars';
import { CreateCarPage } from '../pages/create-car/create-car';
import { EditCarPage } from '../pages/edit-car/edit-car';
import { HistoricPage } from '../pages/historic/historic';
import { SettingsPage } from '../pages/settings/settings';
import { CarProvider } from '../providers/car/car';
import { ClientProvider } from '../providers/client/client';
import { TypeVehicleProvider } from '../providers/type-vehicle/type-vehicle';
import { ColorVehicleProvider } from '../providers/color-vehicle/color-vehicle';
import { BrandVehicleProvider } from '../providers/brand-vehicle/brand-vehicle';
import { PaymentsProvider } from '../providers/payments/payments';
import { TypeServiceProvider } from '../providers/type-service/type-service';
import { AssistanceProvider } from '../providers/assistance/assistance';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    TabsPage,
    AssistancePage,
    CarsPage,
    CreateCarPage,
    EditCarPage,
    HistoricPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)/*,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    TabsPage,
    AssistancePage,
    CarsPage,
    CreateCarPage,
    EditCarPage,
    HistoricPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    VehiclesProvider,
    CarProvider,
    ClientProvider,
    TypeVehicleProvider,
    ColorVehicleProvider,
    BrandVehicleProvider,
    PaymentsProvider,
    TypeServiceProvider,
    AssistanceProvider,
  ]
})
export class AppModule {}
