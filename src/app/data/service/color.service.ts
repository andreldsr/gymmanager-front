import { Color } from './../model/color';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {

    API_URL = environment.api_url;
  constructor(private httpClient: HttpClient) { }

  getColor(){
      return this.httpClient.get<Color[]>(`${this.API_URL}/color`).pipe(take(1))
  }
}