import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Configuration } from '../model/configuration';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {

  API_URL = environment.api_url;
  constructor(private httpClient: HttpClient) { }

  getConfiguration() {
    return this.httpClient.get<Configuration>(`${this.API_URL}/configuration`).pipe(take(1))
  }

  saveConfiguration(configuration: Configuration) {
    return this.httpClient.post(`${this.API_URL}/configuration`, configuration).pipe(take(1))
  }
}