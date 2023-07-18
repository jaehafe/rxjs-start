import {
  range,
  interval,
  fromEvent,
  takeWhile,
  takeLast,
  filter,
  pluck,
} from 'rxjs';

// ~하는동안 선택

// 10이후에는 안 나옴
range(1, 20)
  .pipe(takeWhile((x) => x <= 10))
  .subscribe(console.log);

console.log('--------------');

interval(1000)
  .pipe(takeWhile((x) => x < 5))
  .subscribe(
    console.log,
    (err: Error) => console.error(err),
    () => console.log('COMPLETE')
  );

console.log('--------------');

fromEvent(document, 'click')
  .pipe(
    pluck('x'),
    takeWhile((x: any) => x < 200)
  )
  .subscribe(
    console.log,
    (err: Error) => console.error(err),
    () => console.log('COMPLETE')
  );
