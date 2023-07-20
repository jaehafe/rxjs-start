import { interval, fromEvent, switchMap, map, take } from 'rxjs';

// 기준 스트림이 새 값을 발행하면 진행중이던 스트림을 멈추고
fromEvent<MouseEvent>(document, 'click')
  .pipe(
    switchMap((e: MouseEvent) =>
      interval(1000).pipe(
        map((i) => e.x + ' : ' + i),
        take(5)
      )
    )
  )
  .subscribe(console.log);
