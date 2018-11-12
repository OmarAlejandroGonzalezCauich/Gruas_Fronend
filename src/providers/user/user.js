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
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(_http) {
        this._http = _http;
        this.url = GLOBAL.url;
    }
    UserProvider.prototype.signup = function (credentials, getToken) {
        if (getToken === void 0) { getToken = null; }
        if (getToken != null) {
            credentials.getToken = 'true';
        }
        var json = JSON.stringify(credentials);
        var params = 'json=' + json;
        var headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        // Url del back
        return this._http.post(this.url + 'login', params, { headers: headers });
    };
    UserProvider.prototype.register = function (user) {
        var json = JSON.stringify(user);
        var params = 'json=' + json;
        var headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        // Url del back
        return this._http.post(this.url + 'users', params, { headers: headers });
    };
    UserProvider.prototype.update = function (token, id, user) {
        var json = JSON.stringify(user);
        var params = 'json=' + json;
        var headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);
        // Url del back
        return this._http.put(this.url + 'users/' + id, params, { headers: headers });
    };
    UserProvider.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    UserProvider.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    UserProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], UserProvider);
    return UserProvider;
}());
export { UserProvider };
//# sourceMappingURL=user.js.map