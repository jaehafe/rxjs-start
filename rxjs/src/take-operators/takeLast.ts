import {
  range,
  interval,
  fromEvent,
  take,
  filter,
  pluck,
  takeLast,
} from 'rxjs';

// 뒤에서부터 N개 선택
range(1, 20).pipe(takeLast(5)).subscribe(console.log);

console.log('------------');

interval(1000)
  .pipe(takeLast(5))
  .subscribe(
    console.log,
    (err) => console.error(err),
    () => console.log('COMPLETE')
  );
