import { concat, fromEvent, interval, map, take } from 'rxjs';

const intv1$ = interval(1000).pipe(
  map(() => 'INTERVAL 1'),
  take(3)
);
const intv2$ = interval(1000).pipe(
  map(() => 'INTERVAL 2'),
  take(3)
);
const intv3$ = interval(1000).pipe(
  map(() => 'INTERVAL 3'),
  take(3)
);

// 스트림을 순서대로 이어붙임
concat(intv1$, intv2$, intv3$).subscribe(console.log);

// interval이 끝나고 click 가능
const interval$ = interval(1000).pipe(
  map((_) => 'interval'),
  take(5)
);
const click$ = fromEvent(document, 'click').pipe(map((_) => 'click'));

concat(interval$, click$).subscribe(console.log);
