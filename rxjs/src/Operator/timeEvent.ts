import { interval, tap, filter, map } from 'rxjs';

const observable$ = interval(1000);

const observer = {
  next: (x: number) => console.log(x + ' 발행'),
  error: (err: Error) => console.error('발행중 오류', err),
  complete: () => console.log('발행물 완결'),
};

observable$
  .pipe(
    tap(console.log),
    filter((x) => x % 2 === 0),
    map((x) => x * x)
  )
  .subscribe((x) => console.log(x, '발행'));
