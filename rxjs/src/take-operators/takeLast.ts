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

// 끝이 언제인지 모기 때문에 출력 안됨
interval(1000)
  .pipe(takeLast(5))
  .subscribe(
    console.log,
    (err: Error) => console.error(err),
    () => console.log('COMPLETE')
  );

// 끝이 언제인지 알고 출력됨
interval(1000)
  .pipe(take(10), takeLast(5))
  .subscribe(
    console.log,
    (err: Error) => console.error(err),
    () => console.log('COMPLETE')
  );

// 잘못된 방법
fromEvent(document, 'click')
  .pipe(takeLast(5), pluck('x'))
  .subscribe(
    console.log,
    (err: Error) => console.error(err),
    () => console.log('COMPLETE')
  );

//
fromEvent(document, 'click')
  .pipe(take(10), takeLast(5), pluck('x'))
  .subscribe(
    console.log,
    (err) => console.error(err),
    () => console.log('COMPLETE')
  );
