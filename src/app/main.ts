/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   08-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 23-10-2017
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic()
.bootstrapModule(AppModule)
.then(_=> {
  // let cond = 'serviceWorker' in navigator && ['localhost', '127', '8100'].indexOf(location.hostname) === -1;
  // if (cond) {
  //   navigator.serviceWorker.register('service-worker.js')
  //   .then(() => console.log('service worker installed with success!'))
  //   .catch(err => console.error('Error', err));
  // }
  // else {
  //   console.log('No service worker:', cond)
  // }
})
