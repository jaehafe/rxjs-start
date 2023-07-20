import { interval, take, tap, takeLast, shareReplay } from 'rxjs';

const obs$ = interval(1000).pipe(
  take(20),
  tap((x) => console.log(`side effect: ${x}`)),
  shareReplay(3) // share된 스트림의 마지막 N개 발행물을 새 구독자에게 발행
);

obs$.subscribe((x) => console.log(`subscriber 1: ${x}`));

setTimeout(() => {
  obs$.subscribe((x) => console.log(`subscriber 2: ${x}`));
}, 5000);

setTimeout(() => {
  obs$.subscribe((x) => console.log(`subscriber 3: ${x}`));
}, 10000);
