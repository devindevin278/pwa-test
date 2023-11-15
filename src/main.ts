import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { provideRouter } from '@angular/router';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
