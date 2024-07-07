import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'tab', loadChildren: () => import('./tab/tab.module').then( m => m.TabModule )},
  { path: 'login', loadChildren: () => import('./tab/tab.module').then( m => m.TabModule )}


];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
