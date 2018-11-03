import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { UserProvider } from '../../providers/user/user';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public status: any;
  public message_success: any;
  public message_error: any;
  public token; 
  public identity;
  public userData: any;

  constructor(
  	private _modalCtrl: ModalController,
    private _navCtrl: NavController,
    private _toastCtrl: ToastController,
    private _userProvider: UserProvider
  ) {
    this.identity = this._userProvider.getIdentity(); 
    this.token = this._userProvider.getToken();
    this.userData = {"name":"","display_name":"","mobile":"","email":"","password":"","vat":""};
  }

  ngOnInit() {
    if (this.identity) {
      this._navCtrl.push(TabsPage);
    }
   }

  register(){
  	let modal = this._modalCtrl.create(RegisterPage); 
  	modal.present();
  }

  login(userData){
    //console.log(this.userData);
    this.show_toast('Validando datos...');

    this._userProvider.signup(this.userData).subscribe(
      response => {
        // Obtener el token 
        if (response.status != 'error') {
          this.status = 'success';
          this.message_success = 'Usuario identificado correctamente';
          this.show_toast(this.message_success);
          this.token = response;
          localStorage.setItem('token', this.token);
          //this.userData = new userData({"name":"","surname":"","telephone":"","email":"","password":"","remember_token":"","code_active":"","active":""});
          //userData.reset();
          // Obtener al usuario identificado
          this._userProvider.signup(this.userData, true).subscribe(
            
              response => {
                
                this.identity = response;
                localStorage.setItem('identity', JSON.stringify(this.identity));
                //console.log(localStorage);
                // Redirección
                this._navCtrl.push(TabsPage);
              
            },
            error =>{
              console.log(<any>error);
            }
          );

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

  forgotPass(){
    this.show_toast('Estamos trabajando con esta opción');
  }

  show_toast(message: string){
    let toast = this._toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    }).present();
  }

}
