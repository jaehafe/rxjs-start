import { range, bufferCount, fromEvent } from 'rxjs';

range(1, 100).pipe(bufferCount(10, 10)).subscribe(console.log);
// [1- 10]
// [11 - 20]
// ...
// [91 - 100]

// 3번 클릭했을 때 마지막 한번만 FIRE
fromEvent(document, 'click')
  .pipe(bufferCount(3))
  .subscribe(() => console.log('FIRE'));
