import { Observable, of, interval, fromEvent } from 'rxjs';

// custom stream

const obs$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);

  // 값을 다 발행한 뒤에는 complete를 실행하여 메모리 해제
  subscriber.complete();
});

obs$.subscribe((item) => console.log(item));

const obs1$ = of('a', 'b', 'c');
const obs2$ = interval(1000);
const obs3$ = fromEvent(document, 'click');

setTimeout((_: any) => {
  console.log('of 구독 시작');
  obs1$.subscribe((item) => console.log(item));
}, 5000);

setTimeout((_: any) => {
  console.log('interval 구독 시작');
  obs2$.subscribe((item) => console.log(item));
}, 10000);

setTimeout((_: any) => {
  console.log('fromEvent 구독 시작');
  obs3$.subscribe((_) => console.log('click!'));
}, 15000);

setTimeout((_: any) => {
  console.log('interval 구독 시작 2');
  obs2$.subscribe((item) => console.log(item));
}, 20000);
