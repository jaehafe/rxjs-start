import { map, combineLatest, interval, fromEvent } from 'rxjs';

// 두 스트림을 각 최신 값들끼리 결합
combineLatest([
  interval(2000),
  fromEvent(document, 'click').pipe(map((x) => x)),
]).subscribe(console.log);
