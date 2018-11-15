import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	public status: any;
	public message_success: any;
	public message_error: any;
	public token; 
	public identity;
	public userData: any;

  constructor(
  	private viewCtrl: ViewController,
    private _navCtrl: NavController,
  	private _toastCtrl: ToastController,
    private _userProvider: UserProvider
  ) {
  	this.identity = this._userProvider.getIdentity(); 
    this.token = this._userProvider.getToken();
    this.userData = {"name":"","display_name":"","mobile":"","email":"","password":"","vat":""};
  }

  close_modal(){
  	this.viewCtrl.dismiss();
  }

  createUser(userData){

    this.show_toast('Validando datos...');
    
    this._userProvider.register(this.userData).subscribe(
      response => {
        // Obtener el token 
        if (response.status != 'error') {
          this.status = 'success';
          this.userData = {"name":"","display_name":"","mobile":"","email":"","password":"","vat":""};
          this.message_success = 'Se ha creado su cuenta de manera exitosa!';
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

}
