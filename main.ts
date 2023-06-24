import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

console.log("TESTTTTTTTTTTTTTTT");
var a: number;
var b: number = null;

function check(x, name) {
    if (x == null) {
        console.log(name + ' == null');
    }

    if (x === null) {
        console.log(name + ' === null');
    }

    if (typeof x === 'undefined') {
        console.log(name + ' is undefined');
    }
}

check(a, 'a');
check(b, 'b');
//check(cccc, 'c');

  // Otherise, log the boot error
}).catch(err => console.error(err));