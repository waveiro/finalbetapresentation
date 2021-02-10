import { fromEvent } from 'rxjs';
import { filter, map, take, takeWhile,distinctUntilChanged } from 'rxjs/operators';

const observer = {
  next: value => console.log('next', value),
  error: value => console.log('error', value),
  complete: () => console.log('complete!'),
};

const keyUp$ = fromEvent(document, 'keyup');

const filteredKeyUp$ = keyUp$.pipe(
  map(event => event.key.toLowerCase()),
  filter(value => {
    return ['l', 'e', 'a', 'g', 'u', 'o', 'f', 'n', 'd', 's'].includes(value);
  }),
  takeWhile(value => value !== 's', true),
  distinctUntilChanged()
  // take(5)
);

filteredKeyUp$.subscribe(observer);
