import { timeInterval, pluck, scan, tap, fromEvent, debounceTime } from 'rxjs';

export const clicks$ = fromEvent(document, 'click').pipe(
  timeInterval(),
  pluck('interval'),
  scan((acc, i) => acc + i, 0),
  tap((x) => console.log('CLICKED: ' + x))
);

clicks$.subscribe();

// 일정 시간동안 다음 값이 나오지 않아야 마지막 값이 출력됨
clicks$
  .pipe(debounceTime(1000))
  .subscribe((x) => console.log('OUTPUT: -------- ' + x));
