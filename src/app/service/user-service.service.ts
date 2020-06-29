import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../model/user';


@Injectable()
export class UserServiceService {

  private baseUrl: string;


  constructor(private http: HttpClient) { 
    // this url should be enabled if a docker image is built, 
    // and the application is run as a docker container (instead of just using "ng serve")
    //this.baseUrl = '"http://localhost:8080/records"';
    this.baseUrl = "/records";
  }

 /* public findAll(): Observable<User[]> {
    return this.http.get<User[]>("/records").pipe(
      map((users) => users
      .map((user) => Object.assign(new User(), user))
      .map((val) => val.processingAfterPropertiesSet())
      )
    );
  } */

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }

  public getUserByEmailAddress(emailAddress: string): Observable<User[]> {
    let params = new HttpParams()
    .set('email', emailAddress);

    return this.http.get<User[]>(this.baseUrl, {params});
  }

  public save(user: User) {
    let data = new HttpParams()
    .set('email', user.email)
    .set('start', user.start)
    .set('end', user.end);

    return this.http.post(this.baseUrl, data);
  }
}
