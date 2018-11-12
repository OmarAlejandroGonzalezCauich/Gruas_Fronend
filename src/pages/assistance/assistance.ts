import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { CarProvider } from '../../providers/car/car';
import { UserProvider } from '../../providers/user/user';
import { TypeServiceProvider } from '../../providers/type-service/type-service';
import { PaymentsProvider } from '../../providers/payments/payments';
import { AssistanceProvider } from '../../providers/assistance/assistance';

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
  public servicesData: any;
  public clientsData: any;
  public paymentsData: any;
  public assistanceData: any;
  public message_success: any; 
  public message_error: any; 

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private _toastCtrl: ToastController,
    private _userProvider: UserProvider, 
    private _carProvider: CarProvider,
    private _typeServiceProvider: TypeServiceProvider,
    private _paymentsProvider: PaymentsProvider,
    private _assistanceProvider: AssistanceProvider
  ) {
    this.identity = this._userProvider.getIdentity(); 
    this.token = this._userProvider.getToken();
    this.assistanceData = {"vehiculo_id":"", "tiposervicio_id":"", "tipopago_id":"", "seencuentra":"", "selleva":""};
  }

  ionViewDidLoad() {

    this.getCars();
    this.getTypeServices();
    this.getPaymentTypes();
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

  getTypeServices(){
    this._typeServiceProvider.getTypeServices(this.token).subscribe(
      response => {
        // Obtener el token 
        if (response.status != 'error') {
          this.status = 'success';
          this.servicesData = response.typeServices;
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

  getPaymentTypes(){
    this._paymentsProvider.getTypePayments(this.token).subscribe(
      response => {
        // Obtener el token 
        if (response.status != 'error') {
          this.status = 'success';
          this.paymentsData = response.paymentTypes;
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

  createAssistance(assistanceData){
    this.show_toast('Validando datos...');
    
    this._assistanceProvider.createAssistance(this.token, this.assistanceData).subscribe(
      response => {
        // Obtener el token 
        if (response.status != 'error') {
          this.status = 'success';
          /*this.assistanceData = {"vehiculo_id":"", "tiposervicio_id":"", "tipopago_id":"", "seencuentra":"", "selleva":""};
          this.assistanceData.reset();*/
          this.message_success = 'Se ha levantado la solicitud!';
          this.show_toast(this.message_success);
          }else{
            this.status = 'error';
            this.message_error = response.message;
            this.show_toast(this.message_error);
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

  doRefresh(refresher: any){
    //this.getCars();
    //this.getClients();
    setTimeout(() => {
      this.carsData.slice(0);
      refresher.complete();
    }, 2000);
  }

}
