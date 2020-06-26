import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { User } from '../model/user';


@Injectable()
export class UserServiceService {

  private userUrl: string;


  constructor(private http: HttpClient) { 
    this.userUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl).pipe(
      map((users) => users
      .map((user) => Object.assign(new User(), user))
      .map((val) => val.processingAfterPropertiesSet())
      )
    );
  }

  public getUserByEmailAddress(emailAddress: string): Observable<User[]> {
    let params = new HttpParams()
    .set('emailAddress', emailAddress);

    return this.http.get<User[]>(this.userUrl + '/user', {params})
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }
}