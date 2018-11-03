import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { CarProvider } from '../../providers/car/car';
import { BrandVehicleProvider } from '../../providers/brand-vehicle/brand-vehicle';
import { ColorVehicleProvider } from '../../providers/color-vehicle/color-vehicle';
import { TypeVehicleProvider } from '../../providers/type-vehicle/type-vehicle';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the CreateCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-car',
  templateUrl: 'create-car.html',
})
export class CreateCarPage {

  public token; 
  public identity;
  public status; 
  public message_success: any; 
  public message_error: any; 
  public carData: any;
  public brands: any;
  public colors: any;
  public typeVehicles: any;

  constructor
  (
  	public navCtrl: NavController,
  	public navParams: NavParams,
    private _carProvider: CarProvider,
    private _brandVehicleProvider: BrandVehicleProvider,
    private _colorVehicleProvider: ColorVehicleProvider,
    private _typeVehicleProvider: TypeVehicleProvider,
    private _userProvider: UserProvider,
    private _toastCtrl: ToastController,
  	private _modalCtrl: ModalController,
  	private viewCtrl: ViewController
  ) {
    this.identity = this._userProvider.getIdentity(); 
    this.token = this._userProvider.getToken();
    this.carData = {"tipovehiculo_id":"","marca_id":"","partner_id":this.identity['sub'],"anio":"","name":"","colorvehiculo_id":"","placas":"","clase":"","noserie":""}
  }

  ngOnInit(){
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
  

  createCar(carData){
    this.show_toast('Validando datos...');
    
    this._carProvider.create(this.token, this.carData).subscribe(
      response => {
        // Obtener el token 
        if (response.status != 'error') {
          this.status = 'success';
          this.message_success = 'Se ha dado de alta al vehículo con exito!';
          this.show_toast(this.message_success);
          }else{
            this.status = 'error';
            this.message_error = response.message;
            this.show_toast(this.message_error);
            console.log('error');
          }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  show_toast(message: string){
    let toast = this._toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    }).present();
  }

  close_modal(){
    this.viewCtrl.dismiss();
  }

}
