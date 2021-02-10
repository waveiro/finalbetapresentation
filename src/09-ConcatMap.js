import { fromEvent, of } from 'rxjs';
import { map, concatMap, delay } from 'rxjs/operators';

const saveAnswer = answer => {
  return of(`Saved answer: ${answer}`).pipe(
    delay(1500)
  );
};

const radioButtons = document.querySelectorAll('.radio-option');

const answerChange$ = fromEvent(radioButtons, 'click');

answerChange$.pipe(
  map(event => event.target.value),
  concatMap(value => saveAnswer(value))
).subscribe(console.log);
