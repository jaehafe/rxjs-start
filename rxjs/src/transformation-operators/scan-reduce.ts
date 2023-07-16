import { reduce, scan, of } from 'rxjs';

// reduce: 결과만 발행
// scan: 과정을 모두 발행

const obs$ = of(1, 2, 3, 4, 5);

obs$
  .pipe(
    reduce((acc, x) => {
      return acc + x;
    }, 0)
  )
  .subscribe((x) => console.log('reduce: ' + x));

obs$
  .pipe(
    scan((acc, x) => {
      return acc + x;
    }, 0)
  )
  .subscribe((x) => console.log('scan: ' + x));
