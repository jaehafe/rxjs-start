import { range, groupBy, mergeMap, toArray } from 'rxjs';

range(1, 50)
  .pipe(
    groupBy((x) => x % 3),
    mergeMap((groups$) => groups$.pipe(toArray()))
  )
  .subscribe(console.log);

// [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49]
// [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50]
// [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48]
