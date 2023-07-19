import { debounce, audit, fromEvent, interval, map } from 'rxjs';

fromEvent<MouseEvent>(document, 'click')
  .pipe(
    map((item: MouseEvent) => item.y),
    debounce((y: number) => interval(y * 10))
  )
  .subscribe(console.log);
