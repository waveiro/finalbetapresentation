import { from, interval, of, range, timer } from 'rxjs';

const observer = {
  next: value => console.log('next', value),
  error: value => console.log('error', value),
  complete: () => console.log('complete!'),
};

// const from$ = from([1, 2, 3, 4, 5]);
// const of$ = of(1, 2, 3, 4, 5);
// const range$ = range(1, 5);
//
// from$.subscribe(observer);
// of$.subscribe(observer);
// range$.subscribe(observer);

// const interval$ = interval(1000);
// interval$.subscribe(observer);

// const timer$ = timer(2000, 100);
// timer$.subscribe(observer);

