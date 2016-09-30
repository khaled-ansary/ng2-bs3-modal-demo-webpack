import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/modal';
import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
