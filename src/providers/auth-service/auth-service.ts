import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }
  login(registerCredentials){
    if(registerCredentials.email === "test@authnex.com" && registerCredentials.password=="Au7hn3x73$7"){
       return true;
    }
    else{
      return false;
    }
  }
}
