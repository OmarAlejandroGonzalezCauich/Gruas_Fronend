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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { CarProvider } from '../../providers/car/car';
import { UserProvider } from '../../providers/user/user';
import { TypeServiceProvider } from '../../providers/type-service/type-service';
import { PaymentsProvider } from '../../providers/payments/payments';
/**
 * Generated class for the AssistancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssistancePage = /** @class */ (function () {
    function AssistancePage(navCtrl, navParams, _toastCtrl, _userProvider, _carProvider, _typeServiceProvider, _paymentsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._toastCtrl = _toastCtrl;
        this._userProvider = _userProvider;
        this._carProvider = _carProvider;
        this._typeServiceProvider = _typeServiceProvider;
        this._paymentsProvider = _paymentsProvider;
        this.identity = this._userProvider.getIdentity();
        this.token = this._userProvider.getToken();
        this.
        ;
    }
    AssistancePage.prototype.ionViewDidLoad = function () {
        this.getCars();
        this.getTypeServices();
        this.getPaymentTypes();
    };
    AssistancePage.prototype.getCars = function () {
        var _this = this;
        this._carProvider.getCarsUser(this.token).subscribe(function (response) {
            // Obtener el token 
            if (response.status != 'error') {
                _this.status = 'success';
                _this.carsData = response.cars;
            }
            else {
                _this.status = 'error';
                _this.message_error = response.message;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AssistancePage.prototype.getTypeServices = function () {
        var _this = this;
        this._typeServiceProvider.getTypeServices(this.token).subscribe(function (response) {
            // Obtener el token 
            if (response.status != 'error') {
                _this.status = 'success';
                _this.servicesData = response.typeServices;
            }
            else {
                _this.status = 'error';
                _this.message_error = response.message;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AssistancePage.prototype.getPaymentTypes = function () {
        var _this = this;
        this._paymentsProvider.getTypePayments(this.token).subscribe(function (response) {
            // Obtener el token 
            if (response.status != 'error') {
                _this.status = 'success';
                _this.paymentsData = response.paymentTypes;
            }
            else {
                _this.status = 'error';
                _this.message_error = response.message;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AssistancePage.prototype.requestAssistance = function () {
        this.show_toast('Estamos trabajando...');
    };
    AssistancePage.prototype.show_toast = function (message) {
        var toast = this._toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'top'
        }).present();
    };
    AssistancePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        //this.getCars();
        //this.getClients();
        setTimeout(function () {
            _this.carsData.slice(0);
            refresher.complete();
        }, 2000);
    };
    AssistancePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-assistance',
            templateUrl: 'assistance.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ToastController,
            UserProvider,
            CarProvider,
            TypeServiceProvider,
            PaymentsProvider])
    ], AssistancePage);
    return AssistancePage;
}());
export { AssistancePage };
//# sourceMappingURL=assistance.js.map