import { fromEvent, defaultIfEmpty, pluck, takeUntil, timer, map } from 'rxjs';

// 발행물이 없을 시 기본값 발행

fromEvent(document, 'click')
  .pipe(
    takeUntil(timer(5000)),
    map((x) => x),
    defaultIfEmpty('NO CLICK')
  )
  .subscribe(console.log);
