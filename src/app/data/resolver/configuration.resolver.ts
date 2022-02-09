import { ConfigurationService } from '../service/configuration.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Configuration } from "src/app/data/model/configuration";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigurationResolver implements Resolve<Configuration> {
  constructor(private service: ConfigurationService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Configuration>|Promise<Configuration>|Configuration {
    return this.service.getConfiguration();
  }
}