import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SignUpComponent } from './signup.component';

export const routes: Routes = [
  { path: '', component: SignUpComponent }

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
