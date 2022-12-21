import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class AppService {
 
    headers: Headers;
    options: RequestOptions;
 
    constructor(public http: HttpClientModule) {
    }
 
    getCountry() {
 
        this.headers = new Headers({ 'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
 
        return this.http
            .get('https://restcountries.com/v3.1/all')
            .map((res: { json: () => any; }) => res.json());
    }
 
}
