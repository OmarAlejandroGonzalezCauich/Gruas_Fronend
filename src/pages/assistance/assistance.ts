import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { CarProvider } from '../../providers/car/car';
import { UserProvider } from '../../providers/user/user';
import { ClientProvider } from '../../providers/client/client';

/**
 * Generated class for the AssistancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assistance',
  templateUrl: 'assistance.html',
})
export class AssistancePage {

  public token; 
  public identity;
  public status; 
  //public carData: any;
  public carsData: any;
  public clientsData: any;
  public message_success: any; 
  public message_error: any; 

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private _toastCtrl: ToastController,
    private _userProvider: UserProvider, 
    private _carProvider: CarProvider,
    private _clientProvider: ClientProvider
  ) {
    this.identity = this._userProvider.getIdentity(); 
    this.token = this._userProvider.getToken();
  }

  ionViewDidLoad() {
    //this.getCars();
    //this.getClients();
  }

  /*getCars(){
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

  getClients(){
    this._clientProvider.getClients().subscribe(
      response => {
        // Obtener el token 
        if (response.status != 'error') {
          this.status = 'success';
          this.clientsData = response.clients;
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

  requestAssistance(){
    this.show_toast('Estamos trabajando...');
  }*/

  show_toast(message: string){
    let toast = this._toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    }).present();
  }

  doRefresh(refresher: any){
    //this.getCars();
    //this.getClients();
    setTimeout(() => {
      this.carsData.slice(0);
      refresher.complete();
    }, 2000);
  }

}
