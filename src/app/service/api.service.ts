/**
 * Service - API Services
 * @api functionType - POST, GET
 * @return - API response
 * @author Linto Thomas (linto@netobjex.com)
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpOptions: any;
  public accessToken: any;
  public grant_type:any;

  constructor(private http: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "content-Type": "application/json",
        "accept": "application/json",
      })
    };
  }

  doAuth() {
    this.httpOptions = {
      headers: new HttpHeaders({
        "accept-language": "en_US",
        "content-type": "application/x-www-form-urlencoded",
        "authorization" : "basic " + environment.authKey,
      })
    };

    return this.http.post<any>(`${environment.payPalUrl}` + 'oauth2/token', this.httpOptions).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }
}
