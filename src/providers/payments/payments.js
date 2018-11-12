var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global/global';
/*
  Generated class for the PaymentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PaymentsProvider = /** @class */ (function () {
    function PaymentsProvider(_http) {
        this._http = _http;
        this.url = GLOBAL.url;
    }
    PaymentsProvider.prototype.getTypePayments = function (token) {
        var headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);
        // Url del back
        return this._http.get(this.url + 'payment_types', { headers: headers });
    };
    PaymentsProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PaymentsProvider);
    return PaymentsProvider;
}());
export { PaymentsProvider };
//# sourceMappingURL=payments.js.map