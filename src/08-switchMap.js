import { fromEvent, interval } from 'rxjs';
import { debounceTime, map, mergeAll, switchMap, pluck } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const textInput = document.querySelector('input');

const inputKeyUp$ = fromEvent(textInput, 'keyup');

inputKeyUp$.pipe(
  pluck('target', 'value'),
  switchMap(value => {
    return ajax.getJSON(`https://run.mocky.io/v3/998a0eff-238e-4886-a683-fdcace8f327d/${value}`)
  }),
  debounceTime(200),
).subscribe(response => {
  console.log(response)
});

