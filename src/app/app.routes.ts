import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'tab', loadChildren: () => import('./tab/tab.routes')
    .then( t => t.routes )},
  { path: 'home', loadChildren: () => import('./home/home.routes')
    .then( m => m.routes )},
  { path: 'relogios', loadChildren: () => import('./relogio/relogio.routes')
    .then( m => m.routes )}


];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
