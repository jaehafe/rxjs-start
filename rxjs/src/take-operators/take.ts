import { range, interval, fromEvent, take, filter, pluck } from 'rxjs';

range(1, 20).pipe(take(5)).subscribe(console.log);

console.log('------------');

range(1, 20)
  .pipe(
    filter((x) => x % 2 === 0),
    take(5)
  )
  .subscribe(console.log);

console.log('------------');

range(1, 20)
  .pipe(
    take(5),
    filter((x) => x % 2 === 0)
  )
  .subscribe(console.log);

console.log('------------');

interval(1000)
  .pipe(take(5))
  .subscribe(
    console.log,
    (err) => console.error(err),
    () => console.log('COMPLETE')
  );

console.log('------------');

fromEvent(document, 'click')
  .pipe(take(5), pluck('x'))
  .subscribe(
    console.log,
    (err) => console.error(err),
    () => console.log('COMPLETE')
  );

console.log('------------');

fromEvent(document, 'click')
  .pipe(
    pluck('x'),
    filter((x: any) => x < 200),
    take(5)
  )
  .subscribe(
    console.log,
    (err) => console.error(err),
    () => console.log('COMPLETE')
  );
