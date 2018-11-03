import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public token; 
  public identity; 
  public status;
  public message_success;
  public message_error;
  public user_id;
  public userData: any;

  constructor(
    public _navCtrl: NavController,
    public _navParams: NavParams, 
    public _app: App,
    private _toastCtrl: ToastController,
    private _userProvider: UserProvider
  ) {
    this.identity = this._userProvider.getIdentity(); 
    this.token = this._userProvider.getToken();
    this.userData = this.identity; 
    this.user_id = this.identity['sub'];
  }

  ionViewDidLoad() {
  }

  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    this.identity = null;
    this.token = null; 
  	const root = this._app.getRootNav();
    root.popToRoot();
  }

  updateUser(){
    this._userProvider.update(this.token, this.user_id, this.userData).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = response.status; 
          this.message_success = response.message;
          this.show_toast(this.message_success);
        }else{
          this.status = response.status; 
          this.message_error = response.message;
          this.show_toast(this.message_error);
        }
      },
      error => {
        this.message_error = 'Existe un error, intente más tarde';
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
