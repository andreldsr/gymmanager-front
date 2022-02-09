import { ColorResolver } from './../../data/resolver/color.resolver';
import { ConfigurationResolver } from '../../data/resolver/configuration.resolver';
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: ConfigurationPageComponent,
  resolve: { configuration: ConfigurationResolver, colorList: ColorResolver }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
