import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TabComponent } from './tab.component';
import { TabDetalheComponent } from './tab-detalhe/tab-detalhe.component'

export const routes: Routes = [
  { path: '', component: TabComponent, children: [
    { path: 'search', component: TabDetalheComponent },
    { path: 'not-found', component: TabComponent },
    { path: 'user', component: TabComponent }
  ]}
  

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
