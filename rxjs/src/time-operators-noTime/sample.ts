import { fromEvent, interval, sample } from 'rxjs';

interval(1000)
  .pipe(sample(fromEvent(document, 'click')))
  .subscribe(console.log);
