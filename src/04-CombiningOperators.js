import { fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

const keyUp$ = fromEvent(document, 'keyup');

const keyCode$ = keyUp$.pipe(
  map(event => event.code)
);

const keyCodeWithPluck$ = keyUp$.pipe(
  pluck('target', 'nodeName')
);

const keyPressed$ = keyUp$.pipe(
  mapTo('Key pressed!')
);

keyUp$.subscribe(console.log)
// keyCode$.subscribe(value => console.log('keyCode$', value))
// keyCodeWithPluck$.subscribe(value => console.log('keyCodeWithPluck$', value))
// keyPressed$.subscribe(console.log)
