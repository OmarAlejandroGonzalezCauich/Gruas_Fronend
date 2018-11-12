import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { GLOBAL } from '../global/global'; 

/*
  Generated class for the TypeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TypeServiceProvider {

	public url: string;
	public identity;
	public token;

  	constructor(
		public _http: HttpClient
	) {
	  this.url = GLOBAL.url; 
	}

	getTypeServices(token): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);
		// Url del back
		return this._http.get(this.url+'type_services', {headers: headers});
	}



}
