import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: 'tab', loadChildren: () => import('./tab/tab.module')
  .then( m => m.TabModule )},
  { path: 'relogio', loadChildren: () => import('./relogio/relogio.component')
  .then( m => m.RelogioComponent )}


];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
