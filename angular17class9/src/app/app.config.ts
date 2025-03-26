import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import LocalePe from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';

registerLocaleData(LocalePe);
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
