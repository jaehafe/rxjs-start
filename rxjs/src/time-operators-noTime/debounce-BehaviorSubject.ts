import { BehaviorSubject, fromEvent, interval, debounce, tap } from 'rxjs';

// 유동적인 debounce 활용 가능
const bs = new BehaviorSubject(1000);

fromEvent<MouseEvent>(document, 'click')
  .pipe(
    tap(() => console.log(bs.getValue())), // bs가 갖고 있는 값을 먼저 출력 // 1000
    debounce((e: MouseEvent) => interval(bs.getValue())), // 1000만큼 debounce
    tap(() => bs.next(bs.getValue() + 500)) // 1500 0.5초씩 debounce값이 늘어남
  )
  .subscribe(() => console.log('CLICK'));
