import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class PeopleService {

  private _url = ' http://localhost:6780/People';

  constructor(private http: Http) {}

  getEmp(): Promise<any> {
    return this.http.get(this._url).toPromise().then(res => res.json());
  }
}
