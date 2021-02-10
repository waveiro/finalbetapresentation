import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');

  subscriber.complete();
});

observable.subscribe({
  next: value => console.log('next', value),
  error: value => console.log('error', value),
  complete: () => console.log('complete!')
});

// observable.subscribe(
//   value => console.log('next 2', value),
//   value => console.log('error ', value),
//   () => console.log('complete 2')
// )
