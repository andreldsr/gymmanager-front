import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'configuration', loadChildren: () => import('./modules/configuration/configuration.module').then(m => m.ConfigurationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
