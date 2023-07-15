import { of, count, max, min, reduce } from 'rxjs';

const obs$ = of(4, 2, 6, 10, 8);

obs$.pipe(count()).subscribe((x: number) => console.log('count: ' + x));
obs$.pipe(max()).subscribe((x) => console.log('max: ' + x));
obs$.pipe(min()).subscribe((x) => console.log('min: ' + x));

obs$
  .pipe(
    reduce((acc, val) => {
      return acc + val;
    }, 0)
  )
  .subscribe((x) => console.log('reduce: ' + x));
