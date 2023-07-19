import { fromEvent, interval, throttle, timeInterval, map } from 'rxjs';

// default: leading true
fromEvent<MouseEvent>(document, 'click')
  .pipe(
    throttle((e: MouseEvent) => interval(1000)),
    timeInterval(),
    map((item) => item.interval)
  )
  .subscribe(console.log);
