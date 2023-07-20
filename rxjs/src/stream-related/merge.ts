import { merge, interval, fromEvent, map, take } from 'rxjs';

// const interval$ = interval(1000).pipe(map(() => 'interval'));
// const click$ = fromEvent(document, 'click').pipe(map(() => 'click'));

// 순서없이 하나로 합침
// merge(interval$, click$).subscribe(console.log);

const intv1$ = interval(1000).pipe(
  map(() => 'INTERVAL 1'),
  take(3)
);
const intv2$ = interval(1000).pipe(
  map(() => 'INTERVAL 2'),
  take(6)
);
const intv3$ = interval(1000).pipe(
  map(() => 'INTERVAL 3'),
  take(9)
);
const intv4$ = interval(1000).pipe(
  map(() => 'INTERVAL 4'),
  take(9)
);
const intv5$ = interval(1000).pipe(
  map(() => 'INTERVAL 5'),
  take(9)
);

// 한번에 3개씩 merge
merge(intv1$, intv2$, intv3$, intv4$, intv5$, 3).subscribe(console.log);
