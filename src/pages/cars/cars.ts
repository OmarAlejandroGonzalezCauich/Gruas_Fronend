import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CreateCarPage } from '../create-car/create-car';
import { CarProvider } from '../../providers/car/car';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the CarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cars',
  templateUrl: 'cars.html',
})
export class CarsPage {

  public token; 
  public identity;
  public status; 
  //public carData: any;
  public carsData: any;
  public message_success: any; 
  public message_error: any; 

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private _modalCtrl: ModalController,
    private _carProvider: CarProvider,
    private _userProvider: UserProvider
  ) {
    this.identity = this._userProvider.getIdentity(); 
    this.token = this._userProvider.getToken();
    //this.carData = {"id":"","vehicle_id":"","brand_id":"","user_id":"","model":"","plate":"","color":"","class":"","year":"","no_serie":"","vehicle":"","brand":"","user":""}
  }

  ionViewDidLoad() {
  }

  ngOnInit(){
    //console.log()
    this.getCars();
  }


  createCar(){
  	let modal = this._modalCtrl.create(CreateCarPage); 
  	modal.present();
  }

  getCars(){
    this._carProvider.getCarsUser(this.token).subscribe(
      response => {
        // Obtener el token 
        if (response.status != 'error') {
          this.status = 'success';
          this.carsData = response.cars;
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

  doRefresh(refresher: any){
    this.getCars();
    setTimeout(() => {
      this.carsData.slice(0);
      refresher.complete();
    }, 2000);
  }

}
