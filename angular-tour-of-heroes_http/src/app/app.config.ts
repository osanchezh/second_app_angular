import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import {routes} from './app.routes';

import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule, withFetch } from '@angular/common/http';

import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), 
    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
    ]),
    provideRouter(routes), provideClientHydration(), 
  ]
  //providers: [ provideClientHydration()]
};
