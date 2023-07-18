import { interval, timer, fromEvent, takeUntil, pluck, tap, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// 기준이 되는 스트림이 발행하기까지

// const obs1$ = interval(1000);
// const obs2$ = fromEvent(document, 'click');

// obs1$.pipe(takeUntil(obs2$)).subscribe(
//   console.log,
//   (err: Error) => console.error(err),
//   () => console.log('COMPLETE')
// );

const obs1$ = fromEvent(document, 'click');
const obs2$ = timer(5000);

obs1$.pipe(pluck('x'), takeUntil(obs2$)).subscribe(
  console.log,
  (err) => console.error(err),
  () => console.log('COMPLETE')
);

// 0.05초에 한번씩 tap으로 response가 올 때까지 체크

interval(50)
  .pipe(
    takeUntil(
      ajax('http://127.0.0.1:3000/people/name/random').pipe(
        map((item) => item.response),
        tap(console.log)
      )
    )
  )
  .subscribe(console.log);
