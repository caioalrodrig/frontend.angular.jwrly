import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { routes } from './app/app.routes';
import { ensureAuthInterceptor } from './app/shared/interceptors/ensure-auth.interceptor';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';

const bootstrap = () => bootstrapApplication(AppComponent, {providers: [
  provideRouter(routes),
  provideAnimations(),
  provideNoopAnimations(),
  provideHttpClient(
    withFetch(), 
    withInterceptors([ensureAuthInterceptor]), 
  )
]});
export default bootstrap;
