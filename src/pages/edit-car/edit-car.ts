import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrandVehicleProvider } from '../../providers/brand-vehicle/brand-vehicle';
import { ColorVehicleProvider } from '../../providers/color-vehicle/color-vehicle';
import { TypeVehicleProvider } from '../../providers/type-vehicle/type-vehicle';
import { UserProvider } from '../../providers/user/user';
import { CarProvider } from '../../providers/car/car';
/**
 * Generated class for the EditCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-car',
  templateUrl: 'edit-car.html',
})
export class EditCarPage {

    public token; 
    public identity;
    public status; 
    public message_success: any; 
    public message_error: any; 
  	public carData: any = {};
    public brands: any;
    public colors: any;
    public typeVehicles: any;

  	constructor(
  		public navCtrl: NavController,
  		public navParams: NavParams,
      public alertCtrl: AlertController,
      private _userProvider: UserProvider,
      private _brandVehicleProvider: BrandVehicleProvider,
      private _colorVehicleProvider: ColorVehicleProvider,
      private _typeVehicleProvider: TypeVehicleProvider,
      private _carProvider: CarProvider
  	) {
      this.identity = this._userProvider.getIdentity(); 
      this.token = this._userProvider.getToken();
      // Obtener parametros del  modal anterior
  		this.carData = this.navParams.get('carData');

  }

  ionViewDidLoad() {
    this.getBrands();
    this.getTypeVehicles();
    this.getColors();
  }

  getBrands(){
    this._brandVehicleProvider.getBrands(this.token).subscribe(
      response => {
        // Obtener el token 
        if (response.status != 'error') {
          this.status = 'success';
          this.brands = response.brands;
        }else{
          this.status = 'error';
          this.message_error = response.message;
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  getColors(){
    this._colorVehicleProvider.getColors(this.token).subscribe(
      response => {
        // Obtener el token 
        if (response.status != 'error') {
          this.status = 'success';
          this.colors = response.colors;
        }else{
          this.status = 'error';
          this.message_error = response.message;
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  getTypeVehicles(){
    this._typeVehicleProvider.getTypeVehicles(this.token).subscribe(
      response => {
        // Obtener el token 
        if (response.status != 'error') {
          this.status = 'success';
          this.typeVehicles = response.type_cars;
        }else{
          this.status = 'error';
          this.message_error = response.message;
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  updateCar(carData){
    this._carProvider.update(this.token, this.carData['id'], this.carData).subscribe(
        response => {
          if (response.status == 'success') {
            this.status = response.status; 
            this.message_success = response.message;
            console.log(this.message_success);

          }else{
            this.status = response.status; 
            this.message_error = response.message;
          }
        },
        error => {
          this.message_error = 'Existe un error, intente más tarde';
        }
    );
  }

  deleteCar(carData){
    const confirm = this.alertCtrl.create({
      title: '¿Esta seguro que desea eliminar el vehículo?',
      message: 'Una vez confirmado no podrá recuperar la información del vehículo.',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
