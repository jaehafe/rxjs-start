import { interval, fromEvent, concatMap, map, take, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

fromEvent<MouseEvent>(document, 'click')
  .pipe(
    concatMap((e: MouseEvent) =>
      interval(1000).pipe(
        map((i) => e.x + ' : ' + i),
        take(5)
      )
    )
  )
  .subscribe(console.log);

// 순서대로 겹치지 않게 이어붙임
// 126 : 0
// 126 : 1
// 126 : 2
// 126 : 3
// 126 : 4
// 133 : 0
// 133 : 1
// 133 : 2
// 133 : 3
// 133 : 4
// 75 : 0
// 75 : 1
// 75 : 2
// 75 : 3
// 75 : 4

of(3, 15, 4, 9, 1, 7)
  .pipe(
    concatMap((keyword) =>
      ajax(`http://127.0.0.1:3000/people/${keyword}`).pipe(
        map((item: any) => item.response.first_name)
      )
    )
  )
  .subscribe(console.log);
