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
import { ViewController, NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(viewCtrl, _navCtrl, _toastCtrl, _userProvider) {
        this.viewCtrl = viewCtrl;
        this._navCtrl = _navCtrl;
        this._toastCtrl = _toastCtrl;
        this._userProvider = _userProvider;
        this.identity = this._userProvider.getIdentity();
        this.token = this._userProvider.getToken();
        this.userData = { "name": "", "display_name": "", "mobile": "", "email": "", "password": "", "vat": "" };
    }
    RegisterPage.prototype.close_modal = function () {
        this.viewCtrl.dismiss();
    };
    RegisterPage.prototype.createUser = function (userData) {
        var _this = this;
        this.show_toast('Validando datos...');
        this._userProvider.register(this.userData).subscribe(function (response) {
            // Obtener el token 
            if (response.status != 'error') {
                _this.status = 'success';
                _this.message_success = 'Se ha creado su cuenta de manera exitosa!';
                _this.show_toast(_this.message_success);
            }
            else {
                _this.status = 'error';
                _this.message_error = response.message;
                _this.show_toast(_this.message_error);
                console.log('error');
            }
        }, function (error) {
            console.log(error);
        });
    };
    RegisterPage.prototype.show_toast = function (message) {
        var toast = this._toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'top'
        }).present();
    };
    RegisterPage = __decorate([
        Component({
            selector: 'page-register',
            templateUrl: 'register.html',
        }),
        __metadata("design:paramtypes", [ViewController,
            NavController,
            ToastController,
            UserProvider])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.js.map