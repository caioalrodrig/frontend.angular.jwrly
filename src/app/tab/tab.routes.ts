import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TabComponent } from './tab.component';

export const routes: Routes = [
  { path: 'user',  
    loadChildren: () => import('./user/user.routes').then( t => t.routes )},
  { path: 'search', 
    loadChildren: () => import('./tab-form/tab-form.routes').then( t => t.routes )},

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);



