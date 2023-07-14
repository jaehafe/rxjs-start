import { Observable } from 'rxjs';

const obs$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete(); // 4는 출력되지 않고 완료됨
  subscriber.next(4);
});

obs$.subscribe(
  console.log,
  (err: Error) => console.error('발행중 오류', err),
  () => console.log('발행물 완결')
);
