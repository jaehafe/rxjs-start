import { interval, fromEvent, mergeMap, map, take, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// 한 스트림이 다 끝나기 전에도 다른 것들이 merge가 됨
fromEvent<MouseEvent>(document, 'click')
  .pipe(
    mergeMap((e: MouseEvent) =>
      interval(1000).pipe(
        map((i) => e.x + ' : ' + i),
        take(5)
      )
    )
  )
  .subscribe(console.log);

//
of(3, 15, 4, 9, 1, 7)
  .pipe(
    mergeMap((keyword) =>
      ajax(`http://127.0.0.1:3000/people/${keyword}`).pipe(
        map((item: any) => item.response.first_name)
      )
    )
  )
  .subscribe(
    console.log,
    (err: Error) => console.error('발행중 오류', err),
    () => console.log('발행물 완결')
  );
