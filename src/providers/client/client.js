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
  Generated class for the ClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClientProvider = /** @class */ (function () {
    function ClientProvider(_http) {
        this._http = _http;
        this.url = GLOBAL.url;
    }
    ClientProvider.prototype.getClients = function () {
        var headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        // Url del back
        return this._http.get(this.url + 'clients', { headers: headers });
    };
    ClientProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ClientProvider);
    return ClientProvider;
}());
export { ClientProvider };
//# sourceMappingURL=client.js.map