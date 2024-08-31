import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SignInComponent } from './signin.component';

export const routes: Routes = [
  { path: '', component: SignInComponent }

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
