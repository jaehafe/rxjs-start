import { interval, take, tap, takeLast, share } from 'rxjs';

const obs$ = interval(1000).pipe(
  take(20),
  tap((x) => console.log(`side effect: ${x}`)),
  share() // object를 Subject처럼 만들어줌
);

// 스트림을 여러 구독자들간 공유
// 스트림의 부작용이 한 번만 발생

obs$.subscribe((x) => console.log(`subscriber 1: ${x}`));

setTimeout(() => {
  obs$.subscribe((x) => console.log(`subscriber 2: ${x}`));
}, 5000);

setTimeout(() => {
  obs$.subscribe((x) => console.log(`subscriber 3: ${x}`));
}, 10000);
