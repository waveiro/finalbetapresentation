import { fromEvent, interval } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const click$ = fromEvent(document, 'click');

const coordinates$ = click$.pipe(map(
  event => ({
    x: event.clientX,
    y: event.clientY,
  }),
));

const coordinatesWithSave$ = coordinates$.pipe(
  mergeMap(coordinates =>
    ajax.post('https://run.mocky.io/v3/7c6f5d20-44db-4311-a679-b9404a1215da', coordinates)
  ),
);

coordinatesWithSave$.subscribe(console.log);
