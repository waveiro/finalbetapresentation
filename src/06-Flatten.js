import { fromEvent, interval } from 'rxjs';
import { debounceTime, map, mergeAll, mergeMap, pluck } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const textInput = document.querySelector('input');

const inputKeyUp$ = fromEvent(textInput, 'keyup');

inputKeyUp$.pipe(
  pluck('target', 'value'),
  mergeMap(value => {
    return ajax.getJSON(`https://api.github.com/users/${value}`)
  }),
  debounceTime(1000),
).subscribe(response => {
  console.log(response)
});



//mergeMap(value => {
// return interval(1000);
//}),
