import { from, fromEvent, sequenceEqual, mergeMap, map, take } from 'rxjs';

const num$ = from([3, 1, 4, 7, 5, 8, 2]);

const key$ = fromEvent<KeyboardEvent>(document, 'keyup')
  .pipe(
    map((e: KeyboardEvent) => Number(e.code.replace('Digit', ''))),
    take(7),
    sequenceEqual(num$)
  )
  .subscribe(console.log);

// input에 3, 1, 4, 7, 5, 8, 2 입력하면 true
