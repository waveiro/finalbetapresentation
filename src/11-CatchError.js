import { EMPTY, fromEvent, interval, of } from 'rxjs';
import { debounceTime, map, mergeAll, switchMap, pluck, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const textInput = document.querySelector('input');

const inputKeyUp$ = fromEvent(textInput, 'keyup');

inputKeyUp$.pipe(
  pluck('target', 'value'),
  switchMap(value => {
    return ajax.getJSON(`https://api.github.com/users/${value}`).pipe(
      catchError(err => {
        // return of(err.message);
        return EMPTY;
      })
    )
  }),
  debounceTime(200),
).subscribe(response => {
  console.log(response.name)
});

