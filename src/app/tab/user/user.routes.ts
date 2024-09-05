import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UserComponent } from './user.component';


export const routes: Routes = [{  path: '',
  component: UserComponent
}];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
