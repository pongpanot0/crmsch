import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class Apiservice {
  // here I use a json file to simulate an API call
  private readonly _url: string = 'https://www.anapioficeandfire.com/api/books';

  constructor(private _httpClient: HttpClient) { }

  public getAll(): Observable<any[]> {
    return this._httpClient.get<any[]>(this._url);
  }
}
