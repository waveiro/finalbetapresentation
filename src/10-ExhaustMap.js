import { fromEvent, of } from 'rxjs';
import { map, delay, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const authenticateUser = () => {
  return ajax.post('https://run.mocky.io/v3/998a0eff-238e-4886-a683-fdcace8f327d');
};

const loginButton = document.querySelectorAll('.login-button');

const loginButtonClick$ = fromEvent(loginButton, 'click');

loginButtonClick$.pipe(
  mergeMap(() => authenticateUser())
).subscribe(console.log);
