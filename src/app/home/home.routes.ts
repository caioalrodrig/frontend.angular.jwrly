import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }
  
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
