import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { GLOBAL } from '../global/global'; 
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

	public url: string;
	public identity;
	public token;

	constructor(
		public _http: HttpClient
	) {
	  this.url = GLOBAL.url; 
	}

	signup(credentials, getToken = null): Observable<any>{
		if (getToken != null) {
			credentials.getToken = 'true';
		}
		let json = JSON.stringify(credentials);
		let params = 'json='+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		// Url del back
		return this._http.post(this.url+'login', params, {headers: headers});

	}

	register(user): Observable<any>{
		let json = JSON.stringify(user);
		let params = 'json='+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		// Url del back
		return this._http.post(this.url+'users', params, {headers: headers});
	}

	update(token, id, user): Observable<any>{
		let json = JSON.stringify(user);
		let params = 'json='+json;

		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);
		// Url del back
		return this._http.put(this.url+'users/'+ id, params, {headers: headers});

	}

	getToken(){
			let token = localStorage.getItem('token');
			if (token != "undefined") {
				this.token = token;
			}else{
				this.token = null;
			}
			return this.token;
		}

	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity'));
		if (identity != "undefined") {
			this.identity = identity;
		}else{
			this.identity = null;
		}

		return this.identity;
	}

}
