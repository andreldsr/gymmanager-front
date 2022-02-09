import { Color } from './../model/color';
import { ConfigurationService } from '../service/configuration.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { ColorService } from '../service/color.service';

@Injectable({ providedIn: 'root' })
export class ColorResolver implements Resolve<Color[]> {
  constructor(private service: ColorService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Color[]>|Promise<Color[]>|Color[] {
    return this.service.getColor();
  }
}