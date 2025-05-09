import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './app/interceptors/token.interceptor';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([tokenInterceptor])),
  provideRouter(routes)]
})
  .catch((err) => console.error(err));
