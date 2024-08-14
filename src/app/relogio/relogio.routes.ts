import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RelogioComponent } from './relogio.component';

export const routes: Routes = [
  { path: '', component: RelogioComponent }

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
