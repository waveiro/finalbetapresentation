import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
  let counter = 0;

  const intervalId = setInterval(() => {
    subscriber.next(counter);
    counter++;

    if(counter === 5) {
      subscriber.complete();
    }

  }, 1000);

  return () => {
    console.log('cleaning');
    clearInterval(intervalId);
  };

});

const subscription = observable.subscribe({
  next: value => console.log('next', value),
  error: value => console.log('error', value),
  complete: () => console.log('complete!'),
});

//subscription.unsubscribe();
