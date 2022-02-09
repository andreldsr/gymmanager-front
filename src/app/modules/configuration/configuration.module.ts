import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';


import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';


@NgModule({
  declarations: [
    ConfigurationPageComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    NzButtonModule
  ]
})
export class ConfigurationModule { }
