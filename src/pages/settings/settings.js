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
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(_navCtrl, _navParams, _app, _toastCtrl, _userProvider) {
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
        this._app = _app;
        this._toastCtrl = _toastCtrl;
        this._userProvider = _userProvider;
        this.identity = this._userProvider.getIdentity();
        this.token = this._userProvider.getToken();
        this.userData = this.identity;
        this.user_id = this.identity['sub'];
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPage.prototype.logout = function () {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        this.identity = null;
        this.token = null;
        var root = this._app.getRootNav();
        root.popToRoot();
    };
    SettingsPage.prototype.updateUser = function () {
        var _this = this;
        this._userProvider.update(this.token, this.user_id, this.userData).subscribe(function (response) {
            if (response.status == 'success') {
                _this.status = response.status;
                _this.message_success = response.message;
                _this.show_toast(_this.message_success);
            }
            else {
                _this.status = response.status;
                _this.message_error = response.message;
                _this.show_toast(_this.message_error);
            }
        }, function (error) {
            _this.message_error = 'Existe un error, intente más tarde';
        });
    };
    SettingsPage.prototype.show_toast = function (message) {
        var toast = this._toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'top'
        }).present();
    };
    SettingsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-settings',
            templateUrl: 'settings.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            App,
            ToastController,
            UserProvider])
    ], SettingsPage);
    return SettingsPage;
}());
export { SettingsPage };
//# sourceMappingURL=settings.js.map