import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TabComponent } from './tab.component';
import { TabFormComponent } from './tab-form/tab-form.component'
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', component: TabComponent, children: [
    { path: 'search', component: TabFormComponent },
    { path: 'user', component: UserComponent }
  ]}
  

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
