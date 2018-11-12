var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { UserProvider } from '../../providers/user/user';
import { TabsPage } from '../tabs/tabs';
var HomePage = /** @class */ (function () {
    function HomePage(_modalCtrl, _navCtrl, _toastCtrl, _userProvider) {
        this._modalCtrl = _modalCtrl;
        this._navCtrl = _navCtrl;
        this._toastCtrl = _toastCtrl;
        this._userProvider = _userProvider;
        this.identity = this._userProvider.getIdentity();
        this.token = this._userProvider.getToken();
        this.userData = { "name": "", "display_name": "", "mobile": "", "email": "", "password": "", "vat": "" };
    }
    HomePage.prototype.ngOnInit = function () {
        if (this.identity) {
            this._navCtrl.push(TabsPage);
        }
    };
    HomePage.prototype.register = function () {
        var modal = this._modalCtrl.create(RegisterPage);
        modal.present();
    };
    HomePage.prototype.login = function (userData) {
        var _this = this;
        //console.log(this.userData);
        this.show_toast('Validando datos...');
        this._userProvider.signup(this.userData).subscribe(function (response) {
            // Obtener el token 
            if (response.status != 'error') {
                _this.status = 'success';
                _this.message_success = 'Usuario identificado correctamente';
                _this.show_toast(_this.message_success);
                _this.token = response;
                localStorage.setItem('token', _this.token);
                // Obtener al usuario identificado
                _this._userProvider.signup(_this.userData, true).subscribe(function (response) {
                    _this.identity = response;
                    localStorage.setItem('identity', JSON.stringify(_this.identity));
                    //console.log(localStorage);
                    // Redirección
                    _this._navCtrl.push(TabsPage);
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                _this.status = 'error';
                _this.message_error = response.message;
                _this.show_toast(_this.message_error);
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.forgotPass = function () {
        this.show_toast('Estamos trabajando con esta opción');
    };
    HomePage.prototype.show_toast = function (message) {
        var toast = this._toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'top'
        }).present();
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [ModalController,
            NavController,
            ToastController,
            UserProvider])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map