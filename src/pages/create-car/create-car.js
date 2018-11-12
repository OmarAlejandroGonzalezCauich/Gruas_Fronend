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
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { CarProvider } from '../../providers/car/car';
import { BrandVehicleProvider } from '../../providers/brand-vehicle/brand-vehicle';
import { ColorVehicleProvider } from '../../providers/color-vehicle/color-vehicle';
import { TypeVehicleProvider } from '../../providers/type-vehicle/type-vehicle';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the CreateCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateCarPage = /** @class */ (function () {
    function CreateCarPage(navCtrl, navParams, _carProvider, _brandVehicleProvider, _colorVehicleProvider, _typeVehicleProvider, _userProvider, _toastCtrl, _modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._carProvider = _carProvider;
        this._brandVehicleProvider = _brandVehicleProvider;
        this._colorVehicleProvider = _colorVehicleProvider;
        this._typeVehicleProvider = _typeVehicleProvider;
        this._userProvider = _userProvider;
        this._toastCtrl = _toastCtrl;
        this._modalCtrl = _modalCtrl;
        this.viewCtrl = viewCtrl;
        this.identity = this._userProvider.getIdentity();
        this.token = this._userProvider.getToken();
        this.carData = { "tipovehiculo_id": "", "marca_id": "", "partner_id": this.identity['sub'], "anio": "", "name": "", "colorvehiculo_id": "", "placas": "", "clase": "", "noserie": "" };
    }
    CreateCarPage.prototype.ngOnInit = function () {
        this.getBrands();
        this.getTypeVehicles();
        this.getColors();
    };
    CreateCarPage.prototype.getBrands = function () {
        var _this = this;
        this._brandVehicleProvider.getBrands(this.token).subscribe(function (response) {
            // Obtener el token 
            if (response.status != 'error') {
                _this.status = 'success';
                _this.brands = response.brands;
            }
            else {
                _this.status = 'error';
                _this.message_error = response.message;
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateCarPage.prototype.getColors = function () {
        var _this = this;
        this._colorVehicleProvider.getColors(this.token).subscribe(function (response) {
            // Obtener el token 
            if (response.status != 'error') {
                _this.status = 'success';
                _this.colors = response.colors;
            }
            else {
                _this.status = 'error';
                _this.message_error = response.message;
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateCarPage.prototype.getTypeVehicles = function () {
        var _this = this;
        this._typeVehicleProvider.getTypeVehicles(this.token).subscribe(function (response) {
            // Obtener el token 
            if (response.status != 'error') {
                _this.status = 'success';
                _this.typeVehicles = response.type_cars;
            }
            else {
                _this.status = 'error';
                _this.message_error = response.message;
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateCarPage.prototype.createCar = function (carData) {
        var _this = this;
        this.show_toast('Validando datos...');
        this._carProvider.create(this.token, this.carData).subscribe(function (response) {
            // Obtener el token 
            if (response.status != 'error') {
                _this.status = 'success';
                _this.message_success = 'Se ha dado de alta al vehículo con exito!';
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
    CreateCarPage.prototype.show_toast = function (message) {
        var toast = this._toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'top'
        }).present();
    };
    CreateCarPage.prototype.close_modal = function () {
        this.viewCtrl.dismiss();
    };
    CreateCarPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-create-car',
            templateUrl: 'create-car.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CarProvider,
            BrandVehicleProvider,
            ColorVehicleProvider,
            TypeVehicleProvider,
            UserProvider,
            ToastController,
            ModalController,
            ViewController])
    ], CreateCarPage);
    return CreateCarPage;
}());
export { CreateCarPage };
//# sourceMappingURL=create-car.js.map