import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: 'signin',
    loadChildren: () => import('./signin/signin.routes').then( t => t.routes ),
  },    
  { path: 'signup', 
    loadChildren: () => import('./signup/signup.routes').then( t => t.routes ),
  },
  { path: 'tab', 
    loadChildren: () => import('./tab/tab.routes').then( t => t.routes ),
    /*canActivate: [authGuard]*/ },    
  { path: 'home', 
    loadChildren: () => import('./home/home.routes').then( m => m.routes ),
    /*canActivate: [authGuard]*/},
  { path: 'relogios',
    loadChildren: () => import('./relogio/relogio.routes').then( m => m.routes ),
    /*canActivate: [authGuard]*/},
  { path: 'not-found', 
    loadChildren: () => import('./not-found/not-found.routes').then( m => m.routes )
    /*canActivate: [authGuard]*/
  },

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
