import { fromEvent } from 'rxjs';
// event

const obs1$ = fromEvent(document, 'click');
const obs2$ = fromEvent(
  document.getElementById('myInput') as HTMLElement,
  'keypress'
);

obs1$.subscribe((item) => console.log(item));
obs2$.subscribe((item) => console.log(item));

// Ajax
import { ajax } from 'rxjs/ajax';

const obs$ = ajax(`http://127.0.0.1:3000/people/1`);
obs$.subscribe((result) => console.log(result.response));
