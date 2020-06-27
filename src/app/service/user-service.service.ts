import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../model/user';


@Injectable()
export class UserServiceService {

  private userUrl: string;


  constructor(private http: HttpClient) { 
    this.userUrl = '/records';
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
    return this.http.get<User[]>("/records")
  }

  public getUserByEmailAddress(emailAddress: string): Observable<User[]> {
    let params = new HttpParams()
    .set('email', emailAddress);

    return this.http.get<User[]>("/records", {params});
  }

  public save(user: User) {
    return this.http.post<User>("/records/", user);
  }
}
