import { EMPTY } from 'rxjs';

EMPTY.subscribe({
  next: (v) => console.log(v),
  error: (e) => console.error(e),
  complete: () => console.info('complete'),
});
