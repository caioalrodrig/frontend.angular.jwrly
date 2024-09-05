import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TabFormComponent } from './tab-form.component';


export const routes: Routes = [{ path: '',
  component: TabFormComponent
}]

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
