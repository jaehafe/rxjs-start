import { Observable } from 'rxjs';

const obs$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  null[0]; // 오류
  subscriber.next(4);
  subscriber.complete(); // 오류
});

// 오류가 나면 발행이 중단됨
obs$.subscribe(
  console.log,
  (err: Error) => console.error('발행중 오류', err),
  () => console.log('발행물 완결')
);
