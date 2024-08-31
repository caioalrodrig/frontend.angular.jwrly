import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
  { path: '', component: NotFoundComponent }

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
