import { auditTime, fromEvent, pluck, scan, tap, timeInterval } from 'rxjs';
import { clicks$ } from './debounceTime';

// auditTime(1000) 해당 시간이 지난 다음에는 그 값이 무조건 출력됨
// 그 값은 시간이 지나는 동안 마지막으로 입력된 값이 나옴
clicks$
  .pipe(auditTime(1000))
  .subscribe((x) => console.log('OUTPUT: -------- ' + x));
