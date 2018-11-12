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
var CarsPage = /** @class */ (function () {
    function CarsPage(navCtrl, navParams, _modalCtrl, _carProvider, _userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._modalCtrl = _modalCtrl;
        this._carProvider = _carProvider;
        this._userProvider = _userProvider;
        this.identity = this._userProvider.getIdentity();
        this.token = this._userProvider.getToken();
        //this.carData = {"id":"","vehicle_id":"","brand_id":"","user_id":"","model":"","plate":"","color":"","class":"","year":"","no_serie":"","vehicle":"","brand":"","user":""}
    }
    CarsPage.prototype.ionViewDidLoad = function () {
    };
    CarsPage.prototype.ngOnInit = function () {
        //console.log()
        this.getCars();
    };
    CarsPage.prototype.createCar = function () {
        var modal = this._modalCtrl.create(CreateCarPage);
        modal.present();
    };
    CarsPage.prototype.getCars = function () {
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
    CarsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.getCars();
        setTimeout(function () {
            _this.carsData.slice(0);
            refresher.complete();
        }, 2000);
    };
    CarsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-cars',
            templateUrl: 'cars.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ModalController,
            CarProvider,
            UserProvider])
    ], CarsPage);
    return CarsPage;
}());
export { CarsPage };
//# sourceMappingURL=cars.js.map