import { sampleTime, timeInterval } from 'rxjs';
import { clicks$ } from './debounceTime';

// 특정 시간 간격으로 값을 출력하고 싶을 때
clicks$
  .pipe(sampleTime(1000), timeInterval())
  .subscribe((x) =>
    console.log('OUTPUT: -------- ' + x.value + ' :' + x.interval)
  );
