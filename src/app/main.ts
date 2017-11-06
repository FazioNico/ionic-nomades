/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   08-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 06-11-2017
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

export interface WindowSW extends Window {
  toto:any;
}

//AppModule.installServiceWorker();
platformBrowserDynamic().bootstrapModule(AppModule).then(_=> {
/*
  let cond = 'serviceWorker' in navigator && ['localhost', '127', '8100'].indexOf(location.hostname) === -1;
  if (cond) {
      navigator.serviceWorker.register('service-worker.js')
      .then((registration) => {
        console.log('[serviceWorker] installed with success!')
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if(!installingWorker) {
            console.log('no installingWorker')
            return;
          }

          installingWorker.onstatechange = () => {
            console.log('workerState->',installingWorker.state)
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  console.log('[serviceWorker] new update available')
                } else {
                  console.log('[serviceWorker] no update available')
                }
                break;
            }
          };
        };
      })
      .catch(err => console.error('Error', err));

  }
  else {
    console.log('[serviceWorker] no service worker available. status:', cond)
  }
*/
})
